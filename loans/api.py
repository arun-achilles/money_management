from loans.models import Loan
from rest_framework import viewsets, permissions
from .serializers import LoanSerializer
from IPython import embed

class LoanViewSet(viewsets.ModelViewSet):
	queryset = Loan.objects.all()
	permission_classes = [
		permissions.IsAuthenticated
	]
	serializer_class = LoanSerializer

	def get_queryset(self):
		return self.request.user.loans.all()

	def perform_create(self, serializer):
		serializer.save(owner=self.request.user)