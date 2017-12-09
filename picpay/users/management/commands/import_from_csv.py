import csv
import os
import uuid

from django.core.management.base import BaseCommand, CommandError
from django.conf import settings

from users.models import UserPicpay


class Command(BaseCommand):
    help = 'Import users from csv file'


    def handle(self, *args, **options):
        """Import users csv to database."""
        file_path = os.path.join(settings.BASE_DIR, 'data', 'users.csv')
        if not os.path.isfile(file_path):
            raise CommandError('File for import not found in %s' % file_path)

        with open(file_path) as csvfile:
            reader = csv.reader(csvfile, delimiter=',')
            for row in reader:
                UserPicpay.objects.get_or_create(
                    id=uuid.UUID(row[0]), name=row[1], username=row[2])
