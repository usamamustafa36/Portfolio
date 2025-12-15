# Environment Variables

This document describes all environment variables used in the application.

## Required Variables

### `NEXT_PUBLIC_SITE_URL`
- **Description**: The base URL of your website
- **Example**: `https://outlance.com`
- **Usage**: Used for SEO metadata, sitemap generation, and absolute URLs
- **Required**: Yes

### `CONTACT_EMAIL`
- **Description**: Email address where contact form submissions are sent
- **Example**: `contact@outlance.com`
- **Usage**: Contact form API endpoint
- **Required**: Yes

## Optional Variables

### Email Service Integration

#### Resend
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

#### SendGrid
```bash
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
```

### Analytics

#### Google Analytics
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Error Tracking

#### Sentry
```bash
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
```

## Environment Setup

### Development

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=contact@outlance.com
NODE_ENV=development
```

### Production

Set environment variables in your hosting platform:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **Docker**: Use `-e` flag or `.env` file
- **Self-hosted**: Set in systemd service or PM2 ecosystem file

## Variable Naming

- Variables used in the browser must be prefixed with `NEXT_PUBLIC_`
- Server-only variables should NOT have the `NEXT_PUBLIC_` prefix
- Use uppercase with underscores for variable names

## Security Notes

- Never commit `.env.local` or `.env` files
- Use `.env.example` as a template (without actual values)
- Rotate API keys regularly
- Use different keys for development and production

