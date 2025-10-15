import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface HighTechTailoringProps {
  language?: 'en' | 'bn'
}

export default function HighTechTailoring({ language = 'en' }: HighTechTailoringProps) {
  const content = {
    en: {
      title: 'High-tech tailoring for every body',
      description: 'Create a style that is uniquely yours with our 3D design tool. Choose from hundreds of fabrics, customize every detail, and see your creation come to life in real-time. Our advanced technology ensures a perfect fit every time.',
      cta: 'Start Designing'
    },
    bn: {
      title: 'প্রতিটি শরীরের জন্য হাই-টেক টেইলারিং',
      description: 'আমাদের 3D ডিজাইন টুল দিয়ে একটি স্টাইল তৈরি করুন যা অনন্যভাবে আপনার। শত শত কাপড় থেকে বেছে নিন, প্রতিটি বিবরণ কাস্টমাইজ করুন এবং আপনার সৃষ্টি রিয়েল-টাইমে জীবন্ত হতে দেখুন।',
      cta: 'ডিজাইন শুরু করুন'
    }
  }

  const currentContent = content[language]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold mb-6">
              Technology Meets Tradition
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {currentContent.title}
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {currentContent.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow" asChild>
                <Link href="/design">
                  {currentContent.cta}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2" asChild>
                <Link href="/products">
                  View Products
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - 3D Visualization Mockup */}
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-elegant-hover">
              {/* Phone/Tablet Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="p-8">
                  {/* Suit Visualization */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-9xl mb-4 filter drop-shadow-lg">🤵</div>
                        <div className="space-y-2">
                          <div className="h-3 w-40 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto animate-pulse"></div>
                          <div className="h-3 w-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Measurement Lines */}
                    <div className="absolute top-1/4 left-4 right-4">
                      <div className="border-t-2 border-dashed border-primary"></div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs font-bold text-primary bg-white px-3 py-1.5 rounded-full shadow-md">42cm</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Customization Options */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-3 text-center hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-2 shadow-md"></div>
                      <p className="text-xs font-semibold text-gray-700">Fabric</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-3 text-center hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-2 shadow-md"></div>
                      <p className="text-xs font-semibold text-gray-700">Style</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-3 text-center hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-2 shadow-md"></div>
                      <p className="text-xs font-semibold text-gray-700">Fit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-full shadow-xl font-bold text-lg animate-bounce">
              3D Design
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
