from django.shortcuts import render, redirect
from django.core.mail import send_mail
from .forms import MensajeForm
from django.conf import settings
from django.urls import reverse
from django.contrib import messages
from urllib.parse import urlencode


def contacto_view(request):
    if request.method == "POST":
        form = MensajeForm(request.POST)
        if form.is_valid():
            mensaje = form.save()  # guarda en la base de datos

            # enviar email de respuesta al remitente (console backend in dev)
            try:
                send_mail(
                    subject="Gracias por contactarnos",
                    message=f"Hola {mensaje.nombre}, gracias por tu mensaje: '{mensaje.mensaje}'. Te responderemos pronto.",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[mensaje.email],
                    fail_silently=False,
                )
                messages.success(request, "Hemos enviado una copia a tu correo.")
            except Exception:
                # don't crash the view if email fails; show user-friendly message
                messages.error(request, "No fue posible enviar el correo al remitente. Intenta más tarde.")

            # enviar una notificación al responsable del sitio (CONTACT_RECIPIENT)
            try:
                send_mail(
                    subject=f"Nuevo mensaje de contacto: {mensaje.nombre}",
                    message=f"Has recibido un nuevo mensaje de contacto:\n\nNombre: {mensaje.nombre}\nEmail: {mensaje.email}\n\nMensaje:\n{mensaje.mensaje}",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.CONTACT_RECIPIENT],
                    fail_silently=False,
                )
            except Exception:
                # don't expose admin-mail failures to the end user; silently ignore or log in future
                pass

            # redirect to avoid duplicate form submission
            query = urlencode({'nombre': mensaje.nombre})
            return redirect(f"{reverse('contacto:contacto_exito')}?{query}")
    else:
        form = MensajeForm()

    return render(request, "contacto_form.html", {"form": form})


def contacto_exito_view(request):
    nombre = request.GET.get('nombre', '')
    return render(request, 'contacto_exito.html', {'nombre': nombre})
