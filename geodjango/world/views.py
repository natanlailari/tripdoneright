from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("Rango says hey there world!")
# Create your views here.
