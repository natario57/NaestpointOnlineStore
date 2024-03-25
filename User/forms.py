from django.contrib.auth.forms import UserCreationForm
from django import forms
from phonenumber_field.formfields import PhoneNumberField
from .models import CustomUser


class CustomUserForm(UserCreationForm):
    phone = PhoneNumberField()
    address= forms.Textarea()
    class Meta:
        model=CustomUser
        fields=['first_name','last_name','username','email','phone_no',"address"]