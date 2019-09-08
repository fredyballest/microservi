from rest_framework import routers
from .views import SedesViewSet

router = routers.DefaultRouter()
router.register('api/sedes', SedesViewSet, 'sedes')

urlpatterns = router.urls

