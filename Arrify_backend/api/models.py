from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class EmployeeModel(models.Model):
    """
    Use to store details of employees, consisting of their name, designation which is
    helpful to create the dashboard of an employee and help to login in the their dashboard.
    """
    email = models.EmailField(max_length=254)
    name = models.CharField(max_length=254)
    designation = models.CharField(max_length=50)
    available = models.BooleanField(default=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.designation
    


class VisitorsModel(models.Model):
    """
    This model stores all the information about visitors that helps the employee to 
    track and achedule the visitors.
    """
    email = models.EmailField(max_length=254, null=False, unique=True)  
    first_name = models.CharField(max_length=50)                       
    last_name = models.CharField(max_length=50)                        
    purpose = models.CharField(max_length=50, null=False)
    to_meet  = models.ForeignKey(EmployeeModel, on_delete=models.CASCADE, null=False)     # Designation of the employee
    address = models.CharField(max_length=512)
    check_in = models.DateTimeField(auto_now_add=True)
    check_out = models.DateTimeField(null=True, blank=True)
