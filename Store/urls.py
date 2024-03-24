from django.urls import path
from . import views


urlpatterns = [
    path("", views.home_page, name="home-page"  ),
    path("collection/<str:collection_name>/", views.collection_page, name='collection-page')
    # path("page/<product_name>/tk-you", views.thank_you_page, name="thank-you-page" ),
    
    
]