# Generated by Django 4.2.7 on 2023-12-09 14:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_rename_usermodel_visitorsmodel'),
    ]

    operations = [
        migrations.RenameField(
            model_name='visitorsmodel',
            old_name='adress',
            new_name='address',
        ),
        migrations.RemoveField(
            model_name='visitorsmodel',
            name='phone',
        ),
    ]
