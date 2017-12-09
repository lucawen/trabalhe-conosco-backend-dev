from rest_framework.filters import OrderingFilter
from django.db.models import Case, When

from users.models import UserSearchPriority, UserPicpay

class UsersPicpayOrdering(OrderingFilter):

    def filter_queryset(self, request, queryset, view):

        ordering = self.get_ordering(request, queryset, view)
        if ordering:
            queryset = queryset.order_by(*ordering)

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
        queryset.order_by(preserved)
        return queryset
