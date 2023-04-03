from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import BoardSerializer, Board
# Create your views here.
#API

@api_view(['GET'])
def board_details(request):

    board = Board.objects.all()
    serializer = BoardSerializer(board, many=True).data

    return Response(board)

