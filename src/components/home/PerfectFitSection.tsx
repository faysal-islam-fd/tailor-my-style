import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface PerfectFitSectionProps {
  language?: 'en' | 'bn'
}

export default function PerfectFitSection({ language = 'en' }: PerfectFitSectionProps) {
  const content = {
    en: {
      title: 'Perfect fit garments to your specifications',
      description: 'Every body is unique, and your clothes should be too. Our advanced measurement system and expert tailors ensure that every garment fits you perfectly. Upload your measurements once and reuse them for all future orders.',
      cta: 'Get Measured',
      images: [
        'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400',
        'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400',
        'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400',
        'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400'
      ]
    },
    bn: {
      title: 'আপনার স্পেসিফিকেশন অনুযায়ী নিখুঁত ফিট পোশাক',
      description: 'প্রতিটি শরীর অনন্য, এবং আপনার কাপড়ও হওয়া উচিত। আমাদের উন্নত পরিমাপ সিস্টেম এবং বিশেষজ্ঞ দর্জিরা নিশ্চিত করে যে প্রতিটি পোশাক আপনার জন্য নিখুঁতভাবে ফিট করে।',
      cta: 'পরিমাপ নিন',
      images: [
        'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400',
        'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400',
        'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400',
        'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400'
      ]
    }
  }

  const currentContent = content[language]

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {currentContent.images.map((image, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl overflow-hidden shadow-elegant group ${
                  index === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 ring-2 ring-white/30 rounded-2xl group-hover:ring-white/50 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
              Perfect Fit Guarantee
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {currentContent.title}
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              {currentContent.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all" asChild>
                <Link href="/measurements">
                  {currentContent.cta}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-900" asChild>
                <Link href="/design">
                  Customize Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
