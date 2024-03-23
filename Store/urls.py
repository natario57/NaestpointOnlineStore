from django.urls import path
from . import views


urlpatterns = [
    path("", views.home_page, name="home-page"  ),
    # path("page/<product_name>/tk-you", views.thank_you_page, name="thank-you-page" ),
    
    
]