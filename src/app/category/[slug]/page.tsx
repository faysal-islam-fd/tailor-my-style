'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  HeartIcon,
  ShoppingCartIcon,
  EyeIcon,
  StarIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

interface Product {
  id: number
  name: string
  price: number
  image: string
  tag?: string
  rating?: number
  reviewCount?: number
  colors?: string[]
}

interface CategoryInfo {
  title: string
  subtitle: string
  description: string
  heroImage: string
  products: Product[]
  fabrics?: {
    id: number
    name: string
    colorName: string
    hex: string
    gsm: number
    composition: string
    priceFrom: number
  }[]
}

const categoryData: Record<string, CategoryInfo> = {
  'shirts': {
    title: 'Custom Dress Shirts',
    subtitle: 'Made to fit',
    description: 'Perfectly tailored shirts crafted from premium fabrics. Design your perfect dress shirt with our intuitive customization tool.',
    heroImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1920',
    products: [
      { id: 1, name: 'White Oxford', price: 89, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400', tag: 'bestseller', rating: 4.8, reviewCount: 124, colors: ['#ffffff', '#f8f9fa'] },
      { id: 2, name: 'Light Blue', price: 95, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400', tag: 'new', rating: 4.9, reviewCount: 89, colors: ['#dbeafe', '#93c5fd'] },
      { id: 3, name: 'Navy Blue', price: 92, image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400', rating: 4.7, reviewCount: 156, colors: ['#1e3a8a', '#1e40af'] },
      { id: 4, name: 'Pink Stripe', price: 99, image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400', rating: 4.6, reviewCount: 67, colors: ['#fce7f3', '#f9a8d4'] },
      { id: 5, name: 'Charcoal Grey', price: 97, image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400', rating: 4.8, reviewCount: 203, colors: ['#374151', '#4b5563'] },
      { id: 6, name: 'Black Formal', price: 105, image: 'https://images.unsplash.com/photo-1621951753015-0d2e895c7a5f?w=400', tag: 'new', rating: 5.0, reviewCount: 298, colors: ['#000000', '#1f2937'] },
      { id: 7, name: 'Sky Blue', price: 89, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400', rating: 4.5, reviewCount: 87, colors: ['#e0f2fe', '#7dd3fc'] },
      { id: 8, name: 'Lavender', price: 95, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400', rating: 4.4, reviewCount: 45, colors: ['#f3e8ff', '#c4b5fd'] },
      { id: 9, name: 'Burgundy', price: 92, image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400', rating: 4.6, reviewCount: 112, colors: ['#7c2d12', '#dc2626'] },
      { id: 10, name: 'Sage Green', price: 99, image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400', rating: 4.7, reviewCount: 78, colors: ['#ecfccb', '#65a30d'] },
    ],
    fabrics: [
      { id: 1, name: 'Oxford', colorName: 'White', hex: '#F5F6F7', gsm: 140, composition: '100% Cotton', priceFrom: 79 },
      { id: 2, name: 'Poplin', colorName: 'Sky Blue', hex: '#CFE6FF', gsm: 120, composition: '100% Cotton', priceFrom: 79 },
      { id: 3, name: 'Twill', colorName: 'Navy', hex: '#1F2A44', gsm: 150, composition: '100% Cotton', priceFrom: 89 },
      { id: 4, name: 'Linen Blend', colorName: 'Sand', hex: '#E6D8C4', gsm: 135, composition: '55% Linen, 45% Cotton', priceFrom: 99 },
      { id: 5, name: 'Satin', colorName: 'Black', hex: '#0F1115', gsm: 130, composition: 'Cotton-Satin', priceFrom: 89 },
      { id: 6, name: 'Chambray', colorName: 'Light Indigo', hex: '#8FA6C6', gsm: 125, composition: '100% Cotton', priceFrom: 85 },
      { id: 7, name: 'Herringbone', colorName: 'Steel', hex: '#AAB2BD', gsm: 155, composition: '100% Cotton', priceFrom: 99 },
      { id: 8, name: 'Dobby', colorName: 'Rose', hex: '#F4C9D2', gsm: 135, composition: '100% Cotton', priceFrom: 95 }
    ]
  },
  'suits': {
    title: 'Custom Suits',
    subtitle: 'Tailored to perfection',
    description: 'Experience the perfect fit with our made-to-measure suits. Choose from premium fabrics and customize every detail.',
    heroImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920',
    products: [
      { id: 11, name: 'Navy Suit', price: 599, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', tag: 'bestseller' },
      { id: 12, name: 'Charcoal Grey', price: 649, image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400' },
      { id: 13, name: 'Black Suit', price: 699, image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400' },
      { id: 14, name: 'Light Grey', price: 579, image: 'https://images.unsplash.com/photo-1598808503491-c8e7f028f1b8?w=400' },
      { id: 15, name: 'Blue Pinstripe', price: 729, image: 'https://images.unsplash.com/photo-1620012253407-f2c7e5a4a9e0?w=400', tag: 'new' },
      { id: 16, name: 'Brown Tweed', price: 629, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400' },
    ]
  },
  'blazers': {
    title: 'Custom Blazers',
    subtitle: 'Smart casual perfection',
    description: 'Elevate your wardrobe with a custom blazer. Perfect for business casual and smart occasions.',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920',
    products: [
      { id: 17, name: 'Navy Blazer', price: 449, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400', tag: 'bestseller' },
      { id: 18, name: 'Tan Jacket', price: 429, image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400' },
      { id: 19, name: 'Grey Flannel', price: 479, image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400' },
      { id: 20, name: 'Olive Green', price: 459, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', tag: 'new' },
    ]
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const unwrappedParams = use(params)
  const category = categoryData[unwrappedParams.slug] || categoryData['shirts']
  const [sortBy, setSortBy] = useState('featured')
  const [wishlist, setWishlist] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
  const garmentQueryMap: Record<string, string> = { shirts: 'shirt', suits: 'suit', blazers: 'blazer' }
  const [fabricSearch, setFabricSearch] = useState('')
  const [fabricWeight, setFabricWeight] = useState<'all' | 'light' | 'medium' | 'heavy'>('all')

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[650px] lg:h-[800px] bg-gray-900 overflow-hidden group">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[30s] ease-out group-hover:scale-110"
            style={{ backgroundImage: `url(${category.heroImage})` }}
          ></div>
          
          {/* Multi-layer Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float opacity-60"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary/20 rounded-full blur-lg animate-float delay-1000 opacity-40"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/5 rounded-full blur-md animate-float delay-2000 opacity-30"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-8 animate-fade-in">
                  <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
                  <span className="text-gray-500">/</span>
                  <Link href="/products" className="hover:text-white transition-colors duration-300">Products</Link>
                  <span className="text-gray-500">/</span>
                  <span className="text-white font-medium">{category.title}</span>
                </nav>

                {/* Main Title with Gradient */}
                <div className="space-y-4 animate-fade-in-delay">
                  <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight">
                    <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                      {category.title.split(' ')[0]}
                    </span>
                    {category.title.split(' ').slice(1).length > 0 && (
                      <span className="block bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                        {category.title.split(' ').slice(1).join(' ')}
                      </span>
                    )}
                  </h1>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full"></div>
                </div>

                {/* Subtitle & Description */}
                <div className="space-y-6 animate-fade-in-delay-2">
                  <p className="text-2xl lg:text-3xl text-gray-200 font-light">
                    {category.subtitle}
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                    {category.description}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-delay-2">
                  <Button 
                    size="lg" 
                    asChild
                    className="px-12 py-8 text-lg font-bold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105 border-0"
                  >
                    <Link href={`/design?garment=${garmentQueryMap[unwrappedParams.slug] ?? 'shirt'}`}>
                      Start Designing
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="px-12 py-8 text-lg font-bold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-500 hover:scale-105"
                  >
                    View Collection
                  </Button>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 animate-fade-in-delay-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">50K+</div>
                    <div className="text-sm text-gray-300">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">98%</div>
                    <div className="text-sm text-gray-300">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual Elements */}
              <div className="relative lg:block hidden animate-fade-in-delay-2">
                {/* Floating Cards */}
                <div className="relative h-96">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="text-white text-center">
                      <div className="text-3xl font-bold mb-2">Premium</div>
                      <div className="text-sm text-gray-300">Quality Materials</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 backdrop-blur-md rounded-2xl border border-primary/30 p-6 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">Custom</div>
                      <div className="text-sm text-gray-200">Made to Fit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in-delay-2">
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 border border-primary/20 rounded-full animate-spin-slow-reverse"></div>
          <div className="absolute top-1/2 right-32 w-16 h-16 bg-white/10 rounded-full animate-bounce-slow"></div>
        </div>
      </section>

      {/* Fabric Swatch Grid (if fabrics available) */}
      {category.fabrics && (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-3">Choose your cloth</h2>
            <p className="text-muted-foreground">Plain fabrics curated for premium {unwrappedParams.slug}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {category.fabrics.map((fabric) => (
              <Link key={fabric.id} href={`/design?garment=${garmentQueryMap[unwrappedParams.slug] ?? 'shirt'}&fabric=${fabric.name.toLowerCase().replace(/\s+/g,'-')}-${fabric.colorName.toLowerCase().replace(/\s+/g,'-')}`} className="group">
                <div className="p-3 rounded-xl border border-primary/20 bg-card shadow-elegant hover:border-primary/40 transition-all duration-300">
                  <div className="aspect-square rounded-lg border border-border mb-3 overflow-hidden relative">
                    <div className="absolute inset-0" style={{ backgroundColor: fabric.hex }}></div>
                    <div className="absolute bottom-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-secondary/70 border border-primary/30 text-muted-foreground">{fabric.gsm} GSM</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-foreground">{fabric.colorName}</div>
                    <div className="text-xs text-muted-foreground">{fabric.name} • {fabric.composition}</div>
                    <div className="text-xs text-muted-foreground">From ${fabric.priceFrom}</div>
                  </div>
                  <div className="mt-3">
                    <Button size="sm" className="w-full">Use this cloth</Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Product Grid Section */}
      {!category.fabrics && (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-3">Our best picks for you</h2>
            <p className="text-muted-foreground">Handpicked selection of premium {unwrappedParams.slug}</p>
          </div>

          {/* Filter Bar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-primary/20">
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold">{category.products.length}</span> products
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm text-muted-foreground">Sort by:</label>
              <select 
                className="border-2 border-border bg-secondary text-foreground rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {category.products.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-500 border border-primary/20 hover:border-primary/40">
                  {/* Product Image */}
                  <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
                    <Link href={`/product/${product.id}`}>
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                        style={{ backgroundImage: `url(${product.image})` }}
                      ></div>
                    </Link>
                    
                    {/* Tag */}
                    {product.tag && (
                      <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                        product.tag === 'new' ? 'bg-green-600 text-white' : 'bg-primary text-primary-foreground'
                      }`}>
                        {product.tag}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2">
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="w-10 h-10 bg-secondary/80 border border-primary/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-elegant"
                      >
                        {wishlist.includes(product.id) ? (
                          <HeartSolidIcon className="w-5 h-5 text-primary" />
                        ) : (
                          <HeartIcon className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="w-10 h-10 bg-secondary/80 border border-primary/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-elegant"
                      >
                        <EyeIcon className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Quick Add Button */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg">
                        <ShoppingCartIcon className="w-4 h-4 mr-2" />
                        Quick Add
                      </Button>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                    <div className="p-4">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon 
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">({product.reviewCount})</span>
                      </div>
                    )}

                    {/* Price */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-foreground">
                        ${product.price}
                      </span>
                      <span className="text-xs text-muted-foreground">from</span>
                    </div>

                    {/* Color Swatches */}
                    {product.colors && (
                      <div className="flex items-center gap-1">
                        {product.colors.slice(0, 4).map((color, index) => (
                          <div
                            key={index}
                            className="w-5 h-5 rounded-full border border-border shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        {product.colors.length > 4 && (
                          <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 4}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Lifestyle Section 1 */}
      <section className="py-0 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative h-[600px] bg-gray-100 rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=800)' }}
              ></div>
            </div>
            
            {/* Text Content */}
            <div className="lg:pl-12">
              <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
                Custom Dress Shirts for a Perfect Fit
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our custom dress shirts are made to your exact measurements, ensuring a perfect fit every time. 
                Choose from over 100 premium fabrics and customize every detail.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-muted-foreground">Made from premium fabrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-muted-foreground">Tailored to your measurements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-muted-foreground">Customize collars, cuffs, and buttons</span>
                </li>
              </ul>
              <Button size="lg" className="px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* More Products Grid */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {category.products.slice(0, 5).map((product) => (
              <Link 
                key={`more-${product.id}`}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-shadow border border-primary/20">
                  <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                  </div>
                  <div className="py-4 px-3">
                    <h3 className="text-sm font-medium text-foreground mb-2">
                      {product.name}
                    </h3>
                    <span className="text-base font-bold text-foreground">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section 2 */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="lg:pr-12 order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
                Quality Craftsmanship
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every piece is crafted with attention to detail by our expert tailors. We use only the finest 
                materials and traditional techniques to ensure lasting quality.
              </p>
              <Button size="lg" variant="outline" className="px-8">
                Discover More
              </Button>
            </div>
            
            {/* Image */}
            <div className="relative h-[600px] bg-gray-100 rounded-lg overflow-hidden order-1 lg:order-2">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800)' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Product Row */}
      <section className="py-16 bg-background border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {category.products.slice(5, 10).map((product) => (
              <Link 
                key={`final-${product.id}`}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden border border-primary/20">
                  <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                  </div>
                  <div className="py-4">
                    <h3 className="text-sm font-medium text-foreground mb-2">
                      {product.name}
                    </h3>
                    <span className="text-base font-bold text-foreground">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-elegant border border-primary/20">
            <div className="relative">
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-secondary/80 border border-primary/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-elegant"
              >
                <XMarkIcon className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="relative aspect-[3/4] bg-secondary rounded-xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${quickViewProduct.image})` }}
                  ></div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">{quickViewProduct.name}</h2>
                    {quickViewProduct.rating && (
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon 
                              key={i}
                              className={`w-5 h-5 ${i < Math.floor(quickViewProduct.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">({quickViewProduct.reviewCount} reviews)</span>
                      </div>
                    )}
                    <div className="text-3xl font-bold text-foreground mb-6">
                      ${quickViewProduct.price}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Premium quality {quickViewProduct.name.toLowerCase()} crafted with attention to detail. 
                    Perfect for both casual and formal occasions.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Available Colors</h4>
                      <div className="flex gap-2">
                        {quickViewProduct.colors?.map((color, index) => (
                          <div
                            key={index}
                            className="w-10 h-10 rounded-full border-2 border-border shadow-sm hover:border-primary cursor-pointer transition-colors"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button size="lg" className="flex-1">
                      <ShoppingCartIcon className="w-5 h-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => toggleWishlist(quickViewProduct.id)}
                    >
                      {wishlist.includes(quickViewProduct.id) ? (
                        <HeartSolidIcon className="w-5 h-5 text-red-500" />
                      ) : (
                        <HeartIcon className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                  
                  <Link href={`/product/${quickViewProduct.id}`}>
                    <Button variant="ghost" className="w-full">
                      View Full Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
