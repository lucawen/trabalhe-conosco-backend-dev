import csv
import os

from django.core.management.base import BaseCommand, CommandError
from django.conf import settings

from users.models import UserSearchPriority


class Command(BaseCommand):
    help = 'Import priority users'

    def add_arguments(self, parser):
        parser.add_argument('file', type=str)
        parser.add_argument('weight', type=int)

    def handle(self, *args, **options):
        """Import users csv to database."""
        weight = options['weight']
        file_path = os.path.join(settings.BASE_DIR, 'data', options['file'])
        if not os.path.isfile(file_path):
            raise CommandError('File for import not found in %s' % file_path)
        with open(file_path) as f_stream:
            content = f_stream.readlines()

        content = [x.strip() for x in content]
        for line in content:
            if not UserSearchPriority.objects.filter(id_user=line).exists():
                obj = UserSearchPriority(id_user=line, weight=weight)
                obj.save()
