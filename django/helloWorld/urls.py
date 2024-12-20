from django.urls import path
from .views import MessageView, SensorListView

urlpatterns = [
    path('sensores/', SensorListView.as_view(), name='sensor-list'),
    path('mensaje/', MessageView.as_view(), name='mensaje'),
]
