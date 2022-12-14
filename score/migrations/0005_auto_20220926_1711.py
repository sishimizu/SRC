# Generated by Django 3.1 on 2022-09-26 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('score', '0004_auto_20220926_1635'),
    ]

    operations = [
        migrations.AlterField(
            model_name='score',
            name='bonus1',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0),
        ),
        migrations.AlterField(
            model_name='score',
            name='clear_time',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AlterField(
            model_name='score',
            name='m1_cnt',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0),
        ),
        migrations.AlterField(
            model_name='score',
            name='m2_cnt',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0),
        ),
        migrations.AlterField(
            model_name='score',
            name='m2kami_cnt',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0),
        ),
        migrations.AlterField(
            model_name='score',
            name='m3_cnt',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0),
        ),
        migrations.AlterField(
            model_name='score',
            name='m3kami_cnt',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0),
        ),
        migrations.AlterField(
            model_name='score',
            name='m4_cnt',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0),
        ),
        migrations.AlterField(
            model_name='score',
            name='m4kami_cnt',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0),
        ),
        migrations.AlterField(
            model_name='score',
            name='m6_cnt',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0),
        ),
        migrations.AlterField(
            model_name='score',
            name='m6kami_cnt',
            field=models.IntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3)], default=0),
        ),
    ]
