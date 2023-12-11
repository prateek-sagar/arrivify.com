from django.urls import path
from .views import *
urlpatterns = [
    path("", VisitorsView.as_view(), name="")
]
