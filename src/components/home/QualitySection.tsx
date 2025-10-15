import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface QualitySectionProps {
  language?: 'en' | 'bn'
}

export default function QualitySection({ language = 'en' }: QualitySectionProps) {
  const content = {
    en: {
      title: 'Looks that last',
      description: 'We believe that quality should never be sacrificed for style. All our garments are crafted with premium materials and expert craftsmanship. Each piece is designed to withstand the test of time, both in durability and timeless style.',
      cta: 'Shop Now'
    },
    bn: {
      title: 'যে চেহারা স্থায়ী হয়',
      description: 'আমরা বিশ্বাস করি যে স্টাইলের জন্য গুণমান কখনও ত্যাগ করা উচিত নয়। আমাদের সমস্ত পোশাক প্রিমিয়াম উপকরণ এবং বিশেষজ্ঞ কারুশিল্প দিয়ে তৈরি।',
      cta: 'এখন কিনুন'
    }
  }

  const currentContent = content[language]

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              Premium Quality
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {currentContent.title}
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {currentContent.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow" asChild>
                <Link href="/products">
                  {currentContent.cta}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2" asChild>
                <Link href="/design">
                  Start Designing
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant-hover group">
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>
            </div>
            {/* Quality Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-8 py-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-gray-600 font-semibold">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
