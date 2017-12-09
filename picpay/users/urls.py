from django.urls import path

from users.views import UsersPicpayListView

urlpatterns = [
    path('list/', UsersPicpayListView.as_view()),
]
