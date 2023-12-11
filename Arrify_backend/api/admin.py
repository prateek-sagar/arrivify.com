from django.contrib import admin
from .models import VisitorsModel, EmployeeModel

admin.site.register([VisitorsModel, EmployeeModel])
