import { Card } from '@/components/ui/card'
import Link from 'next/link'

interface BespokeCategoriesProps {
  language?: 'en' | 'bn'
}

export default function BespokeCategories({ language = 'en' }: BespokeCategoriesProps) {
  const content = {
    en: {
      title: 'Bespoke from head to toe',
      categories: [
        { name: 'Suits', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', href: '/category/suits' },
        { name: 'Shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400', href: '/category/shirts' },
        { name: 'Blazers', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400', href: '/category/blazers' },
        { name: 'Pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', href: '/category/pants' },
        { name: 'Coats', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', href: '/category/coats' }
      ]
    },
    bn: {
      title: 'মাথা থেকে পা পর্যন্ত বেসপোক',
      categories: [
        { name: 'স্যুট', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', href: '/category/suits' },
        { name: 'শার্ট', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400', href: '/category/shirts' },
        { name: 'ব্লেজার', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400', href: '/category/blazers' },
        { name: 'প্যান্ট', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', href: '/category/pants' },
        { name: 'কোট', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', href: '/category/coats' }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {currentContent.categories.map((category, index) => (
            <Link key={index} href={category.href}>
              <Card className="group overflow-hidden cursor-pointer hover:shadow-elegant-hover transition-all duration-500 border-0 shadow-elegant">
                <div className="aspect-[3/4] relative overflow-hidden">
                  {/* Category Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${category.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                  </div>
                  
                  {/* Category Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg md:text-xl font-bold text-center group-hover:scale-110 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <div className="h-0.5 w-0 bg-white mx-auto mt-2 group-hover:w-16 transition-all duration-300"></div>
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
