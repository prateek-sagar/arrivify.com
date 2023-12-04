from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class EmployeeModel(models.Model):
    email = models.EmailField(max_length=254)
    name = models.CharField(max_length=254)
    designation = models.CharField(max_length=50)
    available = models.BooleanField(default=True)
    password = models.CharField(max_length=100)


class VisitorsModel(models.Model):
    email = models.EmailField(max_length=254, null=False, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    purpose = models.CharField(max_length=50, null=False)
    to_meet  = models.ForeignKey("EmployeeModel", on_delete=models.CASCADE, null=False)
    phone = PhoneNumberField(null=False, blank=False, unique=True)
    adress = models.CharField(max_length=512)
    check_in = models.DateTimeField(auto_now_add=True)
    check_out = models.DateTimeField(null=True)
