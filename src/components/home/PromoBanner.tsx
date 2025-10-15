import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface PromoBannerProps {
  language?: 'en' | 'bn'
}

export default function PromoBanner({ language = 'en' }: PromoBannerProps) {
  const content = {
    en: {
      heading: 'SHOP',
      subheading: '4000+ BDT',
      description: 'From www.tailormystyle.com',
      cta: 'GET FREE HOME DELIVERY!',
      delivery: 'HOME DELIVERY',
      allOver: 'ALL OVER BANGLADESH'
    },
    bn: {
      heading: 'কিনুন',
      subheading: '৪০০০+ টাকা',
      description: 'www.tailormystyle.com থেকে',
      cta: 'বিনামূল্যে হোম ডেলিভারি পান!',
      delivery: 'হোম ডেলিভারি',
      allOver: 'সমগ্র বাংলাদেশে'
    }
  }

  const currentContent = content[language]

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Promo Banner */}
        <div className="relative bg-gradient-to-r from-red-50 to-blue-50 rounded-lg overflow-hidden mb-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left Side - Illustration */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white rounded-lg p-6 shadow-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl">📱</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded"></div>
                    <div className="h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded"></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-4xl">🛍️</span>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center md:text-left">
              <h2 className="text-6xl md:text-7xl font-black text-red-600 mb-2">
                {currentContent.heading}
              </h2>
              <p className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {currentContent.subheading}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                {currentContent.description}
              </p>
              <div className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-xl font-bold shadow-lg transform hover:scale-105 transition-transform">
                {currentContent.cta}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Banner Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border-2 border-red-500 rounded-lg p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">🚚</div>
              <div>
                <p className="text-sm font-semibold text-red-600 uppercase">
                  {currentContent.delivery}
                </p>
                <p className="text-xs text-gray-600">{currentContent.allOver}</p>
              </div>
            </div>
            <div className="text-2xl font-black text-gray-800">sailor</div>
          </div>

          <div className="bg-white border-2 border-red-500 rounded-lg p-4 flex items-center justify-between shadow-md">
            <div className="text-2xl font-black text-gray-800">sailor</div>
            <div className="flex items-center space-x-4">
              <div className="text-4xl">🛍️</div>
              <div className="text-right">
                <p className="text-sm font-semibold text-red-600 uppercase">
                  {currentContent.heading}
                </p>
                <p className="text-xs text-gray-600">{currentContent.subheading}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
