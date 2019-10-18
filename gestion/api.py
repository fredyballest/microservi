from gestion.models import Sedestra
from rest_framework import viewsets, permissions
from .serializers import SedestranSerializer

# Lead Viewset


class SedesViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = SedestranSerializer

    def get_queryset(self):
        return self.request.user.gestion.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)