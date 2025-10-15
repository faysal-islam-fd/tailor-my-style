import { Card } from '@/components/ui/card'

interface BrandShowcaseProps {
  language?: 'en' | 'bn'
}

export default function BrandShowcase({ language = 'en' }: BrandShowcaseProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left - Brand Display */}
          <div className="flex justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
                sailor
              </h2>
              <div className="w-32 h-1 bg-red-600 mx-auto lg:mx-0"></div>
            </div>
          </div>

          {/* Right - Models/Products */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="aspect-[3/4] bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-6xl">👕</span>
                    </div>
                    <div className="aspect-[3/4] bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-6xl">👔</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
