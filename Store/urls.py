from django.urls import path
from . import views


urlpatterns = [
    path("", views.home_page, name="home-page"  ),
    path("collection/<str:collection_name>/", views.collection_page, name='collection-page'),
    path("new-arrivals/", views.whats_hot_page, name='whats-hot-page'),    
    
]