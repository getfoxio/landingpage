from re import L
from django.shortcuts import render
from django.conf import settings


def LandingPage(request):
    return render(request, 'landingpage.html')


def LandingPageJS(request, username: str, apikey: str):
    return render(request, 'lp_js.html', {
        'username': username,
        'apikey': apikey,
        'api_url': 'https://{}'.format(settings.API_URL)
    })


def LandingPageReactJS(request, username: str, apikey: str):
    return render(request, 'lp_reactjs.html', {
        'username': username,
        'apikey': apikey,
        'api_url': 'https://{}'.format(settings.API_URL)
    })
