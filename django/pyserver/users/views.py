from django.shortcuts import redirect, render

from django.urls import reverse_lazy
from django.views import generic

from .forms import GetFoxUserCreationForm
from .models import GetFoxUser
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required


class SignUp(generic.CreateView):
    form_class = GetFoxUserCreationForm
    success_url = reverse_lazy('signin')
    template_name = 'users/signup.html'


def SignIn(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            if 'next' in request.POST:
                return redirect(request.POST.get('next'))
            else:
                return redirect('/links/add')
    else:
        form = AuthenticationForm()
    return render(request, 'users/signin.html', {'form': form})


class SignInIGLink(generic.CreateView):
    form_class = GetFoxUserCreationForm
    success_url = reverse_lazy('links/get')
    template_name = 'users/signin_ig_link.html'


def SignInIG(request):
    render(request, 'users/profile.html', {'user': request.user})


@login_required(login_url="/")
def Profile(request):
    render(request, 'users/profile.html', {'user': request.user})
