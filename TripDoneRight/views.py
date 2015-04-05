from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("Rango's gonna say hey there world!")
# Create your views here.