from django.urls import path,include
from .views import ScoreView


urlpatterns = [
    path('',ScoreView.as_view(),name = 'index'),
    path('rank',ScoreView.rank,name='rank'),
    path('order',ScoreView.order,name='order'),
    path('libretto',ScoreView.libretto,name='libretto'),
]