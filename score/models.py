from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
#チームの追加はここから直接
class TeamChoices(models.TextChoices):
    TEAM1 = ('SpaceValkyrie','SpaceValkyrie')
    TEAM2 = ('チームカズシ','チームカズシ')
    TEAM3 = ('こぐま座','こぐま座')
    TEAM4 = ('チームユウシ','チームユウシ')
    TEAM5 = ('アノマロ','アノマロ')
    TEAM6 = ('スペースエクスプローラーズ','スペースエクスプローラーズ')
    TEAM7 = ('12時20分','12時20分')
    TEAM8 = ('にゅうさんきん','にゅうさんきん')
    TEAM9 = ('PISTOL STAR','PISTOL STAR')
    TEAM10 = ('PUMA','PUMA')
    TEAM11 = ('Iriko','Iriko')
    TEAM12 = ('流れ星★','流れ星★')
    TEAM13 = ('OSHIRO','OSHIRO')
    TEAM14 = ('H','H')
    TEAM15 = ('TOMATO人','TOMATO人')
    TEAM16 = ('SFK','SFK')
    TEAM17 = ('ロワン','ロワン')
    TEAM18 = ('はると','はると')
    TEAM19 = ('素数少年','素数少年')
#走行順の選択し
class RunChoices(models.TextChoices):
    First = ('第1走行','第1走行')
    Seconds = ('第2走行','第2走行')

#データベースの項目設定
class Score(models.Model):
    team = models.CharField(max_length=50,choices=TeamChoices.choices)
    run = models.CharField(max_length=50,choices=RunChoices.choices)
    m1_cnt = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)],default=0)
    m2_cnt = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)],default=0)
    m2kami_cnt = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)],default=0)
    m3_cnt = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)],default=0)
    m3kami_cnt = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)],default=0)
    m4_cnt = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)],default=0)
    m4kami_cnt = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)],default=0)
    m5_cnt = models.BooleanField(default=False)
    m6_cnt = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)],default=0)
    m6kami_cnt = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)],default=0)
    m7_cnt = models.BooleanField(default=False)
    bonus1=models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)],default=0)
    bonus2=models.BooleanField(default=False)
    perfect = models.BooleanField(default=False)
    clear_time = models.CharField(default="", max_length=10)
    rank = models.IntegerField(null=True)
    total=models.IntegerField(default=0)
    def __str__(self):
        return self.team
