from django.db import models

# Create your models here.

class Sedestra(models.Model):
    name =  models.CharField(max_length=100, blank=True, default='')
    barrio = models.CharField(max_length=100, blank=True, default='')
    direccion = models.CharField(max_length=100, blank=True, default='')
    
    class Meta:
        ordering = ('name',)