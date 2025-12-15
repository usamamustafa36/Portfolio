# Outlance Company Website Documentation

## Table of Contents

- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Guide](#development-guide)
- [Testing](#testing)
- [Deployment](#deployment)
- [API Reference](#api-reference)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)

## Architecture

This is a Next.js 14 application built with:
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React

### Key Features

- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes for form submissions
- Error boundaries for error handling
- SEO optimization
- Accessibility (WCAG 2.1 AA compliant)
- Responsive design
- Performance optimizations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (see `.env.example` for reference)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
company_website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css        # Global styles
│   ├── robots.txt         # SEO robots file
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # React components
│   ├── Contact.tsx        # Contact form
│   ├── ErrorBoundary.tsx  # Error handling
│   ├── Hero.tsx          # Hero section
│   ├── Navigation.tsx    # Navigation bar
│   └── ...               # Other components
├── docs/                 # Documentation
├── tests/                # Test files
│   ├── __tests__/        # Test cases
│   └── setup.ts          # Test configuration
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## Development Guide

### Code Style

- Use TypeScript for all new files
- Follow ESLint rules (run `npm run lint`)
- Format code with Prettier (run `npm run format`)
- Use functional components with hooks
- Follow React best practices

### Adding New Components

1. Create component in `components/` directory
2. Use TypeScript interfaces for props
3. Add proper accessibility attributes
4. Write tests in `tests/__tests__/`
5. Document component usage

### Environment Variables

See `.env.example` for required environment variables:
- `NEXT_PUBLIC_SITE_URL`: Your site URL
- `CONTACT_EMAIL`: Email for contact form submissions
- Optional: Analytics, error tracking, email service APIs

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Place test files in `tests/__tests__/`
- Use `@testing-library/react` for component tests
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deployment Platforms

- **Vercel**: Recommended (optimized for Next.js)
- **Netlify**: Also supports Next.js
- **Docker**: See `docs/deployment.md` for Docker setup

### Environment Setup

1. Set environment variables in your hosting platform
2. Ensure `NEXT_PUBLIC_SITE_URL` matches your domain
3. Configure email service for contact form
4. Set up analytics and error tracking

## API Reference

### POST /api/contact

Submit contact form.

**Request Body:**
```json
{
  "name": "string (2-100 chars)",
  "email": "string (valid email)",
  "message": "string (10-2000 chars)"
}
```

**Response:**
- `200`: Success
- `400`: Validation error
- `429`: Rate limit exceeded
- `500`: Server error

**Rate Limiting:** 5 requests per minute per IP

## Accessibility

The website follows WCAG 2.1 AA standards:

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- Focus management
- Skip to content link
- Reduced motion support

## Performance

### Optimizations

- Code splitting
- Image optimization (Next.js Image)
- Lazy loading
- Dynamic imports for heavy components
- Font optimization
- CSS optimization

### Monitoring

- Lighthouse scores
- Core Web Vitals
- Bundle size analysis

## Troubleshooting

### Common Issues

1. **Build errors**: Run `npm run type-check` to check TypeScript errors
2. **Linting errors**: Run `npm run lint:fix`
3. **Test failures**: Check test setup in `tests/setup.ts`

For more details, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

