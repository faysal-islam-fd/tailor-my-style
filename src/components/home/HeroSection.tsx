'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

interface HeroSectionProps {
  language?: 'en' | 'bn'
}

export default function HeroSection({ language = 'en' }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920',
      en: {
        title: 'Dress the real you',
        subtitle: 'Custom-made to fit, from head to toe',
        cta: 'Customize Now'
      },
      bn: {
        title: 'আসল আপনাকে সাজান',
        subtitle: 'মাথা থেকে পা পর্যন্ত কাস্টম-মেড ফিট',
        cta: 'এখনই কাস্টমাইজ করুন'
      }
    },
    {
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920',
      en: {
        title: 'Bespoke Suits That Define You',
        subtitle: 'Crafted with precision, tailored to perfection',
        cta: 'Design Your Suit'
      },
      bn: {
        title: 'বেসপোক স্যুট যা আপনাকে সংজ্ঞায়িত করে',
        subtitle: 'নির্ভুলতার সাথে তৈরি, পরিপূর্ণতার জন্য কাস্টমাইজড',
        cta: 'আপনার স্যুট ডিজাইন করুন'
      }
    },
    {
      image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=1920',
      en: {
        title: 'Premium Fabrics, Expert Craftsmanship',
        subtitle: 'Elevate your wardrobe with custom elegance',
        cta: 'Explore Collection'
      },
      bn: {
        title: 'প্রিমিয়াম ফেব্রিক, বিশেষজ্ঞ কারুকাজ',
        subtitle: 'কাস্টম কমনীয়তার সাথে আপনার পোশাক উন্নত করুন',
        cta: 'সংগ্রহ দেখুন'
      }
    }
  ]

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [slides.length])

  const currentContent = slides[currentSlide][language]

  return (
    <section className="relative h-[650px] lg:h-[700px] overflow-hidden">
      {/* Background Images with Clean Transitions */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          
          {/* Simple, clean overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
      ))}
      
      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              {currentContent.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-10 leading-relaxed animate-fade-in-delay">
              {currentContent.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 animate-fade-in-delay-2">
              <Button 
                size="lg" 
                asChild
              >
                <Link href="/design">
                  {currentContent.cta}
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <Link href="/products">
                  {language === 'en' ? 'View Products' : 'পণ্য দেখুন'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
