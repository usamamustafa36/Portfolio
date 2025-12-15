# Troubleshooting Guide

## Common Issues and Solutions

### Build Errors

**Issue:** TypeScript compilation errors

**Solution:**
```bash
npm run type-check
```
Fix any TypeScript errors shown.

**Issue:** ESLint errors

**Solution:**
```bash
npm run lint:fix
```

### Runtime Errors

**Issue:** "Module not found" errors

**Solution:**
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install`
3. Restart development server

**Issue:** GSAP ScrollTrigger not working

**Solution:**
- Check browser console for errors
- Ensure GSAP is properly imported
- Verify ScrollTrigger is registered

### Form Submission Issues

**Issue:** Contact form not submitting

**Check:**
1. API route is accessible: `/api/contact`
2. Network tab shows request/response
3. Check server logs for errors
4. Verify environment variables are set

**Issue:** Rate limiting errors

**Solution:**
- Wait 1 minute between submissions
- Check IP address isn't blocked
- In development, restart server to clear rate limit cache

### Performance Issues

**Issue:** Slow page load

**Solutions:**
1. Check bundle size: `npm run build`
2. Use dynamic imports for heavy components
3. Optimize images
4. Enable compression

**Issue:** High memory usage

**Solutions:**
1. Check for memory leaks in components
2. Clean up event listeners
3. Use React.memo for expensive components

### Accessibility Issues

**Issue:** Screen reader not reading content

**Solutions:**
1. Add proper ARIA labels
2. Use semantic HTML
3. Test with screen reader
4. Check focus management

### SEO Issues

**Issue:** Metadata not showing in social shares

**Solutions:**
1. Verify Open Graph tags in `app/layout.tsx`
2. Check `robots.txt` is accessible
3. Verify sitemap at `/sitemap.xml`
4. Test with [Open Graph Debugger](https://www.opengraph.xyz/)

### Testing Issues

**Issue:** Tests failing

**Solutions:**
1. Clear Jest cache: `npm test -- --clearCache`
2. Check test setup in `tests/setup.ts`
3. Verify mocks are correct
4. Run tests individually: `npm test -- Contact.test.tsx`

### Environment Variables

**Issue:** Environment variables not working

**Solutions:**
1. Ensure `.env.local` exists (not committed)
2. Variables must start with `NEXT_PUBLIC_` for client-side
3. Restart dev server after adding variables
4. Check variable names match exactly

### Deployment Issues

**Issue:** Build fails on Vercel/Netlify

**Solutions:**
1. Check build logs for errors
2. Verify Node version (18+)
3. Ensure all environment variables are set
4. Check `package.json` scripts

**Issue:** API routes not working in production

**Solutions:**
1. Verify API route structure
2. Check serverless function logs
3. Ensure proper error handling
4. Test API endpoint directly

## Getting Help

If you can't resolve an issue:

1. Check existing issues on GitHub
2. Search documentation in `docs/`
3. Create a new issue with:
   - Error message
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details

## Debugging Tips

### Enable Debug Logging

Add to `.env.local`:
```bash
DEBUG=*
```

### Check Network Requests

Open browser DevTools → Network tab to inspect:
- API requests
- Asset loading
- Response times

### React DevTools

Install React DevTools browser extension to:
- Inspect component tree
- Check props and state
- Profile performance

### Next.js Debug Mode

Run with debug:
```bash
NODE_OPTIONS='--inspect' npm run dev
```

