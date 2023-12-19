from django.shortcuts import render
from django.http import HttpResponse
from .models import User
from .forms import myforms
# Create your views here.
def base(request):
    return render(request,'base.html')
def user(request):

    data=User.objects.all()
    dic={'Names':data}
    return render(request,'user.html',context=dic)

def index(request):
    data=myforms()
    if request.method == 'POST':
        data=myforms(request.POST)
        if data.is_valid():
            data.save(commit=True)
            return user(request)
        else:
            print("ERROR something went worng")            
    return render(request, 'index.html',{'fo':data})
def help(request):
    mydic={"help":"help me"}
    return render(request,'help.html',context=mydic)         
