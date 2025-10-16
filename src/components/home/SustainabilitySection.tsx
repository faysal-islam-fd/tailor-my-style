import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface SustainabilitySectionProps {
  language?: 'en' | 'bn'
}

export default function SustainabilitySection({ language = 'en' }: SustainabilitySectionProps) {
  const content = {
    en: {
      title: 'Our planet appreciates it',
      description: 'We believe in sustainable fashion. Every garment is made to order, reducing waste and environmental impact. Our fabrics are ethically sourced, and our production process is designed to minimize our carbon footprint.',
      cta: 'Learn More'
    },
    bn: {
      title: 'আমাদের গ্রহ এটি প্রশংসা করে',
      description: 'আমরা টেকসই ফ্যাশনে বিশ্বাস করি। প্রতিটি পোশাক অর্ডার অনুযায়ী তৈরি করা হয়, বর্জ্য এবং পরিবেশগত প্রভাব হ্রাস করে। আমাদের কাপড় নৈতিকভাবে উৎসারিত।',
      cta: 'আরও জানুন'
    }
  }

  const currentContent = content[language]

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant-hover group">
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              </div>
              {/* Sustainability Badge */}
              <div className="absolute top-6 right-6 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">🌱</div>
                  <span className="font-bold text-green-600">Eco-Friendly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              Sustainable Fashion
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-6 leading-tight">
              {currentContent.title}
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {currentContent.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg" className="border-2 shadow-md hover:shadow-lg" asChild>
                <Link href="/sustainability">
                  {currentContent.cta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
