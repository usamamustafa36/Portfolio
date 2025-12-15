# Contributing Guide

Thank you for your interest in contributing to the Outlance company website!

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/company_website.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Run tests: `npm test`
7. Run linting: `npm run lint`
8. Format code: `npm run format`
9. Commit your changes: `git commit -m "Add: your feature"`
10. Push to your fork: `git push origin feature/your-feature-name`
11. Create a Pull Request

## Code Standards

### TypeScript

- Use TypeScript for all new files
- Define interfaces for component props
- Avoid `any` type (use `unknown` if necessary)
- Use type inference where possible

### React

- Use functional components with hooks
- Follow React best practices
- Use proper key props for lists
- Avoid unnecessary re-renders

### Styling

- Use Tailwind CSS classes
- Follow existing design patterns
- Ensure responsive design
- Maintain accessibility

### Accessibility

- Add ARIA labels where needed
- Use semantic HTML
- Ensure keyboard navigation
- Test with screen readers

## Commit Messages

Follow conventional commits:

- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for updates to existing features
- `Refactor:` for code refactoring
- `Docs:` for documentation
- `Test:` for adding tests
- `Style:` for formatting

Example:
```
Add: Contact form validation
Fix: Navigation menu accessibility
Update: SEO metadata
```

## Testing

- Write tests for new features
- Maintain test coverage above 50%
- Test accessibility
- Test responsive design

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Update CHANGELOG.md (if applicable)
5. Request review from maintainers

## Questions?

Open an issue for questions or discussions.

