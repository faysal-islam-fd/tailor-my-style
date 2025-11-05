'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home, ShoppingBag, ZoomIn, User } from 'lucide-react'
import { useState } from 'react'

interface PageProps {
  params: {
    gender: string
    category: string
  }
}

// Design configuration for women's dress (matching Sumissura)
const garmentConfigurations: Record<string, Record<string, any>> = {
  women: {
    dresses: {
      name: 'WRAP DRESS',
      basePrice: 119,
      currency: '$',
      deliveryTime: '3 weeks',
      modelImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1200&fit=crop',
      
      styles: [
        { id: 'shift', name: 'Shift', icon: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&h=150&fit=crop' },
        { id: 'sheath', name: 'Sheath', icon: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=100&h=150&fit=crop' },
        { id: 'high-waisted', name: 'High waisted sheath', icon: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=100&h=150&fit=crop' },
        { id: 'wrapped', name: 'Wrapped', icon: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=150&fit=crop', selected: true },
      ],

      fabrics: [
        { id: 'black', name: 'Black', color: '#000000', price: 0 },
        { id: 'navy', name: 'Navy', color: '#1e3a5f', price: 0 },
        { id: 'burgundy', name: 'Burgundy', color: '#800020', price: 10 },
        { id: 'blush', name: 'Blush', color: '#ffc0cb', price: 0 },
        { id: 'fuchsia', name: 'Fuchsia', color: '#ff00ff', price: 10, selected: true },
        { id: 'purple', name: 'Purple', color: '#6a0dad', price: 10 },
        { id: 'sage', name: 'Sage', color: '#9dc183', price: 10 },
        { id: 'cream', name: 'Cream', color: '#f5deb3', price: 0 },
        { id: 'terracotta', name: 'Terracotta', color: '#e2725b', price: 10 },
        { id: 'white', name: 'White', color: '#ffffff', price: 0 },
        { id: 'pink', name: 'Pink', color: '#ffc0cb', price: 0 },
        { id: 'olive', name: 'Olive', color: '#6b8e23', price: 10 },
        { id: 'brown', name: 'Brown', color: '#8b4513', price: 10 },
        { id: 'mustard', name: 'Mustard', color: '#ffdb58', price: 10 },
        { id: 'charcoal', name: 'Charcoal', color: '#36454f', price: 0 },
        { id: 'forest', name: 'Forest', color: '#228b22', price: 10 },
        { id: 'grey', name: 'Grey', color: '#808080', price: 0 },
        { id: 'rose', name: 'Rose', color: '#ff66cc', price: 10 },
        { id: 'mint', name: 'Mint', color: '#98ff98', price: 10 },
        { id: 'maroon', name: 'Maroon', color: '#800000', price: 10 },
        { id: 'red', name: 'Red', color: '#ff0000', price: 15 },
      ],

      necklines: {
        title: 'NECKLINES',
        options: [
          { id: 'v-middle', name: 'V Neck middle', icon: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=60&h=80&fit=crop', price: 0, selected: true },
          { id: 'v-deep', name: 'V Neck deep', icon: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=60&h=80&fit=crop', price: 0 },
          { id: 'scoop', name: 'Scoop Neck', icon: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=60&h=80&fit=crop', price: 5 },
          { id: 'boat', name: 'Boat Neck', icon: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=60&h=80&fit=crop', price: 5 },
        ]
      },

      sleeves: {
        title: 'SLEEVES',
        options: [
          { id: 'without', name: 'Without sleeves', icon: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=60&h=80&fit=crop', price: -10 },
          { id: 'cap', name: 'Cap', icon: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=60&h=80&fit=crop', price: 0, selected: true },
          { id: 'short', name: 'Short', icon: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=60&h=80&fit=crop', price: 5 },
          { id: 'elbow', name: 'Elbow', icon: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=60&h=80&fit=crop', price: 10 },
          { id: '3-4', name: '3/4', icon: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=60&h=80&fit=crop', price: 15 },
          { id: 'long', name: 'Long', icon: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=60&h=80&fit=crop', price: 20 },
          { id: 'bell', name: 'Bell', icon: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=60&h=80&fit=crop', price: 25 },
        ]
      },

      skirts: [
        { id: 'a-line', name: 'A-line wrapped', icon: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=60&h=100&fit=crop', price: 0 },
        { id: 'flared', name: 'Flared Wrapped', icon: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=60&h=100&fit=crop', price: 10 },
        { id: 'pencil-straight', name: 'Pencil wrapped straigth', icon: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=60&h=100&fit=crop', price: 5 },
        { id: 'pencil-curved', name: 'Pencil wrapped curved', icon: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=60&h=100&fit=crop', price: 5 },
        { id: 'pencil-tulip', name: 'Pencil wrapped tulip', icon: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=60&h=100&fit=crop', price: 10 },
      ],

      lengths: [
        { id: 'short', name: 'SHORT', price: -10 },
        { id: 'knee', name: 'KNEE', price: 0, selected: true },
        { id: 'midi', name: 'MIDI', price: 10 },
        { id: 'maxi', name: 'MAXI', price: 20 },
      ],

      models: [
        { id: 'model1', name: 'Light', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=200&fit=crop&crop=faces' },
        { id: 'model2', name: 'Medium', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=200&fit=crop&crop=faces', selected: true },
        { id: 'model3', name: 'Olive', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop&crop=faces' },
        { id: 'model4', name: 'Dark', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=200&fit=crop&crop=faces' },
      ]
    },
  },
}

export default function DesignStudioPage({ params }: PageProps) {
  const { gender, category } = params
  const config = garmentConfigurations[gender]?.[category]
  
  if (!config) {
    notFound()
  }

  const [selectedStyle, setSelectedStyle] = useState(config.styles.find((s: any) => s.selected)?.id || config.styles[0].id)
  const [selectedFabric, setSelectedFabric] = useState(config.fabrics.find((f: any) => f.selected)?.id || config.fabrics[0].id)
  const [selectedNeckline, setSelectedNeckline] = useState(config.necklines.options.find((n: any) => n.selected)?.id || config.necklines.options[0].id)
  const [selectedSleeve, setSelectedSleeve] = useState(config.sleeves.options.find((s: any) => s.selected)?.id || config.sleeves.options[0].id)
  const [selectedLength, setSelectedLength] = useState(config.lengths.find((l: any) => l.selected)?.id || config.lengths[0].id)
  const [selectedModel, setSelectedModel] = useState(config.models.find((m: any) => m.selected)?.id || config.models[0].id)
  
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    necklines: false,
    sleeves: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const calculatePrice = () => {
    let total = config.basePrice
    
    const fabric = config.fabrics.find((f: any) => f.id === selectedFabric)
    if (fabric?.price) total += fabric.price
    
    const neckline = config.necklines.options.find((n: any) => n.id === selectedNeckline)
    if (neckline?.price) total += neckline.price
    
    const sleeve = config.sleeves.options.find((s: any) => s.id === selectedSleeve)
    if (sleeve?.price) total += sleeve.price
    
    const length = config.lengths.find((l: any) => l.id === selectedLength)
    if (length?.price) total += length.price
    
    return total
  }

  const getSelectedSleeveName = () => {
    return config.sleeves.options.find((s: any) => s.id === selectedSleeve)?.name || 'Cap'
  }

  const getSelectedNecklineName = () => {
    return config.necklines.options.find((n: any) => n.id === selectedNeckline)?.name || 'V-Neck'
  }

  const getSelectedLengthName = () => {
    return config.lengths.find((l: any) => l.id === selectedLength)?.name || 'Knee'
  }

  // Get current model image based on selections
  const getCurrentModelImage = () => {
    const selectedModelData = config.models.find((m: any) => m.id === selectedModel)
    return selectedModelData?.image || config.models[0].image
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Breadcrumb */}
      <div className="border-b bg-background sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/category/${gender}`} className="hover:text-primary transition-colors capitalize">{gender}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/category/${gender}/${category}`} className="hover:text-primary transition-colors">
              {config.name.replace('Custom ', '')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Design</span>
          </nav>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Left Sidebar - Customization Options */}
        <div className="w-[380px] border-r bg-card overflow-y-auto p-6 space-y-6">
          {/* Category Tabs */}
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm border-2 border-primary text-primary rounded-full font-medium">
              ALL PURPOSE
            </button>
            <button className="px-4 py-2 text-sm border border-border text-muted-foreground rounded-full hover:border-primary/50 transition-colors">
              CEREMONIAL
            </button>
          </div>

          {/* Style Selection */}
          <div>
            <div className="grid grid-cols-4 gap-3 mb-6">
              {config.styles.map((style: any) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`flex flex-col items-center gap-2 p-2 rounded-lg transition-all ${
                    selectedStyle === style.id ? 'ring-2 ring-primary' : 'hover:bg-secondary/50'
                  }`}
                >
                  <div className="w-16 h-24 bg-secondary/50 rounded overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="40" height="60" viewBox="0 0 40 60" className="text-muted-foreground">
                        <rect x="10" y="5" width="20" height="50" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs text-center">{style.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Fabric Colors */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-sm font-semibold uppercase">BLAZIE</h3>
              <button className="text-xs text-pink-500 underline">(fabric info)</button>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {config.fabrics.slice(0, 14).map((fabric: any) => (
                <button
                  key={fabric.id}
                  onClick={() => setSelectedFabric(fabric.id)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedFabric === fabric.id ? 'border-pink-500 scale-110' : 'border-gray-200 hover:scale-105'
                  }`}
                  style={{ backgroundColor: fabric.color }}
                  title={fabric.name}
                />
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 mt-2">
              {config.fabrics.slice(14).map((fabric: any) => (
                <button
                  key={fabric.id}
                  onClick={() => setSelectedFabric(fabric.id)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedFabric === fabric.id ? 'border-pink-500 scale-110' : 'border-gray-200 hover:scale-105'
                  }`}
                  style={{ backgroundColor: fabric.color }}
                  title={fabric.name}
                />
              ))}
            </div>
          </div>

          {/* Necklines */}
          <div className="border-t pt-4">
            <button
              onClick={() => toggleSection('necklines')}
              className="flex items-center justify-between w-full text-sm font-semibold text-pink-500 uppercase"
            >
              <span className="flex items-center gap-2">
                + {config.necklines.title}
              </span>
            </button>
            {expandedSections.necklines && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {config.necklines.options.map((option: any) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedNeckline(option.id)}
                    className={`flex flex-col items-center gap-2 p-2 rounded-lg transition-all ${
                      selectedNeckline === option.id ? 'ring-2 ring-primary' : 'hover:bg-secondary/50'
                    }`}
                  >
                    <div className="w-14 h-20 bg-secondary/50 rounded overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <svg width="30" height="45" viewBox="0 0 30 45" className="text-muted-foreground">
                          <path d="M10 5 L15 15 L20 5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                          <rect x="5" y="15" width="20" height="25" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs text-center leading-tight">{option.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sleeves */}
          <div className="border-t pt-4">
            <button
              onClick={() => toggleSection('sleeves')}
              className="flex items-center justify-between w-full text-sm font-semibold text-pink-500 uppercase"
            >
              <span className="flex items-center gap-2">
                + {config.sleeves.title}
              </span>
            </button>
            {expandedSections.sleeves && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {config.sleeves.options.map((option: any) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedSleeve(option.id)}
                    className={`flex flex-col items-center gap-2 p-2 rounded-lg transition-all ${
                      selectedSleeve === option.id ? 'ring-2 ring-primary' : 'hover:bg-secondary/50'
                    }`}
                  >
                    <div className="w-14 h-20 bg-secondary/50 rounded overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <svg width="35" height="45" viewBox="0 0 35 45" className="text-muted-foreground">
                          <path d="M5 10 L10 15 L10 40 M25 10 L20 15 L20 40" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <rect x="10" y="15" width="10" height="25" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs text-center leading-tight">{option.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Skirt Style */}
          <div className="border-t pt-4">
            <div className="grid grid-cols-5 gap-2 mb-4">
              {config.skirts.map((skirt: any) => (
                <button
                  key={skirt.id}
                  className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-secondary/50"
                >
                  <div className="w-12 h-18 bg-secondary/50 rounded overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="25" height="40" viewBox="0 0 25 40" className="text-muted-foreground">
                        <path d="M5 10 L5 35 Q12.5 38 20 35 L20 10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[10px] text-center leading-tight">{skirt.name}</span>
                </button>
              ))}
            </div>

            {/* Length Pills */}
            <div className="flex gap-2 flex-wrap">
              {config.lengths.map((length: any) => (
                <button
                  key={length.id}
                  onClick={() => setSelectedLength(length.id)}
                  className={`px-4 py-2 text-xs rounded-full border-2 font-medium transition-all ${
                    selectedLength === length.id
                      ? 'border-primary text-primary bg-primary/5'
                      : 'border-border text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  {length.name}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Fabric Colors (duplicate) */}
          <div className="border-t pt-4">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-sm font-semibold uppercase">BLAZIE</h3>
              <button className="text-xs text-pink-500 underline">(fabric info)</button>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {config.fabrics.slice(0, 14).map((fabric: any) => (
                <button
                  key={`bottom-${fabric.id}`}
                  onClick={() => setSelectedFabric(fabric.id)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedFabric === fabric.id ? 'border-pink-500 scale-110' : 'border-gray-200 hover:scale-105'
                  }`}
                  style={{ backgroundColor: fabric.color }}
                />
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 mt-2">
              {config.fabrics.slice(14).map((fabric: any) => (
                <button
                  key={`bottom-${fabric.id}`}
                  onClick={() => setSelectedFabric(fabric.id)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedFabric === fabric.id ? 'border-pink-500 scale-110' : 'border-gray-200 hover:scale-105'
                  }`}
                  style={{ backgroundColor: fabric.color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Center - Model Preview */}
        <div className="flex-1 bg-secondary/20 flex items-center justify-center p-8 relative">
          <div className="relative">
            <img
              src={getCurrentModelImage()}
              alt="Dress Preview"
              className="h-[700px] w-auto object-contain transition-all duration-500"
              key={selectedModel + selectedFabric + selectedStyle}
            />
            {/* Fabric Color Overlay Indicator */}
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full border-2 border-primary"
                  style={{ backgroundColor: config.fabrics.find((f: any) => f.id === selectedFabric)?.color }}
                />
                <div>
                  <p className="text-xs text-muted-foreground">Selected Color</p>
                  <p className="font-semibold text-sm">
                    {config.fabrics.find((f: any) => f.id === selectedFabric)?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Model Selection & Purchase */}
        <div className="w-[320px] border-l bg-card p-6 flex flex-col">
          {/* Model Selection */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {config.models.map((model: any) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`relative rounded-lg overflow-hidden transition-all ${
                    selectedModel === model.id ? 'ring-4 ring-primary scale-105' : 'hover:opacity-80'
                  }`}
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-32 object-cover object-top"
                  />
                </button>
              ))}
            </div>
            <button className="w-full py-2 bg-foreground text-background text-sm rounded hover:opacity-90 transition-all">
              Change skintone
            </button>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-light tracking-wide mb-2">{config.name}</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6">
              {getSelectedSleeveName()} SLEEVES {getSelectedNecklineName()}<br/>
              {getSelectedLengthName()} LENGTH SKIRT
            </p>

            <div className="text-4xl font-light mb-8 text-primary">
              {config.currency}{calculatePrice()}
              <span className="text-sm text-muted-foreground ml-2">VAT incl.</span>
            </div>

            <button className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors mb-4 shadow-lg">
              Add To Bag
            </button>

            <div className="text-center mb-6">
              <p className="text-sm font-semibold mb-1 text-foreground">MADE TO MEASURE</p>
              <p className="text-xs text-muted-foreground">
                ORDER TODAY, RECEIVE IN {config.deliveryTime.toUpperCase()}.
              </p>
            </div>

            {/* View Options */}
            <div className="flex justify-center gap-8 text-center">
              <button className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary transition-colors">
                  <User className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="text-xs text-muted-foreground">SKIN TONE</span>
              </button>
              <button className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary transition-colors">
                  <ZoomIn className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="text-xs text-muted-foreground">ZOOM</span>
              </button>
              <button className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                    <path d="M5 5 L10 2 L15 5 L15 15 L10 18 L5 15 Z"/>
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground">NO-MODEL-VIEW</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
