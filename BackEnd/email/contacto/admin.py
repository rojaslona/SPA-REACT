from django.contrib import admin
from .models import Mensaje


@admin.register(Mensaje)
class MensajeAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'email', 'fecha')
    search_fields = ('nombre', 'email', 'mensaje')
    readonly_fields = ('fecha',)
