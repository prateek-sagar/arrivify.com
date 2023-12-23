from django.urls import path
from .views import *
urlpatterns = [
    path("visitors/", VisitorsView.as_view(), name=""),
    path("employees/", EmployeesView.as_view(), name=""),
]
