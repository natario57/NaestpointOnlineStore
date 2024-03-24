from django.shortcuts import render
from Product.models import Products
from .models import Advertisement, Collection
from django.core.paginator import Paginator
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


def collection_page(request,collection_name):
    brand=Collection.objects.get(collection_name=collection_name)
    collection_prod=Products.objects.filter(collection_id=brand.id)
    # collection_prod=Products.objects.filter(collection_id=0)

    paginator = Paginator(collection_prod, 8)  # Show 8 products per page.
    page_number = request.GET.get("page")
    page_obj = paginator.get_page(page_number)
    return render(request,"store/top-rose.html",{"page_obj": page_obj,'design_brand':brand})