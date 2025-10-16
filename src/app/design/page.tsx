'use client'

import { useMemo, useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeftIcon, 
  ArrowRightIcon,
  CheckIcon,
  ScissorsIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

interface GarmentOption {
  id: string
  name: string
  nameBn: string
  description: string
  descriptionBn: string
  basePrice: number
  image: string
  estimatedTime: string
}

export default function DesignPage() {
  const router = useRouter()
  const search = useSearchParams()
  const [language, setLanguage] = useState<'en' | 'bn'>('en')
  const [selectedGarment, setSelectedGarment] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1)
  const [selectedFabric, setSelectedFabric] = useState<string | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [selectedAccent, setSelectedAccent] = useState<string | null>(null)

  const garmentOptions: GarmentOption[] = [
    {
      id: 'shirt',
      name: 'Custom Shirt',
      nameBn: 'কাস্টম শার্ট',
      description: 'Perfect fitting formal and casual shirts',
      descriptionBn: 'নিখুঁত ফিটিং ফরমাল এবং ক্যাজুয়াল শার্ট',
      basePrice: 800,
      image: '/api/placeholder/300/400',
      estimatedTime: '7-10 days'
    },
    {
      id: 'suit',
      name: 'Bespoke Suit',
      nameBn: 'বেসপোক স্যুট',
      description: 'Premium business and formal suits',
      descriptionBn: 'প্রিমিয়াম ব্যবসায়িক এবং ফরমাল স্যুট',
      basePrice: 8000,
      image: '/api/placeholder/300/400',
      estimatedTime: '14-21 days'
    },
    {
      id: 'blazer',
      name: 'Smart Blazer',
      nameBn: 'স্মার্ট ব্লেজার',
      description: 'Versatile blazers for any occasion',
      descriptionBn: 'যেকোনো উপলক্ষ্যে বহুমুখী ব্লেজার',
      basePrice: 4000,
      image: '/api/placeholder/300/400',
      estimatedTime: '10-14 days'
    },
    {
      id: 'trousers',
      name: 'Custom Trousers',
      nameBn: 'কাস্টম ট্রাউজার',
      description: 'Perfect fitting trousers',
      descriptionBn: 'নিখুঁত ফিটিং ট্রাউজার',
      basePrice: 1200,
      image: '/api/placeholder/300/400',
      estimatedTime: '5-7 days'
    },
    {
      id: 'kurta',
      name: 'Traditional Kurta',
      nameBn: 'ঐতিহ্যবাহী কুর্তা',
      description: 'Traditional and modern kurtas',
      descriptionBn: 'ঐতিহ্যবাহী এবং আধুনিক কুর্তা',
      basePrice: 1500,
      image: '/api/placeholder/300/400',
      estimatedTime: '7-10 days'
    },
    {
      id: 'sherwani',
      name: 'Elegant Sherwani',
      nameBn: 'মার্জিত শেরওয়ানি',
      description: 'Special occasion sherwanis',
      descriptionBn: 'বিশেষ উপলক্ষ্যের শেরওয়ানি',
      basePrice: 6000,
      image: '/api/placeholder/300/400',
      estimatedTime: '12-18 days'
    }
  ]

  const content = {
    en: {
      title: 'Design Your Perfect Garment',
      subtitle: 'Choose your garment type and start customizing',
      step1: 'Choose Garment Type',
      step2: 'Select Fabric',
      step3: 'Customize Style',
      step4: 'Add Measurements',
      step5: 'Review & Order',
      continue: 'Continue',
      back: 'Back',
      startDesign: 'Start Designing',
      estimatedTime: 'Estimated Time',
      basePrice: 'Starting from'
    },
    bn: {
      title: 'আপনার নিখুঁত পোশাক ডিজাইন করুন',
      subtitle: 'আপনার পোশাকের ধরন বেছে নিন এবং কাস্টমাইজেশন শুরু করুন',
      step1: 'পোশাকের ধরন বেছে নিন',
      step2: 'কাপড় নির্বাচন করুন',
      step3: 'স্টাইল কাস্টমাইজ করুন',
      step4: 'পরিমাপ যোগ করুন',
      step5: 'পর্যালোচনা এবং অর্ডার',
      continue: 'চালিয়ে যান',
      back: 'ফিরে যান',
      startDesign: 'ডিজাইন শুরু করুন',
      estimatedTime: 'আনুমানিক সময়',
      basePrice: 'শুরু হচ্ছে'
    }
  }

  const currentContent = content[language]

  // Mock fabrics/styles/accents (can be replaced with API later)
  const fabrics = useMemo(() => ([
    { id: 'oxford-white', name: 'Oxford White', hex: '#F5F6F7', gsm: 140 },
    { id: 'poplin-sky', name: 'Poplin Sky', hex: '#CFE6FF', gsm: 120 },
    { id: 'twill-navy', name: 'Twill Navy', hex: '#1F2A44', gsm: 150 },
    { id: 'linen-sand', name: 'Linen Sand', hex: '#E6D8C4', gsm: 135 },
    { id: 'satin-black', name: 'Satin Black', hex: '#0F1115', gsm: 130 },
  ]), [])
  const styles = useMemo(() => ([
    { id: 'single-1', name: 'Single-breasted 1 button' },
    { id: 'single-2', name: 'Single-breasted 2 buttons' },
    { id: 'double-4', name: 'Double-breasted 4 buttons' },
    { id: 'double-6', name: 'Double-breasted 6 buttons' },
    { id: 'mandarin', name: 'Mandarin' },
  ]), [])
  const accents = useMemo(() => ([
    { id: 'buttons-brown', name: 'Buttons: Brown' },
    { id: 'buttons-navy', name: 'Buttons: Navy Blue' },
    { id: 'buttons-gold', name: 'Buttons: Shiny Gold' },
    { id: 'thread-white', name: 'Thread: Off-White' },
    { id: 'pocket-square', name: 'Pocket Square' },
  ]), [])

  // Initialize from URL
  useEffect(() => {
    const g = search.get('garment')
    const f = search.get('fabric')
    if (g) setSelectedGarment(g)
    if (f) setSelectedFabric(f)
    if (g || f) setCurrentStep(2) // jump to fabric step if arriving from category
  }, [search])

  const handleGarmentSelect = (garmentId: string) => {
    setSelectedGarment(garmentId)
  }

  const handleContinue = () => {
    if (!selectedGarment) return
    setCurrentStep(2)
  }

  const getSelectedGarment = () => {
    return garmentOptions.find(g => g.id === selectedGarment)
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              {language === 'en' ? 'Back to Home' : 'হোমে ফিরুন'}
            </Link>
            <Button
              variant="outline"
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </Button>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Designer Layout */}
        {currentStep >= 2 && (
          <div className="grid grid-cols-12 gap-6">
            {/* Left sidebar */}
            <aside className="col-span-12 md:col-span-3 lg:col-span-3 bg-card rounded-xl border border-primary/20 p-4 h-fit sticky top-4">
              <nav className="space-y-2">
                {['fabric','style','accents'].map((tab, idx) => {
                  const stepIndex = (idx + 2) as 2 | 3 | 4
                  const active = currentStep === stepIndex
                  return (
                    <button
                      key={tab}
                      onClick={() => setCurrentStep(stepIndex)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-bold uppercase tracking-wide transition-all ${active ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground hover:bg-secondary/70'}`}
                    >
                      {tab === 'fabric' && (language === 'en' ? 'Fabric' : 'কাপড়')}
                      {tab === 'style' && (language === 'en' ? 'Style' : 'স্টাইল')}
                      {tab === 'accents' && (language === 'en' ? 'Accents' : 'অ্যাকসেন্টস')}
                    </button>
                  )
                })}
              </nav>
            </aside>

            {/* Center preview */}
            <section className="col-span-12 md:col-span-6 lg:col-span-6 bg-card rounded-xl border border-primary/20 p-6 flex flex-col items-center justify-center">
              <div className="w-full max-w-md aspect-[3/4] bg-gradient-to-b from-secondary to-background rounded-xl flex items-center justify-center relative">
                <div className="text-[140px] select-none">{selectedGarment === 'shirt' ? '👔' : selectedGarment === 'blazer' ? '🧥' : '🤵'}</div>
                {selectedFabric && (
                  <div className="absolute bottom-4 right-4 text-xs px-3 py-1 rounded-full bg-secondary border border-primary/30 text-muted-foreground">
                    {selectedFabric}
                  </div>
                )}
              </div>
            </section>

            {/* Right summary */}
            <aside className="col-span-12 md:col-span-3 lg:col-span-3 bg-card rounded-xl border border-primary/20 p-4 h-fit sticky top-4">
              <div className="space-y-3">
                <h3 className="text-lg font-bold">Your {selectedGarment ?? 'garment'}</h3>
                <div className="text-sm text-muted-foreground">Base price shown; options may add cost.</div>
                <div className="text-sm"><span className="font-semibold">Fabric:</span> {selectedFabric ?? '—'}</div>
                <div className="text-sm"><span className="font-semibold">Style:</span> {selectedStyle ?? '—'}</div>
                <div className="text-sm"><span className="font-semibold">Accents:</span> {selectedAccent ?? '—'}</div>
                <Button className="w-full mt-2" onClick={() => setCurrentStep((s) => (s < 4 ? ((s + 1) as any) : s))}>next</Button>
              </div>
            </aside>
          </div>
        )}

        {/* Step 1 - Garment Selection */}
        {currentStep === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {garmentOptions.map((garment) => (
              <Card 
                key={garment.id} 
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedGarment === garment.id 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => handleGarmentSelect(garment.id)}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {garment.id === 'shirt' && '👔'}
                      {garment.id === 'suit' && '🤵'}
                      {garment.id === 'blazer' && '🧥'}
                      {garment.id === 'trousers' && '👖'}
                      {garment.id === 'kurta' && '👘'}
                      {garment.id === 'sherwani' && '🎩'}
                    </div>
                  </div>
                  
                  {selectedGarment === garment.id && (
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <CheckIcon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {language === 'en' ? garment.name : garment.nameBn}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === 'en' ? garment.description : garment.descriptionBn}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {currentContent.basePrice}
                      </p>
                      <p className="text-lg font-bold text-primary">
                        ৳{garment.basePrice.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {currentContent.estimatedTime}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {garment.estimatedTime}
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant={selectedGarment === garment.id ? "default" : "outline"}
                  >
                    {selectedGarment === garment.id ? (
                      <>
                        <CheckIcon className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'Selected' : 'নির্বাচিত'}
                      </>
                    ) : (
                      currentContent.startDesign
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {currentStep === 1 && selectedGarment && (
          <div className="flex justify-center mt-8">
            <Button size="lg" onClick={handleContinue}>
              {currentContent.continue}
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Button>
          </div>
        )}

        {/* Steps 2-4 content grids */}
        {currentStep === 2 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Choose Fabric' : 'কাপড় বাছাই করুন'}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {fabrics.map(f => (
                <button key={f.id} onClick={() => setSelectedFabric(f.id)} className={`p-3 rounded-xl border ${selectedFabric === f.id ? 'border-primary' : 'border-primary/20'} bg-card shadow-elegant text-left`}>
                  <div className="aspect-square rounded-lg mb-2 border" style={{ backgroundColor: f.hex }}></div>
                  <div className="text-sm font-semibold text-foreground">{f.name}</div>
                  <div className="text-xs text-muted-foreground">{f.gsm} GSM</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Choose Style' : 'স্টাইল বাছাই করুন'}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {styles.map(s => (
                <button key={s.id} onClick={() => setSelectedStyle(s.id)} className={`p-4 rounded-xl border ${selectedStyle === s.id ? 'border-primary' : 'border-primary/20'} bg-card shadow-elegant text-left`}>
                  <div className="text-5xl mb-2 select-none">🧥</div>
                  <div className="text-sm font-semibold text-foreground">{s.name}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Choose Accents' : 'অ্যাকসেন্টস বাছাই করুন'}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {accents.map(a => (
                <button key={a.id} onClick={() => setSelectedAccent(a.id)} className={`p-4 rounded-xl border ${selectedAccent === a.id ? 'border-primary' : 'border-primary/20'} bg-card shadow-elegant text-left`}>
                  <div className="text-5xl mb-2 select-none">🪡</div>
                  <div className="text-sm font-semibold text-foreground">{a.name}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
