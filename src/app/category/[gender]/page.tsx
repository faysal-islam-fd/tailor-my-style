import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface PageProps {
  params: {
    gender: string
  }
}

const genderCategories = {
  men: {
    name: 'Men',
    description: 'Discover our premium collection of tailored menswear',
    categories: [
      { name: 'Suits', slug: 'suits', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', icon: '👔' },
      { name: 'Shirts', slug: 'shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400', icon: '👕' },
      { name: 'Pants', slug: 'pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', icon: '👖' },
      { name: 'Blazers', slug: 'blazers', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400', icon: '🧥' },
      { name: 'Coats', slug: 'coats', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', icon: '🧥' },
      { name: 'Vests', slug: 'vests', image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400', icon: '🦺' },
    ]
  },
  women: {
    name: 'Women',
    description: 'Elegant and sophisticated tailored fashion for women',
    categories: [
      { name: 'Dresses', slug: 'dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', icon: '👗' },
      { name: 'Blouses', slug: 'blouses', image: 'https://images.unsplash.com/photo-1564257577661-6b77d3f6c878?w=400', icon: '👚' },
      { name: 'Skirts', slug: 'skirts', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400', icon: '🩱' },
      { name: 'Pants', slug: 'pants', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', icon: '👖' },
      { name: 'Blazers', slug: 'blazers', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', icon: '🧥' },
      { name: 'Coats', slug: 'coats', image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400', icon: '🧥' },
    ]
  },
  older: {
    name: 'Older',
    description: 'Comfortable and stylish clothing designed for mature adults',
    categories: [
      { name: 'Comfortable Shirts', slug: 'comfortable-shirts', image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400', icon: '👕' },
      { name: 'Easy Pants', slug: 'easy-pants', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400', icon: '👖' },
      { name: 'Cardigans', slug: 'cardigans', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400', icon: '🧶' },
      { name: 'Sweaters', slug: 'sweaters', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400', icon: '🧥' },
      { name: 'Jackets', slug: 'jackets', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400', icon: '🧥' },
    ]
  },
  children: {
    name: 'Children',
    description: 'Fun and comfortable clothing for kids of all ages',
    categories: [
      { name: 'T-Shirts', slug: 't-shirts', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400', icon: '👕' },
      { name: 'Shorts', slug: 'shorts', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', icon: '🩳' },
      { name: 'Dresses', slug: 'dresses', image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400', icon: '👗' },
      { name: 'Pants', slug: 'pants', image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400', icon: '👖' },
      { name: 'Hoodies', slug: 'hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400', icon: '🧥' },
    ]
  }
}

export default function GenderCategoryPage({ params }: PageProps) {
  const { gender } = params
  const genderData = genderCategories[gender as keyof typeof genderCategories]
  
  if (!genderData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium capitalize">{genderData.name}</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background border-b overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {genderData.name}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {genderData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Shop by Category</h2>
          <p className="text-muted-foreground">Choose from our carefully curated collections</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {genderData.categories.map((category, index) => (
            <Link key={index} href={`/category/${gender}/${category.slug}`}>
              <Card className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50 h-full">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${category.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent group-hover:from-background/90 transition-all duration-500"></div>
                  </div>
                  
                  {/* Category Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">Shop Now</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


