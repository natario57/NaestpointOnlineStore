from enum import unique
from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField       #pip install "django-phonenumber-field[phonenumbers]"

class CustomUser(AbstractUser):
    username=models.CharField(max_length=100, null=True, blank=True, unique=True)
    email=models.CharField(max_length=150, unique=True)
    phone_no = PhoneNumberField(null=True, unique=False)
    address=models.TextField()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=["username"]




