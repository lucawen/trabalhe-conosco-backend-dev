from rest_framework import generics
from rest_framework.filters import SearchFilter
from django.db.models import Case, When

from users.models import UserSearchPriority, UserPicpay
from users.api.serializers import UserPicpaySerializer
from users.api.pagination import UserSearchPagination


class UsersPicpayListView(generics.ListAPIView):
    queryset = UserPicpay.objects.all()
    serializer_class = UserPicpaySerializer
    pagination_class = UserSearchPagination
    filter_backends = (SearchFilter, )
    search_fields = ('id', 'username', 'name')

    def get_queryset(self):
        queryset = super(UsersPicpayListView, self).get_queryset()
        weights = UserSearchPriority.objects.all().values_list(
            'weight', flat=True).order_by('weight').distinct()

        order_ids = []
        for it in weights:
            list_ids = UserSearchPriority.objects.filter(weight=it) \
                .order_by('pk').values_list('id_user', flat=True)
            for item in list_ids:
                if UserPicpay.objects.filter(pk=item).exists():
                    order_ids.append(item)
        en_ids = enumerate(order_ids)
        preserved = Case(*[When(pk=pk, then=pos) for pos, pk in en_ids])
        queryset = queryset.order_by(preserved)
        print
        return queryset
