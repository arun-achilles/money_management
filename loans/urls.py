from rest_framework import routers
from .api import LoanViewSet

router = routers.DefaultRouter()
router.register('api/loans', LoanViewSet, 'loans')

urlpatterns = router.urls