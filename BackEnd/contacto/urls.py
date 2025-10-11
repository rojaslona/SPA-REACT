from django.urls import path
from .views import contacto_view, contacto_exito_view

app_name = 'contacto'

urlpatterns = [
    path('', contacto_view, name='contacto'),
    path('exito/', contacto_exito_view, name='contacto_exito'),
]

