import { Card } from '@/components/ui/card'
import Link from 'next/link'

interface TrendingCategoriesProps {
  language?: 'en' | 'bn'
}

export default function TrendingCategories({ language = 'en' }: TrendingCategoriesProps) {
  const content = {
    en: {
      title: 'Trending Categories',
      categories: [
        { name: 'POLO', image: '/api/placeholder/300/400', href: '/category/polo' },
        { name: 'SHIRT', image: '/api/placeholder/300/400', href: '/category/shirt' },
        { name: 'SALWAR SUIT', image: '/api/placeholder/300/400', href: '/category/salwar' },
        { name: 'KIDS', image: '/api/placeholder/300/400', href: '/category/kids' }
      ]
    },
    bn: {
      title: 'ট্রেন্ডিং ক্যাটাগরি',
      categories: [
        { name: 'পোলো', image: '/api/placeholder/300/400', href: '/category/polo' },
        { name: 'শার্ট', image: '/api/placeholder/300/400', href: '/category/shirt' },
        { name: 'সালোয়ার স্যুট', image: '/api/placeholder/300/400', href: '/category/salwar' },
        { name: 'কিডস', image: '/api/placeholder/300/400', href: '/category/kids' }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-10">
          {currentContent.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {currentContent.categories.map((category, index) => (
            <Link key={index} href={category.href}>
              <Card className="group overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-150 border border-border">
                <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Placeholder for category image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">
                        {index === 0 && '👕'}
                        {index === 1 && '👔'}
                        {index === 2 && '👗'}
                        {index === 3 && '👶'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 py-4">
                    <h3 className="text-center text-sm md:text-base font-bold text-gray-900 uppercase tracking-wide group-hover:text-primary transition-colors duration-150">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
