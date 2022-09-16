from django import forms
from .models import Score

#フォームをモデルから作成
class ScoreForm(forms.ModelForm):
  class Meta:
    model = Score
    fields =('run','team','m1_cnt','m2_cnt','m2kami_cnt','m3_cnt','m3kami_cnt','m4_cnt','m4kami_cnt','m5_cnt','m6_cnt','m6kami_cnt','m7_cnt','bonus1','bonus2','perfect','clear_time',)
    labels ={
      'run':'走行',
      'team':'チーム名',
      'm1_cnt':'基地一秒ストップ',
      'm2_cnt':'荷物を取る',
      'm2kami_cnt':'荷物をとる（神の手）',
      'm3_cnt':'荷物を置く（MoonBase1）',
      'm3kami_cnt':'荷物を置く（MoonBase1）半分',
      'm4_cnt':'荷物を置く（MoonBase2）',
      'm4kami_cnt':'荷物を置く（MoonBase2）半分',
      'm5_cnt':'S字コースに移動',
      'm6_cnt':'荷物を置く（MoonBase3）',
      'm6kami_cnt':'荷物を置く（MoonBase3）半分',
      'm7_cnt':'MoonBase4に完全停止',
      'bonus1':'障害物回避する',
      'bonus2':'3周してひょうたんコースのスタートへ',
      'perfect':'完全制覇',
      'clear_time':'クリアタイム',
    }

    
