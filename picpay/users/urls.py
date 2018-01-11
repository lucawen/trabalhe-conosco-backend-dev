from django.urls import path

from users.views import UsersPicpayListView

urlpatterns = [
    path('', UsersPicpayListView.as_view()),
]
