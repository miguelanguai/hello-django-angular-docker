from django.urls import path
from . import views

urlpatterns = [
    path('sensor/', views.getSensores),
]
