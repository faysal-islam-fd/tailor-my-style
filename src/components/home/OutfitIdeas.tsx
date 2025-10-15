'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface OutfitIdeasProps {
  language?: 'en' | 'bn'
}

export default function OutfitIdeas({ language = 'en' }: OutfitIdeasProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const content = {
    en: {
      title: 'Outfit Ideas',
      subtitle: 'Get inspired and discover new ways of wearing your custom pieces',
      viewAll: 'View All',
      outfits: [
        { image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400', title: 'Summer Casual' },
        { image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', title: 'Business Formal' },
        { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', title: 'Smart Casual' },
        { image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400', title: 'Evening Wear' },
        { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', title: 'Weekend Style' }
      ]
    },
    bn: {
      title: 'পোশাক আইডিয়া',
      subtitle: 'অনুপ্রাণিত হন এবং আপনার কাস্টম পিসগুলি পরার নতুন উপায় আবিষ্কার করুন',
      viewAll: 'সব দেখুন',
      outfits: [
        { image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400', title: 'গ্রীষ্মকালীন ক্যাজুয়াল' },
        { image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', title: 'ব্যবসায়িক ফরমাল' },
        { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', title: 'স্মার্ট ক্যাজুয়াল' },
        { image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400', title: 'সন্ধ্যার পোশাক' },
        { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', title: 'সাপ্তাহিক স্টাইল' }
      ]
    }
  }

  const currentContent = content[language]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentContent.outfits.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentContent.outfits.length) % currentContent.outfits.length)
  }

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {currentContent.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              {currentContent.subtitle}
            </p>
          </div>
          <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 hidden md:block">
            {currentContent.viewAll}
          </Button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 5)}%)` }}
            >
              {currentContent.outfits.map((outfit, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${outfit.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg">
                        {outfit.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-gray-900 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-gray-900 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
            {currentContent.viewAll}
          </Button>
        </div>
      </div>
    </section>
  )
}
