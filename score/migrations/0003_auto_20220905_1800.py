# Generated by Django 3.1 on 2022-09-05 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('score', '0002_auto_20220306_1338'),
    ]

    operations = [
        migrations.AlterField(
            model_name='score',
            name='clear_time',
            field=models.CharField(default='', max_length=10),
        ),
    ]
