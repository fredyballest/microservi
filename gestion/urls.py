from rest_framework import routers
from .api import SedesViewSet

router = routers.DefaultRouter()
router.register('api/sedes', SedesViewSet, 'leads')

urlpatterns = router.urls


