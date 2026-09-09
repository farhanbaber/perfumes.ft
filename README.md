# Luxe Essence - Minimalist Luxury Perfume Brand Website

A sophisticated, dark-themed, minimalist website for a luxury single-product perfume brand built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Lenis Scroll**.

## 🎨 Design Philosophy

- **Minimalist Aesthetic**: Clean lines, purposeful design, no unnecessary elements
- **Dark Theme**: Premium dark background with gold/amber accents (#d4a574)
- **Smooth Interactions**: Framer Motion animations and Lenis smooth scroll for luxury feel
- **Responsive**: Fully responsive design from mobile to desktop
- **Performance**: Optimized for fast loading and smooth interactions

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Lenis scroll provider
│   ├── page.tsx            # Home page
│   ├── styles/
│   │   └── globals.css     # Global styles and animations
│   ├── product/
│   │   └── page.tsx        # Product detail page
│   └── contact/
│       └── page.tsx        # Contact & support page
├── components/
│   ├── Navigation.tsx      # Sticky header navigation
│   ├── Footer.tsx          # Global footer
│   ├── NewsletterForm.tsx  # Newsletter subscription
│   ├── home/
│   │   ├── HeroSection.tsx        # Full-screen hero with animations
│   │   ├── BrandStory.tsx         # Brand values & philosophy
│   │   ├── FeaturedShowcase.tsx   # Product showcase with 3D tilt effect
│   │   └── Testimonials.tsx       # Customer reviews slider
│   ├── product/
│   │   ├── InteractiveGallery.tsx     # Interactive product gallery with zoom
│   │   ├── FragranceArchitecture.tsx  # Olfactory pyramid (Top/Heart/Base notes)
│   │   ├── Specifications.tsx         # Accordion with product specs
│   │   └── ProductCTA.tsx             # Sticky purchase bar
│   └── contact/
│       ├── ContactForm.tsx   # Contact form with validation
│       ├── FAQ.tsx          # Interactive FAQ accordion
│       └── SocialConnect.tsx # Social media and contact links
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Basic knowledge of React and TypeScript

### Installation

1. **Navigate to project directory:**
```bash
cd "d:\react project\perfume.web"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:3000
```

## 🛠️ Tech Stack

| Category | Tool | Purpose |
|----------|------|---------|
| **Framework** | Next.js 15 | React framework with SSR & routing |
| **Styling** | Tailwind CSS 3 | Utility-first CSS framework |
| **Animations** | Framer Motion 11 | Smooth animations & interactions |
| **Scroll** | Lenis 1.1 | Premium smooth scrolling |
| **Forms** | React Hook Form 7 | Form state management |
| **Email** | EmailJS / Formspree | Contact form backend (free tier) |
| **Deployment** | Vercel / Netlify | Free hosting with SSL |

## 🎯 Features

### ✨ Home Page (`/`)
- **Hero Section**: Full-screen immersive layout with animated typography
- **Brand Story**: Values and philosophy with text reveal animations
- **Featured Showcase**: Interactive product display with parallax effect
- **Testimonials**: Auto-playing carousel with customer reviews
- **Responsive Footer**: Newsletter signup, social links, navigation

### 🧴 Product Page (`/product`)
- **Interactive Gallery**: Multiple product angles with zoom functionality
- **Olfactory Pyramid**: 
  - Top Notes (citrus, first impression)
  - Heart Notes (amber, core identity)
  - Base Notes (oud, sandalwood, lasting aura)
- **Specifications**: Expandable accordion with:
  - Size options (50ml, 100ml, 200ml)
  - Longevity & projection details
  - Ingredients and cruelty-free info
  - Usage & care instructions
  - Sustainability details
- **Sticky Purchase Bar**: Always-accessible shopping interface with:
  - Size selector
  - Quantity adjuster
  - Add to Cart / Buy Now buttons
  - 30-day money-back guarantee

### 📧 Contact Page (`/contact`)
- **Contact Form**: Validated form with name, email, subject, message
- **Social Connect**: Direct links to:
  - WhatsApp (chat support)
  - Email
  - Instagram
  - Brand HQ
- **FAQ Accordion**: Organized by category:
  - Shipping & Returns
  - Product Information
  - Care & Storage

## 🎨 Color Palette

```css
--dark-bg: #0a0a0a         /* Main background */
--dark-secondary: #1a1a1a  /* Secondary background */
--dark-tertiary: #2a2a2a   /* Borders & tertiary bg */
--accent: #d4a574          /* Gold/Amber accent */
--accent-light: #e6b88a    /* Light gold for hover */
```

## 📊 Component Highlights

### Animation Patterns
- **Text Reveal**: Staggered entrance animations
- **Parallax & Tilt**: 3D effects on product showcase
- **Float Animation**: Subtle hovering motion
- **Smooth Scroll**: Lenis integration for premium feel
- **Page Transitions**: Framer Motion between routes

### Interactive Elements
- **Hover Effects**: Buttons and cards with scale/color transitions
- **Form Validation**: Real-time error messages
- **Modal Accordion**: Expandable content sections
- **Image Zoom**: Interactive product gallery controls
- **Auto-playing Carousel**: Testimonials with manual navigation

## 🔧 Configuration

### Tailwind CSS
- Custom colors in `tailwind.config.js`
- Font families: Inter (body), Playfair Display (headings)
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Next.js
- App Router (latest Next.js 15)
- Static export ready for Vercel/Netlify
- Image optimization with `next/image`
- TypeScript support

## 📧 Email Integration (Production)

### Option 1: EmailJS (Recommended for simplicity)
```javascript
import emailjs from 'emailjs-com';

emailjs.init('YOUR_PUBLIC_KEY');
// Use in ContactForm component
```

### Option 2: Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: > 1024px (full layout with enhanced spacing)

## 🎬 Performance Optimizations

- ✅ Image lazy loading
- ✅ CSS minification via Tailwind
- ✅ Smooth scroll with Lenis (GPU accelerated)
- ✅ Framer Motion optimized animations
- ✅ Code splitting via Next.js
- ✅ SEO-friendly metadata

## 🔐 Security Considerations

- Form validation on client and server
- No sensitive data in frontend
- HTTPS-ready for production
- CSP headers recommended in `next.config.js`

## 💡 Customization Guide

### Change Brand Name
Edit `src/components/Navigation.tsx` and `src/app/layout.tsx`

### Update Product Details
Modify component data objects:
- `src/components/home/FeaturedShowcase.tsx` (tagline, notes)
- `src/components/product/FragranceArchitecture.tsx` (pyramid data)
- `src/components/product/Specifications.tsx` (specs accordion)

### Adjust Colors
Update `tailwind.config.js` theme colors:
```javascript
colors: {
  'accent': '#your-color', // Change gold to desired color
}
```

### Add More Products
Duplicate product page structure and create new routes

## 📚 Dependencies Deep Dive

### Framer Motion
- Smooth animations on scroll and hover
- `whileInView`: Trigger animations on scroll
- `whileHover`: Interactive hover states
- `transition`: Control animation timing

### Lenis Scroll
- Premium smooth scrolling experience
- GPU-accelerated performance
- Integrated via `@react-lenis/react` wrapper

### React Hook Form
- Lightweight form state management
- Built-in validation
- Error handling and display

## 🐛 Troubleshooting

### Animations not smooth?
- Check browser hardware acceleration is enabled
- Ensure Framer Motion is imported correctly
- Verify Lenis is initialized in layout

### Tailwind styles not applying?
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run dev`
- Check `tailwind.config.js` content paths

### Form not submitting?
- Verify EmailJS/Formspree configuration
- Check browser console for errors
- Test with mock data first

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lenis Documentation](https://lenis.darkroom.engineering/)
- [React Hook Form Docs](https://react-hook-form.com/)

## 🎯 Future Enhancements

- [ ] Add product variants (scent variations)
- [ ] Implement real shopping cart with state management
- [ ] Add blog section for fragrance stories
- [ ] Integrate payment gateway (Stripe/PayPal)
- [ ] Add AR product visualization
- [ ] Implement user accounts and order history
- [ ] Multi-language support (i18n)
- [ ] Dark/Light theme toggle

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Contributing

Contributions are welcome! Feel free to fork and submit PRs.

---

**Built with ❤️ for luxury perfume brands** | Minimalist. Elegant. Timeless.
