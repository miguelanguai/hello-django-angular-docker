from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Sensor
from .serializers import SensorSerializer

@api_view(['GET'])
def getSensores(request):
    sensores = Sensor.objects.all()
    serializer = SensorSerializer(sensores, many=True)
    return Response(serializer.data)