from django.shortcuts import render
from Product.models import Products
from .models import Advertisement

# Create your views here.


def home_page(request):
    all_product=Products.objects.all()
    all_adds=Advertisement.objects.all()
    # featured_prod=all_product.filter(prod_is_featured=True)
    # mens_product=all_product.filter(product_gender="MALE")
    arguement={'featured':all_product.filter(prod_is_featured=True),
               "mens_prod":all_product.filter(product_gender="MALE"),
               "carousel":all_adds.filter(advert_location="CAROUSEL"),
               "sec2_ads":all_adds.filter(advert_location="sec2_advert"),
               "sec3_ads":all_adds.filter(advert_location="sec3_advert"),
               "sec4_ads":all_adds.filter(advert_location="sec4_advert"),}
    return render(request,'store/index.html',arguement)
