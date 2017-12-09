from django.urls import path

from users.api.views import UsersPicpayListView

urlpatterns = [
    path('list/', UsersPicpayListView.as_view()),
]
