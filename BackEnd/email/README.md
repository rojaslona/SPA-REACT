# mi_proyecto — Contact Form (compact)

A small Django project that saves contact messages and sends two emails: a confirmation to the submitter and a notification to a configured site recipient.

This README is intentionally compact and gives the commands and snippets you need to run, test and integrate a static frontend (HTML/CSS/JS) served from WebStorm or a static server.

Prerequisites
- Python 3.8+
- pip
- (optional) virtual environment

Quick setup (local development)
1. From the project root (where `manage.py` lives) create and activate a virtualenv (optional but recommended):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt  # if present; otherwise at least: pip install Django
```

2. Apply database migrations:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

3. Run the development server:

```bash
python3 manage.py runserver
```

4. Open the contact form in your browser:

```
http://127.0.0.1:8000/contacto/
```

Environment variables (email + recipient)
- `EMAIL_HOST` — SMTP host (if set, SMTP backend is used)
- `EMAIL_PORT` — SMTP port (default: 587)
- `EMAIL_USE_TLS` — `True`/`False`
- `EMAIL_HOST_USER` — SMTP username
- `EMAIL_HOST_PASSWORD` — SMTP password
- `DEFAULT_FROM_EMAIL` — From address for outgoing mail
- `CONTACT_RECIPIENT` — Notification recipient (default: `hoviwob142@ampdial.com`)

Example (set in your shell or WebStorm Run/Debug env):

```bash
export EMAIL_HOST="smtp.example.com"
export EMAIL_PORT="587"
export EMAIL_USE_TLS="True"
export EMAIL_HOST_USER="smtp-user"
export EMAIL_HOST_PASSWORD="secret"
export DEFAULT_FROM_EMAIL="no-reply@yourdomain.com"
export CONTACT_RECIPIENT="hoviwob142@ampdial.com"
```

How email configuration works
- If `EMAIL_HOST` is defined, the app uses Django's SMTP backend with the provided settings.
- If `EMAIL_HOST` is not defined, the app uses Django's console backend (development): outgoing emails are printed to the server console.

Testing
- Run the app tests (use `manage.py test` so Django settings and test DB are configured):

```bash
python3 manage.py test contacto -v2
```

- Run a single test:

```bash
python3 manage.py test contacto.tests.ContactFormTests.test_contact_post_saves_and_sends_emails -v2
```

Manual checks
- Inspect saved messages in the Django shell:

```bash
python3 manage.py shell
# then inside Python
from contacto.models import Mensaje
for m in Mensaje.objects.all():
    print(m.id, m.nombre, m.email, m.fecha)
```

- Confirm the configured recipient value:

```bash
python3 manage.py shell
from django.conf import settings
print(settings.CONTACT_RECIPIENT)
```

Frontend integration (WebStorm / static HTML/JS)
- If your frontend runs on a different origin (Live Server, WebStorm built-in server, or a separate dev server), add that origin to `CORS_ALLOWED_ORIGINS` and `CSRF_TRUSTED_ORIGINS` in `settings.py`.
- Typical local origins to add: `http://127.0.0.1:63342`, `http://localhost:63342`, `http://localhost:3000`.

Minimal JS example (fetch with CSRF from cookie):

```javascript
function getCookie(name) {
  const v = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return v ? v.pop() : '';
}

async function sendContact(formEl) {
  const data = {
    nombre: formEl.nombre.value,
    email: formEl.email.value,
    mensaje: formEl.mensaje.value
  };
  const csrftoken = getCookie('csrftoken');
  const res = await fetch('http://127.0.0.1:8000/contacto/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-CSRFToken': csrftoken
    },
    body: new URLSearchParams(data),
    credentials: 'include'
  });
  return res;
}

// Example usage:
// document.querySelector('#contact-form').addEventListener('submit', e => { e.preventDefault(); sendContact(e.target); });
```

WebStorm tips
- Set environment variables in Run/Debug → Environment variables for your Django run configuration.
- Use Live Edit or the built-in static server for frontend files. If frontend is served from a non-local origin, add it to `CORS_ALLOWED_ORIGINS` and `CSRF_TRUSTED_ORIGINS`.
- For quick testing, leave `EMAIL_HOST` unset so outgoing mail appears in the server console.

Troubleshooting
- `ModuleNotFoundError` when running tests: run tests from the directory that contains `manage.py` and use `python3 manage.py test ...`.
- CSRF 403 when using `curl`: fetch the contact page first to obtain the CSRF cookie, then include it in the POST.
- If SMTP email is not delivered: verify credentials, check provider logs, and check spam/junk folders.

Security & deliverability notes
- Never commit SMTP credentials — use environment variables or a secrets manager.
- For production email delivery, prefer transactional email providers (SendGrid, Mailgun, AWS SES) and configure SPF/DKIM for your sending domain.

Files to check
- `mi_proyecto/mi_proyecto/settings.py` — email configuration, `CONTACT_RECIPIENT`, optional CORS/CSRF entries
- `mi_proyecto/contacto/views.py` — saves `Mensaje`, sends confirmation to submitter and notification to `CONTACT_RECIPIENT`
- `mi_proyecto/contacto/tests.py` — unit test that asserts two emails are sent

If you want, I can also:
- Add a small `requirements.txt` (Django pinned),
- Add a `.env.example` file with the env keys (no secrets),
- Add a short CONTRIBUTING or DEV_NOTES file with WebStorm run configuration details.
