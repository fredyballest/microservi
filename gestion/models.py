from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Sedestra(models.Model):
    name =  models.CharField(max_length=100, blank=True, default='')
    barrio = models.CharField(max_length=100, blank=True, default='')
    direccion = models.CharField(max_length=100, blank=True, default='')
    owner = models.ForeignKey(
        User, related_name="gestion", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
  
    
    class Meta:
        ordering = ('name',)