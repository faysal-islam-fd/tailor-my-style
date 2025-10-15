# Homepage Sections - Tailor My Style

This document outlines all the sections on the homepage, inspired by premium bespoke tailoring websites.

## 🎨 Homepage Structure

### 1. **Hero Section** - "Dress the real you"
- Full-width hero image with overlay
- Compelling headline: "Dress the real you"
- Subtitle: "Custom-made to fit, from head to toe"
- Primary CTA button
- **Component**: `HeroSection.tsx`

### 2. **Bespoke Categories** - "Bespoke from head to toe"
- Grid of 5 main product categories
- Categories: Suits, Shirts, Blazers, Pants, Coats
- High-quality images with hover effects
- Direct links to category pages
- **Component**: `BespokeCategories.tsx`

### 3. **High-Tech Tailoring** - Technology showcase
- Split layout (content + 3D visualization)
- Highlights the 3D design tool
- Shows measurement precision
- Customization options preview
- CTA: "Start Designing"
- **Component**: `HighTechTailoring.tsx`

### 4. **Outfit Ideas** - Inspiration carousel
- Dark background for contrast
- Horizontal scrolling carousel
- 5+ outfit inspiration images
- Navigation arrows
- "View All" CTA
- **Component**: `OutfitIdeas.tsx`

### 5. **Sustainability Section** - "Our planet appreciates it"
- Environmental commitment messaging
- Image + content split layout
- Highlights sustainable practices
- Made-to-order benefits
- **Component**: `SustainabilitySection.tsx`

### 6. **Quality Section** - "Looks that last"
- Premium materials emphasis
- Craftsmanship highlights
- Durability messaging
- Timeless style focus
- **Component**: `QualitySection.tsx`

### 7. **Perfect Fit Section** - Measurement focus
- Image grid layout (4 images)
- Measurement system explanation
- Body diversity messaging
- CTA: "Get Measured"
- Warm color gradient background
- **Component**: `PerfectFitSection.tsx`

### 8. **Featured In** - Social proof
- Publication logos (Esquire, GQ, Forbes)
- Clean, minimal design
- Brand credibility
- **Component**: `FeaturedIn.tsx`

### 9. **Testimonials** - "Reviewed by you"
- 3-column grid of customer reviews
- 5-star ratings
- Customer quotes
- Author names and dates
- "View More Reviews" CTA
- **Component**: `TestimonialsSection.tsx`

## 🎨 Design Principles

### Typography
- **Font**: Montserrat (300, 400, 500, 600, 700, 800 weights)
- **Headings**: Bold, large sizes (3xl to 7xl)
- **Body**: Clean, readable (lg to xl)

### Color Palette
- **Primary**: Blue (#2563eb)
- **Backgrounds**: White, Gray-50, Gray-900
- **Accents**: Orange, Red, Pink gradients
- **Text**: Gray-900 (headings), Gray-600/700 (body)

### Layout
- **Max Width**: 7xl (1280px)
- **Spacing**: Consistent py-16 to py-20
- **Grid**: Responsive (1 col mobile, 2-5 cols desktop)

### Interactions
- **Hover Effects**: Scale transforms, shadow increases
- **Transitions**: Smooth 300-500ms durations
- **Images**: Cover with gradient overlays

## 📱 Responsive Design

All sections are fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grids that adapt
- Touch-friendly interactions
- Optimized images

## 🌐 Localization

Every section supports:
- **English** (default)
- **Bangla** (বাংলা)
- Language toggle in header
- All content translated
- RTL-ready structure

## 🚀 Performance

- **Image Optimization**: Next.js Image component ready
- **Lazy Loading**: Sections load as needed
- **Code Splitting**: Component-based architecture
- **SEO Optimized**: Semantic HTML, meta tags

## 📦 Component Architecture

```
src/components/home/
├── HeroSection.tsx              # Main hero
├── BespokeCategories.tsx        # Product categories
├── HighTechTailoring.tsx        # 3D tool showcase
├── OutfitIdeas.tsx              # Inspiration carousel
├── SustainabilitySection.tsx    # Environmental focus
├── QualitySection.tsx           # Quality messaging
├── PerfectFitSection.tsx        # Measurement focus
├── FeaturedIn.tsx               # Publications
└── TestimonialsSection.tsx      # Customer reviews
```

## 🎯 Call-to-Actions

Primary CTAs throughout:
1. **Hero**: "Customize Now" → `/design`
2. **High-Tech**: "Start Designing" → `/design`
3. **Sustainability**: "Learn More" → `/sustainability`
4. **Quality**: "Shop Now" → `/products`
5. **Perfect Fit**: "Get Measured" → `/measurements`
6. **Testimonials**: "View More Reviews" → `/reviews`

## 💡 Future Enhancements

- [ ] Add real product images
- [ ] Implement actual 3D visualization
- [ ] Connect to backend API
- [ ] Add animation libraries (Framer Motion)
- [ ] Video backgrounds for hero
- [ ] Interactive measurement tool
- [ ] Live chat integration
- [ ] Personalization based on user preferences

---

**Last Updated**: October 2024
**Framework**: Next.js 15 with App Router
**Styling**: Tailwind CSS
**Font**: Montserrat
