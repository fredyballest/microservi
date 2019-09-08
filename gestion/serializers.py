from rest_framework import serializers
from .models import Sedestra

class SedestranSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sedestra
        fields = ['id', 'name', 'barrio', 'direccion']