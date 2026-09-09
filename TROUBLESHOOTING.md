# 🔧 Advanced Configuration & Troubleshooting Guide

## Table of Contents
1. [Installation Issues](#installation-issues)
2. [Runtime Issues](#runtime-issues)
3. [Performance Optimization](#performance-optimization)
4. [Advanced Customization](#advanced-customization)
5. [Deployment Issues](#deployment-issues)

---

## Installation Issues

### Issue: `npm install` fails with permission error
**Error**: `EACCES: permission denied`

**Solution**:
```bash
# Option 1: Use sudo (not recommended)
sudo npm install

# Option 2: Fix npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH

# Option 3: Use Node Version Manager (nvm)
# Install nvm from: https://github.com/nvm-sh/nvm
nvm install 18
nvm use 18
npm install
```

---

### Issue: `node_modules` folder too large
**Problem**: Slow installation and disk space issues

**Solution**:
```bash
# Use npm ci for cleaner installs
rm -rf node_modules package-lock.json
npm ci

# Or use Yarn (faster)
yarn install

# Or use pnpm (most efficient)
npm install -g pnpm
pnpm install
```

---

### Issue: TypeScript compilation errors
**Error**: `Type 'X' is not assignable to type 'Y'`

**Solution**:
```bash
# Clear build cache
rm -rf .next
rm -rf out

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run dev
```

---

## Runtime Issues

### Issue: Animations not working smoothly
**Symptom**: Jerky or stuttering animations

**Solution**:
1. **Check browser hardware acceleration**:
   - Chrome: Settings → Advanced → System
   - Firefox: about:config → layers.acceleration.enabled
   
2. **Enable GPU acceleration in code**:
```css
/* Add to globals.css */
* {
  will-change: transform;
}
```

3. **Reduce animation complexity**:
```typescript
// Before (complex)
animate={{ 
  opacity: [0, 0.5, 1],
  scale: [0.8, 1.2, 1],
  rotate: [0, 360, 0]
}}
transition={{ duration: 0.3 }}

// After (simplified)
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.3 }}
```

---

### Issue: Tailwind styles not applying
**Symptom**: Styles don't show or appear unstyled

**Solution 1: Check content paths in `tailwind.config.js`**:
```javascript
content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',  // Make sure this is correct
],
```

**Solution 2: Clear Tailwind cache**:
```bash
# Restart dev server
rm -rf .next
npm run dev
```

**Solution 3: Check for conflicting CSS**:
```css
/* Ensure no global styles override Tailwind */
/* Remove any `!important` declarations that might conflict */
```

---

### Issue: Lenis scroll causing performance issues
**Symptom**: Smooth scroll is laggy or causes jank

**Solution**:
```typescript
// In src/app/layout.tsx
// Reduce animation frame rate if needed
<ReactLenis 
  root 
  options={{
    wheelMultiplier: 0.5,  // Reduce scroll speed
    smoothWheel: true,
  }}
>
  {children}
</ReactLenis>
```

---

### Issue: Form submission not working
**Symptom**: Contact form doesn't send data

**Solution 1: Check environment variables**:
```bash
# Ensure .env.local exists with:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_value
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_value
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_value
```

**Solution 2: Test with mock data**:
```typescript
// In ContactForm.tsx
const onSubmit = async (data: ContactFormData) => {
  console.log('Form data:', data);  // Debug log
  // Rest of submission logic
}
```

**Solution 3: Check browser console for errors**:
- Open DevTools (F12)
- Check Console tab for error messages
- Check Network tab to see API calls

---

### Issue: Mobile menu not closing
**Symptom**: Hamburger menu stays open on mobile

**Solution**:
```typescript
// In Navigation.tsx - ensure onClick handler is attached
onClick={() => setIsOpen(false)}  // Add to menu items
```

---

## Performance Optimization

### 1. Image Optimization
```typescript
// Use Next.js Image component instead of <img>
import Image from 'next/image'

<Image
  src="/perfume-bottle.jpg"
  alt="Product"
  width={400}
  height={400}
  quality={80}  // Reduce quality for faster loading
  priority      // Priority load for hero images
/>
```

### 2. Code Splitting
```typescript
// Lazy load heavy components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <div>Loading...</div>,
})
```

### 3. Optimize Bundle Size
```bash
# Analyze bundle
npm install -g next-bundle-analyzer
# Add to next.config.js:
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

# Run analysis
ANALYZE=true npm run build
```

### 4. CSS Purging
```bash
# Tailwind automatically purges unused styles
# For production build:
npm run build
```

### 5. Reduce Animation Complexity
```typescript
// Use simpler animations on mobile
const isLargScreen = useMediaQuery('(min-width: 768px)')

return (
  <motion.div
    animate={isLargeScreen ? complexAnimation : simpleAnimation}
  >
    Content
  </motion.div>
)
```

---

## Advanced Customization

### 1. Custom Fonts
```typescript
// Add to src/app/layout.tsx
import localFont from 'next/font/local'

const customFont = localFont({
  src: '/fonts/your-font.woff2',
})

export default function RootLayout() {
  return (
    <html className={customFont.className}>
      {/* ... */}
    </html>
  )
}
```

### 2. Theme Switching (Dark/Light Mode)
```typescript
// Create use-theme.ts
'use client'
import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  return { theme, setTheme }
}
```

### 3. Add More Products
```typescript
// Create src/components/product/ProductCard.tsx
export function ProductCard({ name, price, image }) {
  return (
    <motion.div className="...">
      {/* Product info */}
    </motion.div>
  )
}

// Use in new /products page
```

### 4. Multi-language Support
```bash
npm install next-intl
```

```typescript
// src/i18n/routing.ts
export const routing = {
  locales: ['en', 'fr', 'es'],
  defaultLocale: 'en',
}
```

### 5. Add Analytics
```typescript
// src/lib/analytics.ts
export function trackEvent(name: string, data?: any) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, data)
  }
}

// Use in components
trackEvent('product_viewed', { productId: 'essence-noir' })
```

---

## Deployment Issues

### Issue: Build fails on deployment
**Error**: `npm run build` fails

**Solution**:
```bash
# Verify build locally first
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Check for ESLint errors
npm run lint
```

### Issue: Vercel deployment slow
**Symptom**: Build takes > 5 minutes

**Solution**:
1. **Check for large dependencies**:
```bash
npm ls
npm dedupe
```

2. **Use Vercel Analytics**:
```typescript
// src/app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout() {
  return (
    <html>
      <body>
        <Analytics />
        <SpeedInsights />
        {/* ... */}
      </body>
    </html>
  )
}
```

3. **Optimize build output**:
```bash
# Use modern mode only (no IE support)
# In next.config.js:
module.exports = {
  swcMinify: true,  // Faster minification
}
```

### Issue: Styles break after deployment
**Symptom**: CSS missing in production

**Solution**:
```bash
# Rebuild with correct source maps
npm run build
# Don't use `next export` - use Vercel's deployment

# Verify CSS is included
npm run build
# Check .next/static/css/ for CSS files
```

### Issue: Environment variables not working
**Error**: `undefined` when accessing `process.env.NEXT_PUBLIC_*`

**Solution**:
1. **For client-side**, prefix must be `NEXT_PUBLIC_`**:
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com  # ✓ Works
SECRET_KEY=value                              # ✗ Not available client-side
```

2. **Redeploy after env changes**:
```bash
# On Vercel, update in Settings → Environment Variables
# Then redeploy
```

---

## Database Integration (Advanced)

### Adding a Database (Optional)

```bash
# Install Prisma
npm install @prisma/client
npm install -D prisma

# Initialize Prisma
npx prisma init
```

**schema.prisma**:
```prisma
datasource db {
  provider = "postgresql"  // or mysql, sqlite, etc.
  url      = env("DATABASE_URL")
}

model ContactMessage {
  id        Int     @id @default(autoincrement())
  name      String
  email     String
  subject   String
  message   String
  createdAt DateTime @default(now())
}
```

**API Route - `src/app/api/contact/route.ts`**:
```typescript
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const message = await prisma.contactMessage.create({
      data: {
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
      },
    })
    
    return NextResponse.json(message)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
```

---

## SEO Optimization

### 1. Meta Tags
```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: 'Luxe Essence - Minimalist Luxury Perfume',
  description: 'Experience timeless sophistication...',
  keywords: 'luxury perfume, minimalist fragrance, eau de parfum',
  openGraph: {
    type: 'website',
    title: 'Luxe Essence',
    description: 'Premium fragrance brand',
    images: [{ url: '/og-image.jpg' }],
  },
}
```

### 2. Sitemap
```bash
npm install next-sitemap
```

**next-sitemap.config.js**:
```javascript
module.exports = {
  siteUrl: 'https://luxeessence.com',
  generateRobstxt: true,
}
```

### 3. robots.txt
Create **public/robots.txt**:
```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://luxeessence.com/sitemap.xml
```

---

## Security Considerations

### 1. Protect API Routes
```typescript
// src/app/api/protected/route.ts
import { verifyAuth } from '@/lib/auth'

export async function POST(request: NextRequest) {
  const token = request.headers.get('authorization')
  if (!verifyAuth(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  // Handle request
}
```

### 2. Environment Variable Security
```bash
# .env.local (NEVER commit this)
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_API_KEY=super_secret_key
```

### 3. CORS Configuration
```typescript
// next.config.js
headers: async () => {
  return [
    {
      source: '/api/:path*',
      headers: [
        { key: 'Access-Control-Allow-Origin', value: 'https://yourdomain.com' },
      ],
    },
  ]
}
```

---

## Common Best Practices

✅ **Do**:
- Use TypeScript for type safety
- Separate components into small, reusable pieces
- Use environment variables for sensitive data
- Test on multiple devices and browsers
- Optimize images before uploading
- Use Next.js Image component
- Leverage Tailwind's utility classes
- Keep animation frames under 60fps

❌ **Don't**:
- Commit `.env.local` to GitHub
- Use inline styles instead of Tailwind
- Import entire libraries when only one function is needed
- Add too many animations (performance impact)
- Forget to add alt text to images (accessibility)
- Hardcode URLs or API endpoints
- Ignore console warnings and errors

---

## Quick Debugging Checklist

- [ ] Check browser console for errors (F12)
- [ ] Check Next.js terminal for build errors
- [ ] Verify all imports use correct paths
- [ ] Ensure `.env.local` has required variables
- [ ] Clear `.next` folder and rebuild
- [ ] Test on different browsers and devices
- [ ] Check network tab for API calls
- [ ] Verify CSS is loading (Inspect element)
- [ ] Test form submission with valid data
- [ ] Check for console warnings in DevTools

---

## Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Framer Motion Examples**: https://www.framer.com/motion/examples
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/
- **React Best Practices**: https://react.dev/

---

**Happy troubleshooting! 🚀**

*If issues persist, check the browser console and Next.js terminal output for specific error messages.*
