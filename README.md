# Outlance Company Website

A modern, professional tech startup website with cutting-edge 3D animations, built with Next.js 14, Three.js, and Framer Motion. Features enterprise-grade security, accessibility, and performance optimizations.

## Features

- 🎨 **Modern Design**: Professional tech startup aesthetic with vibrant colors
- 🎭 **3D Animations**: Smooth, bouncy 3D animations using Three.js and React Three Fiber
- ✨ **Smooth Interactions**: Framer Motion and GSAP for fluid animations
- 📱 **Responsive**: Fully responsive design for all devices
- 🚀 **Performance**: Optimized with Next.js 14 and React 18
- 🔒 **Security**: Input validation, rate limiting, and sanitization
- ♿ **Accessible**: WCAG 2.1 AA compliant with ARIA labels and keyboard navigation
- 🔍 **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- ✅ **Tested**: Comprehensive test suite with Jest and React Testing Library
- 📝 **Documented**: Complete documentation in `/docs` folder

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion + GSAP
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 🚀 Quick Start (EASIEST WAY)

### Just run this one command:
```bash
npm run start-easy
```

**That's it!** The script will:
- ✅ Check if everything is installed
- ✅ Install dependencies if needed
- ✅ Start the server
- ✅ Tell you when it's ready

Then open: **http://localhost:3000**

---

## 📖 Detailed Instructions

### Prerequisites

- Node.js 18+ and npm

**Check if installed:**
```bash
node --version
npm --version
```

**If not installed:**
- Download from: https://nodejs.org/
- Or on Ubuntu: `sudo apt install nodejs npm`

### Step-by-Step Setup

1. **Go to project folder:**
```bash
cd /home/ubuntu/personel-work/company_website
```

2. **Install dependencies (first time only):**
```bash
npm install
```

3. **Start the server:**
```bash
npm run dev
```

4. **Open browser:**
Go to: http://localhost:3000

### Optional: Environment Variables

Create `.env.local` file (optional):
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=contact@outlance.com
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## Project Structure

```
├── app/
│   ├── api/             # API routes
│   │   └── contact/     # Contact form API
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── robots.txt       # SEO robots file
│   └── sitemap.ts       # Dynamic sitemap
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section with 3D background
│   ├── Contact.tsx      # Contact form with validation
│   ├── ErrorBoundary.tsx # Error handling
│   ├── SkipToContent.tsx # Accessibility skip link
│   └── ...              # Other components
├── docs/                # Documentation
│   ├── README.md        # Main documentation
│   ├── API.md           # API documentation
│   ├── DEPLOYMENT.md    # Deployment guide
│   └── ...              # Other docs
├── tests/               # Test files
│   ├── __tests__/       # Test cases
│   └── setup.ts         # Test configuration
└── package.json
```

## Documentation

Comprehensive documentation is available in the `/docs` folder:

- **[Main Documentation](./docs/README.md)** - Architecture, development guide, and more
- **[API Documentation](./docs/API.md)** - Contact form API reference
- **[Deployment Guide](./docs/DEPLOYMENT.md)** - Deployment instructions for various platforms
- **[Contributing Guide](./docs/CONTRIBUTING.md)** - How to contribute to the project
- **[Troubleshooting](./docs/TROUBLESHOOTING.md)** - Common issues and solutions
- **[Environment Variables](./docs/ENVIRONMENT_VARIABLES.md)** - Environment variable reference

## Key Improvements

### High Priority ✅
- ✅ Form submission API with validation and rate limiting
- ✅ React Error Boundaries for error handling
- ✅ Comprehensive form validation with user feedback
- ✅ SEO optimization (metadata, sitemap, robots.txt)
- ✅ Accessibility improvements (ARIA labels, skip links, semantic HTML)
- ✅ Code quality (ESLint, Prettier, TypeScript strict mode)

### Medium Priority ✅
- ✅ Testing framework setup (Jest, React Testing Library)
- ✅ Comprehensive documentation
- ✅ Environment variable management

### Security Features
- Input sanitization
- Rate limiting (5 requests/minute)
- Email validation
- XSS protection
- CSRF protection ready

### Performance
- Code splitting
- Dynamic imports
- Optimized builds
- Lazy loading ready

## Customization

- Update company name in `components/Navigation.tsx` and `app/layout.tsx`
- Modify services in `components/Services.tsx`
- Adjust colors in `tailwind.config.js`
- Update 3D scene elements in `components/Scene3D.tsx`
- Configure SEO in `app/layout.tsx`

## Testing

Run the test suite:
```bash
npm test
```

For coverage:
```bash
npm run test:coverage
```

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

## Support

For issues, questions, or contributions, please see the [Contributing Guide](./docs/CONTRIBUTING.md) or open an issue.

