from django.urls import path
from . import views


urlpatterns = [
    path('', views.LandingPage, name='landingpage'),
    path('lp_js/<slug:username>/<slug:apikey>', views.LandingPageJS, name='landing_page_js'),
    ]
