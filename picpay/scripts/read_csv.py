import pandas as pd
import os

from django.conf import settings
from users.models import UserSearchPriority, UserPicpay

def get_uuid_order():
    weights = UserSearchPriority.objects.all().values_list(
        'weight', flat=True).order_by('weight').distinct()

    order_ids = []
    for it in weights:
        list_ids = UserSearchPriority.objects.filter(weight=it) \
            .order_by('pk').values_list('id_user', flat=True)
        for item in list_ids:
            if UserPicpay.objects.filter(pk=item).exists():
                order_ids.append(item)

    return order_ids

def run():
    sorter = get_uuid_order()
    csv_loc = os.path.join(settings.BASE_DIR, 'data/users.csv')
    df = pd.read_csv(csv_loc, sep=',', header=None)
    sorterIndex = dict(zip(sorter, range(len(sorter))))
    df[3] = df[0].map(sorterIndex)

    df.sort_values([0], ascending=[True], inplace=True)
    df.drop(3, 1, inplace=True)
    print(df[0])
