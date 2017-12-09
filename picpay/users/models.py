import uuid
from django.db import models


class UserPicpay(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, db_index=True)
    username = models.CharField(max_length=100, db_index=True)
    name = models.CharField(max_length=200, db_index=True)


class UserSearchPriority(models.Model):
    id_user = models.UUIDField(db_index=True, unique=True)
    weight = models.IntegerField(db_index=True)
