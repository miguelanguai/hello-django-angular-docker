# api/serializers.py
from rest_framework import serializers
from .models import Sensor  # Asegúrate de tener algún modelo en models.py

class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = '__all__'
