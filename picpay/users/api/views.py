from rest_framework import generics
from rest_framework.filters import SearchFilter

from users.models import UserPicpay
from users.api.serializers import UserPicpaySerializer
from users.api.pagination import UserSearchPagination
from users.api.orders import UsersPicpayOrdering

class UsersPicpayListView(generics.ListAPIView):
    queryset = UserPicpay.objects.all()
    serializer_class = UserPicpaySerializer
    pagination_class = UserSearchPagination
    filter_backends = (SearchFilter, UsersPicpayOrdering, )
    search_fields = ('id', 'username', 'name')
