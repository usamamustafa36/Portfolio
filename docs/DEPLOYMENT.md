# Deployment Guide

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Build passes (`npm run build`)
- [ ] Tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Type checking passes (`npm run type-check`)
- [ ] SEO metadata configured
- [ ] Analytics configured (if applicable)
- [ ] Error tracking configured (if applicable)
- [ ] Email service configured for contact form

## Environment Variables

Required environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_EMAIL=contact@yourdomain.com
```

Optional environment variables:

```bash
# Email Service
RESEND_API_KEY=re_xxxxxxxxxxxxx
# or
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Error Tracking
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
```

## Vercel Deployment (Recommended)

1. **Connect Repository**
   - Push code to GitHub/GitLab/Bitbucket
   - Import project in Vercel dashboard

2. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all required variables

3. **Deploy**
   - Vercel automatically deploys on push
   - Or manually trigger from dashboard

4. **Custom Domain**
   - Add domain in Project Settings → Domains
   - Configure DNS as instructed

## Netlify Deployment

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x

2. **Environment Variables**
   - Site Settings → Environment Variables
   - Add all required variables

3. **Deploy**
   - Connect Git repository
   - Netlify will auto-deploy on push

## Docker Deployment

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build
docker build -t company-website .

# Run
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://yourdomain.com \
  -e CONTACT_EMAIL=contact@yourdomain.com \
  company-website
```

### Docker Compose

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
      - CONTACT_EMAIL=contact@yourdomain.com
    restart: unless-stopped
```

## Self-Hosted Deployment

### Using PM2

1. **Build the application:**
```bash
npm run build
```

2. **Install PM2:**
```bash
npm install -g pm2
```

3. **Start with PM2:**
```bash
pm2 start npm --name "company-website" -- start
```

4. **Save PM2 configuration:**
```bash
pm2 save
pm2 startup
```

### Using Systemd

Create `/etc/systemd/system/company-website.service`:

```ini
[Unit]
Description=Company Website Next.js App
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/company_website
Environment="NODE_ENV=production"
Environment="NEXT_PUBLIC_SITE_URL=https://yourdomain.com"
Environment="CONTACT_EMAIL=contact@yourdomain.com"
ExecStart=/usr/bin/npm start
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Enable and start:
```bash
sudo systemctl enable company-website
sudo systemctl start company-website
```

## Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## SSL Certificate

Use Let's Encrypt with Certbot:

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Post-Deployment

1. **Verify deployment:**
   - Check site loads correctly
   - Test contact form
   - Verify analytics (if configured)
   - Check error tracking (if configured)

2. **Monitor:**
   - Set up uptime monitoring
   - Monitor error logs
   - Track performance metrics

3. **Backup:**
   - Regular backups of environment variables
   - Database backups (if applicable)

