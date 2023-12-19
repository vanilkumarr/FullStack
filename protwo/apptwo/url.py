from . import views
from django.urls import path

app_name='templates'
urlpatterns=[
    path('',views.base,name='base'),
    path('index',views.index,name='index'),
    path('help',views.help,name='help'),
    path('users',views.user,name='user'),
]