from django.shortcuts import render
from .models import Products

# Create your views here.

def single_product(request,prod_name):
    product=Products.objects.get(product_name=prod_name)
    prod_suggestions=Products.objects.filter(product_gender=product.product_gender)[:6]
    
    return render(request,'product/single-product.html',{"product":product,"prod_suggestions":prod_suggestions}) 
