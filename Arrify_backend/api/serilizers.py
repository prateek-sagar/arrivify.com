from rest_framework import serializers
from .models import EmployeeModel, VisitorsModel

class VisitorSerializer(serializers.ModelSerializer):
    """
    Its main purpose to use complex model data and render it, that is easily converted into
    JSON formate for the frontend.
    """
    class Meta:
        """Serializer for Visitors to handle the data of the Visitors model"""
        model = VisitorsModel
        fields = ('id', 'email', 'first_name', 
                  'last_name', 'purpose', 'to_meet','address')
                #   , 'purpose', 'to_meet', 'phone', 'adress')
