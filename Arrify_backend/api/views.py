from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import VisitorsModel, EmployeeModel
from .serilizers import VisitorSerializer

class VisitorsView(APIView):
    visitor_model = VisitorsModel
    serializer_class = VisitorSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            print("serializer is valid")
            f_name = serializer.data.get("first_name")
            l_name = serializer.data.get("last_name")
            e_mail = serializer.data.get("email")
            _purpose = serializer.data.get("purpose")
            to_meet = serializer.data.get("to_meet")
            # phone = serializer.data.get("phone_number")
            address = serializer.data.get("to_meet")
            model = VisitorsModel(email = e_mail, first_name = f_name, last_name = l_name,
                                  purpose = _purpose, to_meet = to_meet,
                                  adress=address)
            model.save()
            return Response({'msg': f_name}, status=status.HTTP_201_CREATED)
        
        return Response({'msg': 'Invalid bad request'}, status=status.HTTP_400_BAD_REQUEST)



