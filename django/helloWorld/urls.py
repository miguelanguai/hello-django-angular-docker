from django.urls import path
from .views import SensorListView

urlpatterns = [
    path('sensores/', SensorListView.as_view(), name='sensor-list'),
]
