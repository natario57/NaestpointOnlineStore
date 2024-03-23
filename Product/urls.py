from django.urls import path
from . import views


urlpatterns = [
    path("<str:prod_name>/", views.single_product, name="single-prod-page"  ),
    
    
]