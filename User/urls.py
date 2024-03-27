from django.shortcuts import redirect
from django.urls import path
from . import views
from django.contrib.auth import views as auth_views


urlpatterns = [
    path("login/", auth_views.LoginView.as_view(template_name='user/login.html'), name="login-page"),
    # path("login/", views.login_page, name="login-page"),
    path("register/", views.register_page, name="register-page"),
    path("profile/", views.user_profile, name="user-profile"),
    # path("logout/", views.logout_page, name="logout-page"),
    path('logout/',auth_views.LogoutView.as_view(),name="logout-page"),
    
    
]