from django.urls import path
from . import views


urlpatterns = [
    path('', views.SignIn, name='signin'),
    path('signup/', views.SignUp.as_view(), name='signup'),
    path('signin/', views.SignIn, name='signin'),
    path('signin_ig_link/', views.SignInIGLink.as_view(),
         name='signin_ig_link'),
    path('profile/', views.Profile, name='profile'), ]
