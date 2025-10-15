# Tailor My Style - Bangladesh Custom Apparel Platform

A premium Next.js application for bespoke tailoring and custom clothing design in Bangladesh, inspired by modern high-end tailoring platforms.

## 🎯 Project Overview

Tailor My Style is an intuitive, high-end custom clothing platform that brings bespoke tailoring to Bangladesh. Inspired by leading international tailoring services, it enables users to design their own suits, shirts, blazers, pants, and traditional wear through an elegant interface with 3D visualization, connecting them with skilled local tailors for precision craftsmanship.

## ✨ Key Features

### 🎨 Customization Wizard
- Step-by-step garment design interface
- Real-time visual preview and mockup
- Comprehensive style options (collar, cuff, pocket, lapel, etc.)
- Color and pattern selection
- Additional customizations (monogram, lining, buttons)

### 📏 Measurement System
- Visual measurement guides and tutorials
- Standard sizes + custom measurements
- Profile-based sizing (height/weight) with adjustments
- Reference garment upload functionality

### 🧵 Fabric Catalog
- Real fabric swatches and detailed information
- Filter by price, seasonality, and pattern
- Material specifications (GSM, thread count)
- Swatch sample requests

### 👨‍💼 Tailor Network
- Local tailor onboarding and management
- Tailor ratings and reviews
- Order routing and assignment
- Quality assurance and communication portal

### 📦 Order Management
- Real-time order tracking
- Status updates (Designing → Cutting → Sewing → Quality Check → Delivery)
- Progress photos and updates
- Return and alteration policies

### 💰 Pricing & Payments
- Transparent real-time pricing
- Bangladesh payment methods (bKash, Nagad, bank transfer)
- Clear cost breakdowns
- Discount models for repeat customers

### 🌐 Localization
- Bangla/English language support
- Bangladesh-specific logistics
- Local courier partnerships
- Regional style options (Panjabi, Kurta, Sherwani, etc.)

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library with Radix UI
- **Icons**: Heroicons
- **Animation**: Framer Motion
- **Theme**: Next Themes for dark/light mode

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── design/            # Customization wizard
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── home/              # Homepage components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── GarmentTypesSection.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/                # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts           # Utility functions
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🎨 Design System

The application uses a comprehensive design system with:
- Consistent color palette with CSS custom properties
- Responsive typography scale
- Component variants and states
- Accessibility-first approach
- Bangladesh-specific cultural considerations

## 🌍 Localization

Full support for Bengali (Bangla) and English languages with:
- Dynamic language switching
- Culturally appropriate content
- Local currency formatting (৳)
- Bangladesh-specific information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tailor-my-style
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with value proposition
- Feature highlights
- Garment type showcase
- Statistics and social proof

### Design Wizard (`/design`)
- Step-by-step customization process
- Garment type selection
- Progress tracking
- Real-time pricing updates

### Contact (`/contact`)
- Contact form with validation
- Business information
- Multi-language support
- Consistent button styling

## 🎯 Future Enhancements

- [ ] Advanced 3D garment visualization
- [ ] AI-powered style recommendations
- [ ] Mobile app development
- [ ] Integration with local payment gateways
- [ ] Advanced order tracking with GPS
- [ ] Customer review and rating system
- [ ] Tailor marketplace expansion

## 🤝 Contributing

This project is designed for Bangladesh's custom clothing market. Contributions should consider:
- Local cultural preferences
- Bangladesh payment systems
- Regional logistics challenges
- Local tailor ecosystem

## 📄 License

This project is proprietary and designed for the Bangladesh market.

## 📞 Support

For support and inquiries:
- Email: hello@tailormystyle.com
- Phone: +880 1234 567890
- Address: House 123, Road 45, Dhanmondi, Dhaka 1205, Bangladesh

---

**Made with ❤️ in Bangladesh**