'use client'

import { useState, useEffect, Suspense, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  UserIcon,
  Bars3Icon,
  ChatBubbleLeftRightIcon,
  ArrowUpTrayIcon,
  HeartIcon,
  ShoppingBagIcon,
  ScissorsIcon
} from '@heroicons/react/24/outline'

interface Fabric {
  id: string
  name: string
  subtitle: string
  price: number
  image: string
  color: string
  pattern?: string
}

interface StyleOption {
  id: string
  name: string
  image: string
  buttons: number
  type: 'single' | 'double' | 'mandarin'
}

interface AccentOption {
  lining: string
  buttons: string
  threadColor: string
  pocketSquare: boolean
}

function DesignPageInner() {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState<'fabric' | 'style' | 'accents'>('fabric')
  const [selectedFabric, setSelectedFabric] = useState<string | null>('1')
  const [selectedStyle, setSelectedStyle] = useState<string | null>('single-2')
  const [searchQuery, setSearchQuery] = useState('')
  const [initials, setInitials] = useState('')
  const [selectedLining, setSelectedLining] = useState('default')
  const [selectedButtons, setSelectedButtons] = useState('default')
  const [selectedThreadColor, setSelectedThreadColor] = useState('#000000')
  const [selectedPocketSquare, setSelectedPocketSquare] = useState(false)
  const [garmentType, setGarmentType] = useState<'suit' | 'shirt' | 'blazer'>('suit')
  const [imageErrorKey, setImageErrorKey] = useState(0)

  // Mock fabric data - matching Hockerty's catalog with realistic colors
  const fabrics: Fabric[] = [
    { id: '1', name: 'Twill', subtitle: 'Navy Blue - 100s', price: 259, image: '', color: '#1e3a8a', pattern: 'twill' },
    { id: '2', name: 'Melange', subtitle: 'Twill - Iron gray', price: 259, image: '', color: '#78716c', pattern: 'melange' },
    { id: '3', name: 'Comfort stretch', subtitle: 'Basic - Twill', price: 219, image: '', color: '#1e40af', pattern: 'solid' },
    { id: '4', name: 'Comfort stretch', subtitle: 'Basic - Black', price: 219, image: '', color: '#1f2937', pattern: 'solid' },
    { id: '5', name: 'Comfort stretch', subtitle: 'Basic - Charcoal', price: 219, image: '', color: '#4b5563', pattern: 'melange' },
    { id: '6', name: 'Comfort stretch', subtitle: '2 Ply - Wool Blends', price: 499, image: '', color: '#374151', pattern: 'solid' },
    { id: '7', name: 'Shiny', subtitle: 'Dobby - Celebration', price: 259, image: '', color: '#1e293b', pattern: 'dobby' },
    { id: '8', name: 'Shiny', subtitle: 'Serge - Navy Blue', price: 279, image: '', color: '#172554', pattern: 'solid' },
    { id: '9', name: 'Shiny', subtitle: 'Lurex - Nailhead', price: 279, image: '', color: '#334155', pattern: 'nailhead' },
    { id: '10', name: 'Twill', subtitle: 'Charcoal Gray', price: 259, image: '', color: '#52525b', pattern: 'twill' },
    { id: '11', name: 'Herringbone', subtitle: 'Classic Navy', price: 299, image: '', color: '#1e3a8a', pattern: 'herringbone' },
    { id: '12', name: 'Pinstripe', subtitle: 'Navy Stripe', price: 289, image: '', color: '#1e3a8a', pattern: 'pinstripe' },
    { id: '13', name: 'Oxford', subtitle: 'Light Blue', price: 199, image: '', color: '#3b82f6', pattern: 'solid' },
    { id: '14', name: 'Poplin', subtitle: 'White', price: 189, image: '', color: '#f8fafc', pattern: 'solid' },
    { id: '15', name: 'Herringbone', subtitle: 'Light Gray', price: 299, image: '', color: '#9ca3af', pattern: 'herringbone' },
    { id: '16', name: 'Twill', subtitle: 'Beige', price: 249, image: '', color: '#d4a574', pattern: 'twill' },
  ]
  
  // Detect garment type from URL
  useEffect(() => {
    const garment = searchParams.get('garment')
    if (garment === 'suit' || garment === 'shirt' || garment === 'blazer') {
      setGarmentType(garment)
    }
  }, [searchParams])

  const styles: StyleOption[] = [
    { id: 'single-1', name: 'Single-breasted 1 button', image: '', buttons: 1, type: 'single' },
    { id: 'single-2', name: 'Single-breasted 2 buttons', image: '', buttons: 2, type: 'single' },
    { id: 'double-4', name: 'Double-breasted 4 buttons', image: '', buttons: 4, type: 'double' },
    { id: 'double-6', name: 'Double-breasted 6 buttons', image: '', buttons: 6, type: 'double' },
    { id: 'mandarin', name: 'Mandarin', image: '', buttons: 0, type: 'mandarin' },
  ]

  // Generate dynamic suit preview based on selections
  const currentSuitPreview = useMemo(() => {
    const fabric = fabrics.find(f => f.id === selectedFabric)
    const style = styles.find(s => s.id === selectedStyle)
    
    return {
      color: fabric?.color || '#1a2947',
      fabricName: fabric?.name || 'Twill',
      styleType: style?.type || 'single',
      buttons: style?.buttons || 2,
      lining: selectedLining,
      threadColor: selectedThreadColor,
      pocketSquare: selectedPocketSquare
    }
  }, [selectedFabric, selectedStyle, selectedLining, selectedThreadColor, selectedPocketSquare])

  const garmentImageSrc = useMemo(() => {
    const styleType = currentSuitPreview.styleType
    if (garmentType === 'suit') {
      if (styleType === 'double') return 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=900&h=1200&fit=crop&q=85&auto=format'
      if (styleType === 'mandarin') return 'https://images.unsplash.com/photo-1617127365532-6d42bb1bb1d8?w=900&h=1200&fit=crop&q=85&auto=format'
      return 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&h=1200&fit=crop&q=85&auto=format'
    }
    if (garmentType === 'shirt') {
      return 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&h=1200&fit=crop&q=85&auto=format'
    }
    // blazer fallback
    return 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&h=1200&fit=crop&q=85&auto=format'
  }, [garmentType, currentSuitPreview.styleType])

  // Calculate dynamic price based on selections
  const calculatePrice = useMemo(() => {
    const fabric = fabrics.find(f => f.id === selectedFabric)
    let basePrice = fabric?.price || 219
    
    // Add customization costs
    if (selectedLining === 'custom') basePrice += 10
    if (selectedLining === 'unlined') basePrice += 30
    if (selectedButtons === 'custom') basePrice += 5
    if (selectedPocketSquare) basePrice += 10
    
    return basePrice
  }, [selectedFabric, selectedLining, selectedButtons, selectedPocketSquare])

  const threadColors = [
    '#E8D5C4', '#D4B896', '#A67C52', '#8B4513', '#CD853F',
    '#DDA0DD', '#4B0082', '#000000', '#696969', '#808080',
    '#C0C0C0', '#4682B4', '#00008B', '#191970', '#F5F5F5'
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Garment Type Selector */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground font-medium">Customize:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setGarmentType('suit')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  garmentType === 'suit'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                }`}
              >
                Suit
              </button>
              <button
                onClick={() => setGarmentType('shirt')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  garmentType === 'shirt'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                }`}
              >
                Shirt
              </button>
              <button
                onClick={() => setGarmentType('blazer')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  garmentType === 'blazer'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                }`}
              >
                Blazer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Designer Layout */}
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-128px)]">
          
          {/* Left Sidebar - Options Panel */}
          <aside className="lg:col-span-3 border-r border-border overflow-y-auto bg-card h-[calc(100vh-128px)]">
            {currentStep === 'fabric' && (
              <div className="p-4">
                {/* Search Bar */}
                <div className="mb-4">
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search fabrics by name or property"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-input border border-border text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors">
                    <AdjustmentsHorizontalIcon className="h-5 w-5 text-foreground" />
                    <span className="text-foreground">Filters</span>
                  </button>
                  <span className="text-sm text-muted-foreground">205/205</span>
        </div>

                {/* Fabric Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {fabrics.map((fabric) => (
                    <button
                      key={fabric.id}
                      onClick={() => setSelectedFabric(fabric.id)}
                      className={`relative group text-left transition-all ${
                        selectedFabric === fabric.id ? 'ring-2 ring-orange-500 rounded-lg' : ''
                      }`}
                    >
                      <div 
                        className={`aspect-[4/3] rounded-lg mb-2 border border-gray-200 relative overflow-hidden ${
                          fabric.pattern === 'twill' ? 'bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.05)_2px,rgba(255,255,255,0.05)_4px)]' :
                          fabric.pattern === 'herringbone' ? 'bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(255,255,255,0.08)_3px,rgba(255,255,255,0.08)_6px),repeating-linear-gradient(-45deg,transparent,transparent_3px,rgba(255,255,255,0.08)_3px,rgba(255,255,255,0.08)_6px)]' :
                          fabric.pattern === 'pinstripe' ? 'bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(255,255,255,0.15)_8px,rgba(255,255,255,0.15)_9px)]' :
                          fabric.pattern === 'melange' ? 'bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_1px,transparent_1px),radial-gradient(circle_at_60%_80%,rgba(0,0,0,0.1)_1px,transparent_1px)]' :
                          fabric.pattern === 'nailhead' ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)]' :
                          fabric.pattern === 'dobby' ? 'bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(255,255,255,0.05)_4px,rgba(255,255,255,0.05)_8px)]' :
                          ''
                        }`}
                        style={{ 
                          backgroundColor: fabric.color,
                          backgroundSize: fabric.pattern === 'nailhead' ? '8px 8px' : 'auto'
                        }}
                      >
                        {selectedFabric === fabric.id && (
                          <div className="absolute top-2 right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-foreground">{fabric.name}</div>
                      <div className="text-xs text-muted-foreground mb-1">{fabric.subtitle}</div>
                      <div className="text-sm font-bold text-foreground">{fabric.price}€</div>
                    </button>
                  ))}
                  </div>
              </div>
            )}

            {currentStep === 'style' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-6 text-foreground">Style</h3>
                
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
                        selectedStyle === style.id 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="w-16 h-20 mb-2 bg-secondary rounded flex items-center justify-center border border-border">
                        {style.type === 'single' && style.buttons === 1 && (
                          <svg className="w-12 h-16" viewBox="0 0 40 60">
                            <rect x="5" y="5" width="30" height="50" fill="currentColor" className="text-muted" />
                            <path d="M5 5 L20 15 L20 30 L5 25 Z" fill="currentColor" className="text-muted-foreground" />
                            <circle cx="21" cy="35" r="2" fill="currentColor" className="text-foreground" />
                          </svg>
                        )}
                        {style.type === 'single' && style.buttons === 2 && (
                          <svg className="w-12 h-16" viewBox="0 0 40 60">
                            <rect x="5" y="5" width="30" height="50" fill="currentColor" className="text-muted" />
                            <path d="M5 5 L20 15 L20 30 L5 25 Z" fill="currentColor" className="text-muted-foreground" />
                            <circle cx="21" cy="30" r="2" fill="currentColor" className="text-foreground" />
                            <circle cx="21" cy="40" r="2" fill="currentColor" className="text-foreground" />
                          </svg>
                        )}
                        {style.type === 'double' && (
                          <svg className="w-12 h-16" viewBox="0 0 40 60">
                            <rect x="5" y="5" width="30" height="50" fill="currentColor" className="text-muted" />
                            <path d="M5 5 L15 15 L15 30 L5 25 Z" fill="currentColor" className="text-muted-foreground" />
                            <path d="M35 5 L25 15 L25 30 L35 25 Z" fill="currentColor" className="text-muted-foreground" />
                            <circle cx="16" cy="25" r="1.5" fill="currentColor" className="text-foreground" />
                            <circle cx="16" cy="35" r="1.5" fill="currentColor" className="text-foreground" />
                            <circle cx="24" cy="25" r="1.5" fill="currentColor" className="text-foreground" />
                            <circle cx="24" cy="35" r="1.5" fill="currentColor" className="text-foreground" />
                          </svg>
                        )}
                        {style.type === 'mandarin' && (
                          <svg className="w-12 h-16" viewBox="0 0 40 60">
                            <rect x="5" y="10" width="30" height="45" fill="currentColor" className="text-muted" />
                            <rect x="5" y="10" width="30" height="4" fill="currentColor" className="text-muted-foreground" />
                            <circle cx="20" cy="25" r="2" fill="currentColor" className="text-foreground" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs text-center text-foreground">{style.name}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold mb-4 text-foreground">Mix & match fabrics</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-4 border-2 border-primary bg-primary/10 rounded-lg">
                      <div className="w-full h-16 mb-2 bg-secondary rounded border border-border flex items-center justify-center">
                        <div className="w-10 h-12 bg-gradient-to-b from-muted to-muted-foreground" />
                      </div>
                      <span className="text-xs text-foreground">Same Fabric</span>
                    </button>
                    <button className="p-4 border-2 border-border rounded-lg hover:border-primary/50">
                      <div className="w-full h-16 mb-2 bg-secondary rounded border border-border flex items-center justify-center gap-1">
                        <div className="w-4 h-12 bg-gradient-to-b from-muted to-muted-foreground" />
                        <div className="w-4 h-12 bg-gradient-to-b from-primary/30 to-primary/60" />
                      </div>
                      <span className="text-xs text-foreground">Different Fabrics</span>
                    </button>
                  </div>
              </div>
          </div>
        )}

            {currentStep === 'accents' && (
              <div className="p-6 space-y-6">
                <h3 className="text-lg font-semibold text-foreground">Accents</h3>

                {/* Internal Lining */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Internal lining</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => setSelectedLining('default')}
                      className={`p-2 border-2 rounded-lg transition-all ${selectedLining === 'default' ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}
                    >
                      <div className="w-full aspect-square bg-secondary rounded mb-1 border border-border" />
                      <span className="text-xs text-foreground">By default</span>
                    </button>
                    <button 
                      onClick={() => setSelectedLining('custom')}
                      className={`p-2 border-2 rounded-lg transition-all ${selectedLining === 'custom' ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}
                    >
                      <div className="w-full aspect-square bg-purple-500/30 rounded mb-1 border border-purple-500/50" />
                      <span className="text-xs text-foreground">Custom colour (+10€)</span>
                    </button>
                    <button 
                      onClick={() => setSelectedLining('unlined')}
                      className={`p-2 border-2 rounded-lg transition-all ${selectedLining === 'unlined' ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}
                    >
                      <div className="w-full aspect-square bg-background border border-border rounded mb-1" />
                      <span className="text-xs text-foreground">Unlined (+30€)</span>
                    </button>
                  </div>
                </div>

                {/* Quilted Lining */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Quilted lining</h4>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border-2 border-primary bg-primary/10 rounded-lg text-sm text-foreground">No</button>
                    <button className="px-4 py-2 border-2 border-border hover:border-primary/50 rounded-lg text-sm text-foreground">Yes (+20€)</button>
                  </div>
                </div>

                {/* Blazer Initials */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Blazer initials (+10€)</h4>
                  <input
                    type="text"
                    placeholder="Type your initials"
                    value={initials}
                    onChange={(e) => setInitials(e.target.value)}
                    className="w-full px-3 py-2 bg-input border border-border text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="grid grid-cols-4 gap-2 mt-3">
                    <button className="p-2 border-2 border-primary rounded bg-primary/10">
                      <span className="text-sm italic text-foreground">ABC</span>
                    </button>
                    <button className="p-2 border-2 border-border hover:border-primary/50 rounded">
                      <span className="text-sm text-foreground">ABC</span>
                    </button>
                    <button className="p-2 border-2 border-border hover:border-primary/50 rounded">
                      <span className="text-sm font-serif text-foreground">ABC</span>
                    </button>
                    <button className="p-2 border-2 border-border hover:border-primary/50 rounded">
                      <span className="text-sm italic font-serif text-foreground">ABC</span>
                    </button>
                  </div>
                </div>

                {/* Thread Colors */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Thread Colors</h4>
                  <div className="grid grid-cols-5 gap-2">
                    {threadColors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedThreadColor(color)}
                        className={`aspect-square rounded border-2 transition-all ${
                          selectedThreadColor === color ? 'border-primary ring-2 ring-primary/30' : 'border-border hover:border-primary/50'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Pocket Squares */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Pocket Squares</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setSelectedPocketSquare(false)}
                      className={`p-3 border-2 rounded-lg transition-all ${!selectedPocketSquare ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}
                    >
                      <div className="w-full h-12 bg-secondary rounded mb-1 border border-border" />
                      <span className="text-xs text-foreground">without</span>
                    </button>
                    <button 
                      onClick={() => setSelectedPocketSquare(true)}
                      className={`p-3 border-2 rounded-lg transition-all ${selectedPocketSquare ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}
                    >
                      <div className="w-full h-12 bg-gradient-to-br from-secondary to-muted rounded mb-1 flex items-center justify-center border border-border">
                        <div className="w-6 h-6 bg-foreground/20 border border-foreground/40 transform rotate-45" />
                      </div>
                      <span className="text-xs text-foreground">add pocket square (+10€)</span>
                    </button>
                    </div>
                  </div>
                  
                {/* Buttons */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Buttons</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setSelectedButtons('default')}
                      className={`p-3 border-2 rounded-lg transition-all ${selectedButtons === 'default' ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}
                    >
                      <div className="w-full h-12 bg-secondary rounded mb-1 flex items-center justify-center border border-border">
                        <div className="w-6 h-6 rounded-full bg-foreground/80" />
                      </div>
                      <span className="text-xs text-foreground">By default</span>
                    </button>
                    <button 
                      onClick={() => setSelectedButtons('custom')}
                      className={`p-3 border-2 rounded-lg transition-all ${selectedButtons === 'custom' ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}
                    >
                      <div className="w-full h-12 bg-secondary rounded mb-1 flex items-center justify-center border border-border">
                        <div className="w-6 h-6 rounded-full bg-amber-700" />
                      </div>
                      <span className="text-xs text-foreground">Custom (+5€)</span>
                    </button>
                    </div>
                </div>
                
                {/* Button threads/holes */}
                    <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Button threads/ holes</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="p-2 border-2 border-primary rounded-lg bg-primary/10 text-xs text-foreground">By default</button>
                    <button className="p-2 border-2 border-border hover:border-primary/50 rounded-lg text-xs text-foreground">All (+4€)</button>
                    <button className="p-2 border-2 border-border hover:border-primary/50 rounded-lg text-xs text-foreground">Lapel only (+4€)</button>
                  </div>
                    </div>

                {/* Additional accessories */}
                {['Bowtie', 'Necktie', 'Braces', 'Shoes', 'Belt', 'Socks'].map((item) => (
                  <div key={item}>
                    <h4 className="text-sm font-semibold mb-3 text-foreground">{item}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="p-3 border-2 border-primary rounded-lg bg-primary/10 transition-all">
                        <div className="w-full h-12 bg-secondary rounded mb-1 border border-border" />
                        <span className="text-xs text-foreground">without</span>
                      </button>
                      <button className="p-3 border-2 border-border hover:border-primary/50 rounded-lg transition-all">
                        <div className="w-full h-12 bg-secondary rounded mb-1 border border-border" />
                        <span className="text-xs text-foreground">add (+19€)</span>
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        )}
          </aside>

          {/* Center - Product Preview */}
          <main className="lg:col-span-6 bg-secondary flex items-center justify-center relative">
            <div className="relative">
              {/* Garment Preview - Real Photo that changes based on selections */}
              <div className="w-full max-w-lg aspect-[3/4] transition-all duration-500 relative overflow-hidden rounded-lg shadow-2xl bg-secondary">
                {/* Base garment image */}
                <img 
                  key={`${garmentType}-${selectedStyle}-${imageErrorKey}`}
                  src={garmentImageSrc}
                  alt={`Custom ${garmentType} Preview`}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Image failed to load:', garmentImageSrc)
                    e.currentTarget.style.opacity = '0.5'
                  }}
                />
                
                {/* Color overlay - applies fabric color */}
                <div 
                  className="absolute inset-0 transition-all duration-700 pointer-events-none"
                  style={{ 
                    backgroundColor: currentSuitPreview.color,
                    mixBlendMode: 'color',
                    opacity: 0.85
                  }}
                />
                
                {/* Brightness/contrast adjustment based on fabric */}
                <div 
                  className="absolute inset-0 transition-all duration-700 pointer-events-none"
                  style={{ 
                    backgroundColor: currentSuitPreview.color,
                    mixBlendMode: 'overlay',
                    opacity: 0.3
                  }}
                />
                
                {/* Fabric pattern overlays */}
                {fabrics.find(f => f.id === selectedFabric)?.pattern === 'pinstripe' && (
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 10px)',
                    }} />
                  </div>
                )}
                
                {fabrics.find(f => f.id === selectedFabric)?.pattern === 'herringbone' && (
                  <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.2) 6px, rgba(255,255,255,0.2) 12px),
                        repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255,255,255,0.2) 6px, rgba(255,255,255,0.2) 12px)
                      `,
                    }} />
          </div>
        )}

                {fabrics.find(f => f.id === selectedFabric)?.pattern === 'twill' && (
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.15) 3px, rgba(255,255,255,0.15) 6px)',
                    }} />
          </div>
        )}

                {fabrics.find(f => f.id === selectedFabric)?.pattern === 'nailhead' && (
                  <div className="absolute inset-0 pointer-events-none opacity-25">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                      backgroundSize: '8px 8px'
                    }} />
            </div>
        )}

                {fabrics.find(f => f.id === selectedFabric)?.pattern === 'dobby' && (
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(255,255,255,0.15) 5px, rgba(255,255,255,0.15) 10px)',
                    }} />
          </div>
        )}

                {/* Pocket square indicator */}
                {currentSuitPreview.pocketSquare && garmentType === 'suit' && (
                  <div className="absolute" style={{ top: '22%', left: '38%' }}>
                    <div className="w-6 h-6 bg-white opacity-90 transform rotate-45 shadow-lg border border-gray-200" />
                  </div>
                )}
              </div>

              {/* Navigation arrows */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-card border border-border">
                <span className="text-xl text-foreground">←</span>
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-card border border-border">
                <span className="text-xl text-foreground">→</span>
              </button>

              {/* Bottom controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="flex flex-col items-center gap-1 px-3 py-2 bg-card/90 backdrop-blur rounded-lg shadow border border-border hover:bg-card">
                  <UserIcon className="h-5 w-5 text-foreground" />
                  <span className="text-xs text-foreground">SKIN TONE</span>
                </button>
                <button className="flex flex-col items-center gap-1 px-3 py-2 bg-card/90 backdrop-blur rounded-lg shadow border border-border hover:bg-card">
                  <MagnifyingGlassIcon className="h-5 w-5 text-foreground" />
                  <span className="text-xs text-foreground">ZOOM</span>
                </button>
              </div>

              {/* Fabric info badge */}
              <div className="absolute bottom-4 left-4 px-4 py-3 bg-card/95 backdrop-blur rounded-lg shadow-lg border border-primary/30">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded border-2 border-border shadow-sm"
                    style={{ backgroundColor: currentSuitPreview.color }}
                  />
                  <div>
                    <div className="text-xs text-muted-foreground">Current Fabric</div>
                    <div className="text-sm font-bold text-foreground">{currentSuitPreview.fabricName}</div>
                    <div className="text-xs text-muted-foreground">{fabrics.find(f => f.id === selectedFabric)?.subtitle}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Step Navigation */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              <button
                onClick={() => setCurrentStep('fabric')}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all border ${
                  currentStep === 'fabric' ? 'bg-card shadow-lg border-primary' : 'bg-card/60 hover:bg-card border-border'
                }`}
              >
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                  currentStep === 'fabric' ? 'border-primary' : 'border-muted-foreground'
                }`}>
                  <div className={`w-4 h-4 rounded ${currentStep === 'fabric' ? 'bg-primary' : 'bg-muted'}`} />
                </div>
                <span className={`text-xs font-medium ${currentStep === 'fabric' ? 'text-primary' : 'text-foreground'}`}>FABRIC</span>
              </button>
              
              <button
                onClick={() => setCurrentStep('style')}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all border ${
                  currentStep === 'style' ? 'bg-card shadow-lg border-primary' : 'bg-card/60 hover:bg-card border-border'
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <ScissorsIcon className={`w-6 h-6 ${currentStep === 'style' ? 'text-primary' : 'text-foreground'}`} />
          </div>
                <span className={`text-xs font-medium ${currentStep === 'style' ? 'text-primary' : 'text-foreground'}`}>STYLE</span>
              </button>
              
              <button
                onClick={() => setCurrentStep('accents')}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all border ${
                  currentStep === 'accents' ? 'bg-card shadow-lg border-primary' : 'bg-card/60 hover:bg-card border-border'
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className={`text-xl ${currentStep === 'accents' ? 'filter brightness-125' : ''}`}>🪡</span>
                </div>
                <span className={`text-xs font-medium ${currentStep === 'accents' ? 'text-primary' : 'text-foreground'}`}>ACCENTS</span>
                </button>
            </div>
          </main>

          {/* Right Sidebar - Summary & Price */}
          <aside className="lg:col-span-3 bg-card p-6 flex flex-col border-l border-border">
            <div className="flex-1">
              <h2 className="text-2xl font-light mb-2 text-foreground">Your</h2>
              <h1 className="text-2xl font-light mb-8 text-foreground capitalize">Custom {garmentType}</h1>
              
              <div className="mb-8 transition-all duration-300">
                <div className="text-4xl font-light mb-1 text-primary">{calculatePrice}€</div>
                <div className="text-sm text-muted-foreground">VAT incl.</div>
          </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-full text-lg font-medium mb-8 transition-all shadow-elegant"
              >
                next
              </Button>

              <div className="text-sm text-muted-foreground mb-4">
                Order today, receive in 3 weeks.
              </div>
              <div className="text-sm font-semibold text-foreground">
                Free shipping
              </div>
            </div>
          </aside>
          </div>
      </div>
    </div>
  )
}

export default function DesignPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
      <DesignPageInner />
    </Suspense>
  )
}
