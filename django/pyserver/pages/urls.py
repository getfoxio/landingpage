from django.urls import path
from . import views


urlpatterns = [
    path('', views.Landingpage, name='landingpage'),
    ]
