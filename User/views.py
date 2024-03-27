from django.shortcuts import render,redirect
from .forms import CustomUserRegisterForm,LoginForm
from django.contrib import messages
from django.contrib.auth import authenticate, login ,logout,get_user


# def login_page(request):
#     form=LoginForm()
#     if request.method=="POST":
#         form=LoginForm(request.POST)
#         if form.is_valid():
#             email=form.cleaned_data.get("email")
#             password=form.cleaned_data.get("password")
#             print(email,password)
#             user = authenticate(request, email=email, password=password)
#             print(user)
#             if user is not None:
#                 login(request, user)
#                 print("user has been logged in")
#                 return redirect("home-page")
#             else:
#                 pass # find a way to tell the user that one or both the emai/username or password is incorrect

#         form=LoginForm(request.POST)
#     return render(request,"user/login.html",{"form":form})

def register_page(request):
    form=CustomUserRegisterForm()

    if request.method == "POST":
        print("this is a post request")
        form = CustomUserRegisterForm(request.POST)
        print(form)
        if form.is_valid():
            print("the form is valid")
            form.save()
            messages.add_message(request, messages.SUCCESS, "Your account has been created")
            return redirect("login-page")
        form=CustomUserRegisterForm(request.POST)
        
    return render(request,"user/register.html",{"form":form})


# from django.http import HttpResponseRedirect
# def logout_page(request):
#     logout(request)
#     return HttpResponseRedirect(request.path_info)

def user_profile(request):
    return render(request,"user/profile.html")