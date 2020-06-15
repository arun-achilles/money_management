from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Loan(models.Model):
    TYPE_CHOICES = (
        ("LEND", "LEND"),
        ("BORROW", "BORROW"),
    )

    name = models.CharField(max_length=100, blank=False, null=False)
    type = models.CharField(max_length=32, choices=TYPE_CHOICES, default="LEND")
    amount = models.IntegerField(validators=[MinValueValidator(1)], blank=False, null=False)
    reason = models.CharField(max_length=500, blank=False, null=False)
    transfer_date = models.DateTimeField(blank=False, null=False)
    owner = models.ForeignKey(
        User, related_name="loans", on_delete=models.CASCADE, null=True 
    )
    created_at = models.DateTimeField(auto_now_add=True)