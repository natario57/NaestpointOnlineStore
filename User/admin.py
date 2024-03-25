from django.contrib import admin
from .models import CustomUser

# Register your models here.

class CustomUserAdmin(admin.ModelAdmin):
    list_display=("username","email","phone_no")
    list_filter=("is_staff","is_active","last_login")
    search_fields=("username__contains","first_name__contains","last_name__contains",)
    list_per_page=10
    # fields=("product_name","product_description","product_price",("product_img_1",'product_img_2','product_img_3'),"collection",("product_gender","prod_is_featured"))
    # actions=("set_prod_to_featured","set_prod_to_unfeatured")

admin.site.register(CustomUser,CustomUserAdmin)
