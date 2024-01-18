from django.urls import path
from .views import *
urlpatterns = [
    path("visitors/", VisitorsView.as_view(), name=""),
    path("employees/", EmployeesView.as_view(), name=""),
    path("home/", HomeView.as_view(), name="home"),
    path('logout/', LogoutView.as_view(), name ='logout'),
]
