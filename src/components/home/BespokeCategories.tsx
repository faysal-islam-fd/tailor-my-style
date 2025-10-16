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
    <section className="py-24 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      {/* Premium background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            {currentContent.title}
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {currentContent.categories.map((category, index) => (
            <Link key={index} href={category.href}>
              <Card className="group overflow-hidden cursor-pointer hover:shadow-elegant-hover transition-all duration-500 shadow-elegant border border-primary/20 hover:border-primary/50 relative">
                {/* Premium corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full z-10"></div>
                
                <div className="aspect-[3/4] relative overflow-hidden">
                  {/* Category Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${category.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent group-hover:from-background/90 transition-all duration-500"></div>
                  </div>
                  
                  {/* Category Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-foreground text-lg md:text-xl font-bold text-center group-hover:text-primary group-hover:scale-105 transition-all duration-300">
                      {category.name}
                    </h3>
                    <div className="h-[2px] w-0 bg-gradient-to-r from-primary to-accent mx-auto mt-3 group-hover:w-16 transition-all duration-300 rounded-full"></div>
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
