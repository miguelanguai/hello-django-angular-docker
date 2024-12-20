from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Sensor
from .serializers import SensorSerializer

class SensorListView(APIView):
    def get(self, request):
        sensores = Sensor.objects.all()
        serializer = SensorSerializer(sensores, many=True)
        return Response(serializer.data)

class MessageView(APIView):

    def get(self, request):
        return Response({"message": "¡Hola desde el servidor!"})