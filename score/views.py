from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.views.generic import TemplateView
from .forms import ScoreForm
from .models import Score ,TeamChoices
from django.conf import settings
from django.http import JsonResponse

# Create your views here.
class ScoreView(TemplateView):
  def __init__(self):
    self.params={
    'title':'得点入力',
    'form':ScoreForm(),
    'data':[],
    }
  #得点入力のページにGETでアクセスした場合
  def get(self,request):
    return render(request,'score/index.html',self.params)
  
  #得点入力のページにPOSTでアクセスした場合はフォームの内容をヴァリデーションして保存
  #順位の表示ページに飛ぶ
  def post(self,request):
     self.params['form'] =ScoreForm(request.POST)
     form =self.params['form']
     if form.is_valid():
      form.save()
      return redirect(to='/rank')
  #ランクのページに飛んだ時の処理
  #特典情報を保存しているデータベースから数値を取得し総合得点の計算を行い再保存
  def rank(request):
    data = Score.objects.all()
    for scores in data:
      scores.total=(
        scores.m1_cnt*100
        +scores.m2_cnt*400
        +scores.m2kami_cnt*200
        +scores.m3_cnt*400
        +scores.m3kami_cnt*200
        +scores.m4_cnt*600
        +scores.m4kami_cnt*300
        +scores.m5_cnt*500
        +scores.m6_cnt*1000
        +scores.m6kami_cnt*500
        +scores.bonus1*200
        )
      if scores.m7_cnt == True:
        scores.total+=500
      if scores.bonus2 == True:
        scores.total +=200
      scores.save()
      #総合得点で昇順ソート
      data = Score.objects.all().order_by('total').reverse()
    #newdata = data[0:3]
    params ={
      'title':'現在順位',
      'data':data,
    }
    return render(request,'score/rank.html',params)
  
  def order(request):
    data = TeamChoices
    params ={
      'data':data,
    }
    return render(request,'score/order.html',params)

  def libretto(request):
    return render(request,'score/libretto.html')
  


