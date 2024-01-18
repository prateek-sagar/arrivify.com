from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import VisitorsModel, EmployeeModel
from .serializers import VisitorSerializer
from rest_framework.permissions import IsAuthenticated

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
            to_meet_data = EmployeeModel.objects.get(id=to_meet)
            
            # phone = serializer.data.get("phone_number")
            address = serializer.data.get("address")
            model = VisitorsModel(email = e_mail, first_name = f_name, last_name = l_name,
                                  purpose = _purpose, to_meet = to_meet_data,
                                  address=address)
            model.save()
            return Response({'msg': f_name}, status=status.HTTP_201_CREATED)
        
        return Response({'msg': 'Invalid bad request'}, status=status.HTTP_400_BAD_REQUEST)

class EmployeesView(APIView):
    def get(self, request, format=None):
        model = EmployeeModel
        mydata = model.objects.all().values()

        return Response({"data": mydata}, status=status.HTTP_200_OK)


class HomeView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'}
        return Response(content)
    
class LogoutView(APIView):
     permission_classes = (IsAuthenticated,)
     def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
