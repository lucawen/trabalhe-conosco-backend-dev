from rest_framework import serializers

from users.models import UserPicpay


class UserPicpaySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPicpay
        fields = ('id', 'name', 'username')
