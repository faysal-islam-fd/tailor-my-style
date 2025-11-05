'use client'

import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useState, type ReactNode } from 'react'
import { ChevronRight, User, Users, Baby, Heart } from 'lucide-react'

interface SubCategory {
  name: string
  href: string
  icon: string
}

interface Category {
  name: string
  slug: string
  icon: ReactNode
  color: string
  gradient: string
  image: string
  subcategories: SubCategory[]
}

const categories: Category[] = [
  {
    name: 'Men',
    slug: 'men',
    icon: <User className="w-8 h-8" />,
    color: 'from-blue-600 to-blue-400',
    gradient: 'from-blue-500/20 to-purple-500/20',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800',
    subcategories: [
      { name: 'Suits', href: '/category/men/suits', icon: '👔' },
      { name: 'Shirts', href: '/category/men/shirts', icon: '👕' },
      { name: 'Pants', href: '/category/men/pants', icon: '👖' },
      { name: 'Blazers', href: '/category/men/blazers', icon: '🧥' },
      { name: 'Coats', href: '/category/men/coats', icon: '🧥' },
      { name: 'Vests', href: '/category/men/vests', icon: '🦺' },
    ]
  },
  {
    name: 'Women',
    slug: 'women',
    icon: <Users className="w-8 h-8" />,
    color: 'from-pink-600 to-rose-400',
    gradient: 'from-pink-500/20 to-rose-500/20',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
    subcategories: [
      { name: 'Dresses', href: '/category/women/dresses', icon: '👗' },
      { name: 'Blouses', href: '/category/women/blouses', icon: '👚' },
      { name: 'Skirts', href: '/category/women/skirts', icon: '🩱' },
      { name: 'Pants', href: '/category/women/pants', icon: '👖' },
      { name: 'Blazers', href: '/category/women/blazers', icon: '🧥' },
      { name: 'Coats', href: '/category/women/coats', icon: '🧥' },
    ]
  },
  {
    name: 'Older',
    slug: 'older',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-amber-600 to-orange-400',
    gradient: 'from-amber-500/20 to-orange-500/20',
    image: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=800',
    subcategories: [
      { name: 'Comfortable Shirts', href: '/category/older/comfortable-shirts', icon: '👕' },
      { name: 'Easy Pants', href: '/category/older/easy-pants', icon: '👖' },
      { name: 'Cardigans', href: '/category/older/cardigans', icon: '🧶' },
      { name: 'Sweaters', href: '/category/older/sweaters', icon: '🧥' },
      { name: 'Jackets', href: '/category/older/jackets', icon: '🧥' },
    ]
  },
  {
    name: 'Children',
    slug: 'children',
    icon: <Baby className="w-8 h-8" />,
    color: 'from-green-600 to-emerald-400',
    gradient: 'from-green-500/20 to-emerald-500/20',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    subcategories: [
      { name: 'T-Shirts', href: '/category/children/t-shirts', icon: '👕' },
      { name: 'Shorts', href: '/category/children/shorts', icon: '🩳' },
      { name: 'Dresses', href: '/category/children/dresses', icon: '👗' },
      { name: 'Pants', href: '/category/children/pants', icon: '👖' },
      { name: 'Hoodies', href: '/category/children/hoodies', icon: '🧥' },
    ]
  }
]

export default function MainCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Shop by Category</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Tailored for Everyone
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections designed specifically for every member of your family
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card
              key={category.slug}
              className="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 border-transparent hover:border-primary/30"
              onMouseEnter={() => setHoveredCategory(category.slug)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} backdrop-blur-sm`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/70" />
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[400px] flex flex-col">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                    <div className={`h-1 w-0 bg-gradient-to-r ${category.color} rounded-full group-hover:w-full transition-all duration-500 mt-2`} />
                  </div>
                </div>

                {/* Subcategories */}
                <div className="flex-1 space-y-2 mt-4">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Explore Collections
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {category.subcategories.map((subcat, index) => (
                      <Link
                        key={index}
                        href={subcat.href}
                        className={`
                          group/item flex items-center gap-2 p-3 rounded-lg 
                          bg-background/60 backdrop-blur-sm border border-border/50
                          hover:bg-primary/10 hover:border-primary/50
                          transition-all duration-300
                          ${hoveredCategory === category.slug ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-80'}
                        `}
                        style={{ 
                          transitionDelay: `${index * 50}ms` 
                        }}
                      >
                        <span className="text-2xl group-hover/item:scale-125 transition-transform duration-300">
                          {subcat.icon}
                        </span>
                        <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                          {subcat.name}
                        </span>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* View All Link */}
                <Link
                  href={`/category/${category.slug}`}
                  className={`
                    mt-6 flex items-center justify-center gap-2 py-3 px-6 rounded-full
                    bg-gradient-to-r ${category.color} text-white font-semibold
                    hover:shadow-lg hover:scale-105 transition-all duration-300
                    group-hover:gap-4
                  `}
                >
                  View All {category.name}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


