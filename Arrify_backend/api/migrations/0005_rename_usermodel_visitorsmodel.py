# Generated by Django 4.2.7 on 2023-12-04 03:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserModel',
            new_name='VisitorsModel',
        ),
    ]
