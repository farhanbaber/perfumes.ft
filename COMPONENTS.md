# 📖 Components Documentation

## Table of Contents
1. [Global Components](#global-components)
2. [Home Components](#home-components)
3. [Product Components](#product-components)
4. [Contact Components](#contact-components)

---

## Global Components

### Navigation.tsx
**Purpose**: Fixed header navigation with mobile menu support

**Features**:
- Sticky positioning with blur backdrop
- Mobile hamburger menu
- Smooth hover animations
- Brand logo link to home

**Key Props**: None (uses Next.js Link for routing)

**Customization**:
```typescript
// Edit navigation items
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product' },
  { label: 'Contact', href: '/contact' },
]
```

---

### Footer.tsx
**Purpose**: Global footer with newsletter, links, and branding

**Features**:
- Newsletter subscription form
- Multi-column footer links
- Copyright and legal links
- Responsive grid layout

**Sections**:
- Newsletter signup
- Quick Links
- Customer Care
- Social Connect

---

### NewsletterForm.tsx
**Purpose**: Reusable newsletter subscription form

**Features**:
- Email validation
- Loading state
- Success/error messages
- Auto-reset on success

**Props**: None (self-contained)

---

## Home Components

### HeroSection.tsx
**Purpose**: Full-screen immersive hero landing section

**Features**:
- Full-viewport height
- Animated background gradients
- Staggered text animations
- CTA buttons (Discover / Learn Story)
- Scroll indicator animation

**Key Animations**:
```typescript
container.staggerChildren = 0.2  // Delay between elements
item.y = [20, 0]                // Fade-up animation
backgroundGradient.opacity = [0.3, 0.6, 0.3]  // Pulse effect
```

**Customization**:
```typescript
// Edit tagline and main heading
<motion.p variants={item} className="...">
  Discover Luxury  // Change this
</motion.p>

<motion.h1 variants={item}>
  The Art of Elegance  // Change this
</motion.h1>
```

---

### BrandStory.tsx
**Purpose**: Display brand philosophy and core values

**Features**:
- 4-column responsive grid
- Hover effects with gradient overlays
- Value cards with icons
- Title, description, icon per card

**Data Structure**:
```typescript
const values = [
  {
    title: 'Minimalist Design',
    description: 'Clean lines, purposeful aesthetics...',
    icon: '✨',
  },
  // ... more values
]
```

**Customization**:
- Add/remove values by modifying the array
- Change icons (use emoji or SVG)
- Update descriptions

---

### FeaturedShowcase.tsx
**Purpose**: Showcase main product with interactive 3D effect

**Features**:
- Split layout (image + details)
- Parallax & tilt hover effect
- Product specifications grid
- CTA button with shadow hover

**3D Effect**:
```typescript
whileHover={{ rotateY: 5, rotateX: -5 }}  // 3D tilt on hover
```

**Key Customization**:
```typescript
// Change product name and tagline
<motion.h2>Essence Noir</motion.h2>  // Your product name
<motion.span className="...">Our Signature Fragrance</motion.span>

// Update fragrance notes
<div className="flex gap-6">
  <div>
    <p className="text-accent">TOP NOTES</p>
    <p>Bergamot, Grapefruit</p>  // Your notes
  </div>
  // ... heart and base notes
</div>
```

---

### Testimonials.tsx
**Purpose**: Auto-playing customer testimonial carousel

**Features**:
- Auto-rotate every 6 seconds
- Manual navigation with dots
- Star rating display
- Fade-in/out transitions

**Data Structure**:
```typescript
const testimonials = [
  {
    name: 'Alexandra Chen',
    role: 'Luxury Brand Director',
    content: 'Quote here...',
    rating: 5,
  },
]
```

**Customization**:
- Change `setInterval` duration for rotation speed
- Add/remove testimonials
- Modify rating stars

---

## Product Components

### InteractiveGallery.tsx
**Purpose**: Interactive product gallery with zoom controls

**Features**:
- Main image display with hover zoom
- Thumbnail selector (4 views)
- Zoom controls (+/-)
- Current zoom level display
- Mouse-follow origin point for zoom

**State Management**:
```typescript
const [selectedImage, setSelectedImage] = useState(0)
const [zoomLevel, setZoomLevel] = useState(1)
```

**Customization**:
```typescript
const images = [
  { id: 1, title: 'Front View', alt: 'Product Front View' },
  // Add/remove image options
]
```

**Zoom Range**: 1x to 3x (adjustable in code)

---

### FragranceArchitecture.tsx
**Purpose**: Display olfactory pyramid (Top/Heart/Base notes)

**Features**:
- 3-tier card layout
- Color gradient indicators per tier
- Duration and intensity info
- Ingredient tags
- Hover animations

**Data Structure**:
```typescript
const pyramid = [
  {
    tier: 'top',
    label: 'Top Notes',
    duration: '5-15 minutes',
    description: 'First Impression',
    notes: ['Bergamot', 'Grapefruit', 'Citrus'],
    color: 'from-yellow-400 to-orange-400',
  },
  // ... heart and base tiers
]
```

**Customization**:
- Replace note names with your ingredients
- Adjust duration times
- Change color gradients
- Reorder tiers if needed

---

### Specifications.tsx
**Purpose**: Expandable accordion with detailed product info

**Features**:
- 5 accordion sections
- Smooth height animations
- Icon rotation on expand
- Key-value pair display
- Smooth transitions

**Data Structure**:
```typescript
const specs = [
  {
    title: 'Size & Volume',
    content: {
      '50ml': 'Description...',
      '100ml': 'Description...',
      '200ml': 'Description...',
    },
  },
  // ... more sections
]
```

**Sections Included**:
1. Size & Volume
2. Longevity & Projection
3. Ingredients
4. Usage & Care
5. Sustainability

**Customization**:
- Add/remove sections
- Update content key-value pairs
- Modify section titles

---

### ProductCTA.tsx
**Purpose**: Sticky purchase bar and product benefits section

**Features**:
- Fixed bottom sticky bar
- Size selector buttons
- Quantity adjuster
- Add to Cart & Buy Now buttons
- Floating above page content (z-40)

**State Management**:
```typescript
const [quantity, setQuantity] = useState(1)
const [selectedSize, setSelectedSize] = useState('100ml')
const [cartStatus, setCartStatus] = useState<'idle' | 'added'>('idle')
```

**Size Options**:
```typescript
const sizes = ['50ml', '100ml', '200ml']
```

**Customization**:
- Change price (currently $189)
- Add/remove sizes
- Modify free shipping threshold
- Update features grid

---

## Contact Components

### ContactForm.tsx
**Purpose**: Contact form with validation and submission handling

**Features**:
- React Hook Form integration
- Email validation
- Required field validation
- Loading state
- Success/error messages
- Auto-reset on success

**Fields**:
- Name (required)
- Email (required, email format)
- Subject (required)
- Message (required)

**Form State**:
```typescript
const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>()
```

**Customization**:
- Add/remove fields
- Modify validation rules
- Update placeholder text
- Connect to EmailJS/Formspree

**Integration Example (EmailJS)**:
```typescript
const onSubmit = async (data: ContactFormData) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    // Handle success
  } catch (error) {
    // Handle error
  }
}
```

---

### FAQ.tsx
**Purpose**: Interactive FAQ accordion organized by category

**Features**:
- Organized by 3 categories
- Expandable Q&A pairs
- Global expand index management
- Icon rotation on expand
- Staggered animations

**Data Structure**:
```typescript
const faqs = [
  {
    category: 'Shipping & Returns',
    items: [
      {
        question: 'What is the shipping cost?',
        answer: 'Free shipping on orders over $100...',
      },
      // ... more items
    ],
  },
  // ... more categories
]
```

**Categories Included**:
1. Shipping & Returns (3 FAQs)
2. Product Information (3 FAQs)
3. Care & Storage (3 FAQs)

**Customization**:
- Add/remove categories
- Add/remove FAQ items
- Update Q&A content

---

### SocialConnect.tsx
**Purpose**: Display social media and contact channels

**Features**:
- 4-column responsive grid
- Card hover effects
- Direct action links (WhatsApp, Email, etc.)
- Icon and description per channel
- Response time info

**Data Structure**:
```typescript
const contactMethods = [
  {
    icon: '💬',
    title: 'WhatsApp',
    description: 'Chat with us directly for quick support',
    action: 'Chat Now',
    href: 'https://wa.me/1234567890',
  },
  // ... more methods
]
```

**Channels Included**:
1. WhatsApp (direct chat)
2. Email (contact form)
3. Instagram (social)
4. Brand HQ (location)

**Customization**:
```typescript
// Update contact links
href: 'https://wa.me/YOUR_PHONE_NUMBER'  // WhatsApp
href: 'mailto:YOUR_EMAIL'                 // Email
href: 'https://instagram.com/YOUR_HANDLE' // Instagram
```

---

## 🎨 Styling Patterns

### Colors Used
- **Background**: `bg-dark-bg` (#0a0a0a)
- **Secondary**: `bg-dark-secondary` (#1a1a1a)
- **Tertiary**: `bg-dark-tertiary` (#2a2a2a)
- **Accent**: `text-accent` or `border-accent` (#d4a574)
- **Hover**: `text-accent-light` (#e6b88a)

### Common Classes
```typescript
// Buttons
className="btn-primary"      // Gold button
className="btn-secondary"    // Outlined button

// Containers
className="max-w-6xl mx-auto px-6"  // Content width limiter
className="space-y-6"               // Vertical spacing

// Typography
className="font-serif"     // Headings (Playfair Display)
className="font-sans"      // Body (Inter)
className="font-light"     // Thin font weight
className="font-semibold"  // Bold font weight
```

### Animation Patterns
```typescript
// Fade in on view
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}

// Hover scale
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Staggered children
container.staggerChildren = 0.1
```

---

## 🔧 Props Reference

Most components are self-contained and don't accept props (they manage their own state and data). 

To customize:
1. Edit the data arrays within each component
2. Modify className values
3. Adjust animation values in Framer Motion directives
4. Update text content directly in JSX

---

## 💡 Tips for Modification

✨ **Adding New Sections**
1. Create new component file
2. Export as default
3. Import in parent page.tsx
4. Add to component tree

✨ **Changing Animations**
1. Modify Framer Motion props
2. Adjust duration values (in seconds)
3. Test on different devices
4. Use browser DevTools for performance

✨ **Updating Content**
1. Edit data arrays
2. Keep structure consistent
3. Test responsive layout
4. Verify all links work

---

**Components are designed to be modular and easily customizable!**
