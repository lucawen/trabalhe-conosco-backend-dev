# Generated by Django 2.0 on 2017-12-09 04:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_usersearchpriority'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usersearchpriority',
            name='weight',
            field=models.IntegerField(db_index=True),
        ),
    ]