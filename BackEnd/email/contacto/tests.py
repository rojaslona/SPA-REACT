from django.test import TestCase, override_settings
from django.urls import reverse
from contacto.models import Mensaje
from django.core import mail


class ContactFormTests(TestCase):
    @override_settings(EMAIL_BACKEND='django.core.mail.backends.locmem.EmailBackend', CONTACT_RECIPIENT='hoviwob142@ampdial.com')
    def test_contact_post_saves_and_sends_emails(self):
        url = reverse('contacto:contacto')
        data = {'nombre': 'Test Case', 'email': 'testcase@example.com', 'mensaje': 'Prueba desde unit test'}
        response = self.client.post(url, data, follow=True)
        # After successful post we should land on the success page
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.redirect_chain)
        # Ensure Mensaje created
        self.assertEqual(Mensaje.objects.filter(email='testcase@example.com').count(), 1)
        # The locmem email backend stores sent messages in mail.outbox
        self.assertEqual(len(mail.outbox), 2)
        subjects = [m.subject for m in mail.outbox]
        self.assertTrue(any('Gracias por contactarnos' in s for s in subjects))
        self.assertTrue(any('Nuevo mensaje de contacto' in s for s in subjects))
