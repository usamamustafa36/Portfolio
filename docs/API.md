# API Documentation

## Contact Form API

### POST /api/contact

Handles contact form submissions with validation, rate limiting, and sanitization.

#### Request

**Headers:**
```
Content-Type: application/json
```

**Body:**
```typescript
{
  name: string;      // 2-100 characters, required
  email: string;     // Valid email format, required
  message: string;   // 10-2000 characters, required
}
```

#### Response

**Success (200):**
```json
{
  "message": "Message sent successfully!"
}
```

**Validation Error (400):**
```json
{
  "error": "All fields are required."
}
```

**Rate Limit (429):**
```json
{
  "error": "Too many requests. Please try again later."
}
```

**Server Error (500):**
```json
{
  "error": "An error occurred while sending your message. Please try again later."
}
```

#### Rate Limiting

- **Limit**: 5 requests per minute per IP address
- **Window**: 60 seconds
- Uses in-memory storage (consider Redis for production)

#### Validation Rules

- **Name**: 2-100 characters, required
- **Email**: Valid email format, required
- **Message**: 10-2000 characters, required

#### Security Features

- Input sanitization (removes `<` and `>` characters)
- Rate limiting
- Email format validation
- Length validation
- Error handling

#### Example Usage

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello, I would like to discuss a project.',
  }),
})

const data = await response.json()

if (response.ok) {
  console.log('Success:', data.message)
} else {
  console.error('Error:', data.error)
}
```

#### Integration with Email Services

The API currently logs submissions in development. To integrate with an email service:

1. **Resend** (Recommended):
```typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'contact@outlance.com',
  to: process.env.CONTACT_EMAIL,
  subject: `New contact: ${sanitizedName}`,
  html: `<p>Name: ${sanitizedName}</p><p>Email: ${sanitizedEmail}</p><p>Message: ${sanitizedMessage}</p>`,
})
```

2. **SendGrid**:
```typescript
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

await sgMail.send({
  to: process.env.CONTACT_EMAIL,
  from: 'contact@outlance.com',
  subject: `New contact: ${sanitizedName}`,
  html: `<p>Name: ${sanitizedName}</p><p>Email: ${sanitizedEmail}</p><p>Message: ${sanitizedMessage}</p>`,
})
```

3. **Nodemailer**:
```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  // Configure your email service
})

await transporter.sendMail({
  from: 'contact@outlance.com',
  to: process.env.CONTACT_EMAIL,
  subject: `New contact: ${sanitizedName}`,
  html: `<p>Name: ${sanitizedName}</p><p>Email: ${sanitizedEmail}</p><p>Message: ${sanitizedMessage}</p>`,
})
```

