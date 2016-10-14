from django.shortcuts import render
from django.http import HttpResponse
def index(request):
	return HttpResponse("McNuggets")
# Create your views here.
