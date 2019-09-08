from rest_framework import viewsets
from .models import Sedestra
from .serializers import SedestranSerializer
# Create your views here.


class SedesViewSet(viewsets.ModelViewSet):
    queryset = Sedestra.objects.all()
    serializer_class = SedestranSerializer