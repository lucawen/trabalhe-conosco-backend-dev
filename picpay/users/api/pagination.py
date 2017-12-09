from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class UserSearchPagination(PageNumberPagination):
    page_size = 15

    def get_paginated_response(self, data):
        return Response({
            'next_page_url': self.get_next_link(),
            'prev_page_url': self.get_previous_link(),
            "last_page": self.page.paginator.num_pages,
            "current_page": self.page.number,
            'page_size': self.page_size,
            'count': self.page.paginator.count,
            'data': data
        })
