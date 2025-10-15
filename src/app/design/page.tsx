'use client'

import { useState } from 'react'
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
  const [language, setLanguage] = useState<'en' | 'bn'>('en')
  const [selectedGarment, setSelectedGarment] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState(1)

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

  const handleGarmentSelect = (garmentId: string) => {
    setSelectedGarment(garmentId)
  }

  const handleContinue = () => {
    if (selectedGarment) {
      // Navigate to next step or fabric selection
      console.log('Selected garment:', selectedGarment)
      // For now, just show an alert
      alert(`Selected: ${selectedGarment}. Next step would be fabric selection.`)
    }
  }

  const getSelectedGarment = () => {
    return garmentOptions.find(g => g.id === selectedGarment)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="flex items-center text-gray-600 hover:text-primary transition-colors">
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step === currentStep 
                    ? 'border-primary bg-primary text-white' 
                    : step < currentStep 
                    ? 'border-primary bg-primary text-white' 
                    : 'border-gray-300 bg-white text-gray-400'
                }`}>
                  {step < currentStep ? (
                    <CheckIcon className="h-6 w-6" />
                  ) : (
                    <span className="font-semibold">{step}</span>
                  )}
                </div>
                {step < 5 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    step < currentStep ? 'bg-primary' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-lg font-semibold text-gray-900">
              {language === 'en' ? `Step ${currentStep}: ` : `ধাপ ${currentStep}: `}
              {currentStep === 1 && currentContent.step1}
              {currentStep === 2 && currentContent.step2}
              {currentStep === 3 && currentContent.step3}
              {currentStep === 4 && currentContent.step4}
              {currentStep === 5 && currentContent.step5}
            </p>
          </div>
        </div>

        {/* Garment Selection */}
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
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {language === 'en' ? garment.name : garment.nameBn}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === 'en' ? garment.description : garment.descriptionBn}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-500">
                        {currentContent.basePrice}
                      </p>
                      <p className="text-lg font-bold text-primary">
                        ৳{garment.basePrice.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        {currentContent.estimatedTime}
                      </p>
                      <p className="text-sm font-medium text-gray-700">
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

        {/* Selected Garment Summary */}
        {selectedGarment && (
          <div className="mt-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <ScissorsIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {language === 'en' ? 'Selected:' : 'নির্বাচিত:'} {getSelectedGarment()?.name}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? `Starting from ৳${getSelectedGarment()?.basePrice.toLocaleString()} • ${getSelectedGarment()?.estimatedTime}`
                        : `৳${getSelectedGarment()?.basePrice.toLocaleString()} থেকে শুরু • ${getSelectedGarment()?.estimatedTime}`
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
