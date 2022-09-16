# Generated by Django 3.1 on 2022-02-28 08:13

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('team', models.CharField(choices=[('shimizu', 'simizu'), ('abe', 'abe'), ('hirai', 'hirai'), ('furukawa', 'furukawa'), ('素数少年', '素数少年')], max_length=50)),
                ('run', models.CharField(choices=[('第1走行', '第1走行'), ('第2走行', '第2走行')], max_length=50)),
                ('m1_cnt', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(3)])),
                ('m2_cnt', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(3)])),
                ('m2kami_cnt', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(3)])),
                ('m3_cnt', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(3)])),
                ('m3kami_cnt', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(3)])),
                ('m4_cnt', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(3)])),
                ('m4kami_cnt', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(3)])),
                ('m5_cnt', models.BooleanField(default=False)),
                ('m6_cnt', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(3)])),
                ('m6kami_cnt', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(3)])),
                ('m7_cnt', models.BooleanField(default=False)),
                ('bonus1', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(3)])),
                ('bonus2', models.BooleanField(default=False)),
                ('perfect', models.BooleanField(default=False)),
                ('clear_time', models.DurationField()),
                ('rank', models.IntegerField(null=True)),
                ('total', models.IntegerField(default=0)),
            ],
        ),
    ]
