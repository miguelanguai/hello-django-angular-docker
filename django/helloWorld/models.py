from django.db import models

# Create your models here.

class Sensor(models.Model):
    name = models.CharField(max_length=100)
    value = models.FloatField()  # Un valor numérico para representar la medición del sensor
    unit = models.CharField(max_length=20)  # La unidad de la medición, como '°C', 'm/s', etc.
    created_at = models.DateTimeField(auto_now_add=True) 

