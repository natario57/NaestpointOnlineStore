from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField       #pip install "django-phonenumber-field[phonenumbers]"

class CustomUser(AbstractUser):
    phone_no = PhoneNumberField(null=True, blank=False, unique=False)
    address=models.TextField()



