from django.db import models

# Create your models here.

class Advertisement(models.Model):
    advert_title=models.CharField(max_length=100,default="no advert title")
    advert_text=models.CharField(max_length=250,default="no advert text")
    advert_location=models.CharField(max_length=150,choices=(
        ('1', u'CAROUSEL'),
        ('2', u'sec2_advert'),
        ('3', u'sec3_advert'),
        ('4', u'sec4_advert')))
    advert_img=models.ImageField(upload_to="images/advert",default="default_carousel.jpg")

