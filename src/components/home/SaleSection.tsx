'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'

interface SaleProduct {
  id: string
  name: string
  nameBn: string
  originalPrice: number
  salePrice: number
  discount: number
  image: string
  category: string
}

interface SaleSectionProps {
  language?: 'en' | 'bn'
}

export default function SaleSection({ language = 'en' }: SaleSectionProps) {
  const [wishlist, setWishlist] = useState<string[]>([])

  const content = {
    en: {
      title: '⚡ Sale',
      seeAll: 'See All',
      products: [
        {
          id: '1',
          name: 'MENS CASUAL SHIRT 01B',
          nameBn: 'পুরুষদের ক্যাজুয়াল শার্ট ০১বি',
          originalPrice: 1200,
          salePrice: 600,
          discount: 50,
          image: '/api/placeholder/300/400',
          category: 'Shirt'
        },
        {
          id: '2',
          name: 'MENS CASUAL SHIRT 07B',
          nameBn: 'পুরুষদের ক্যাজুয়াল শার্ট ০৭বি',
          originalPrice: 1400,
          salePrice: 700,
          discount: 50,
          image: '/api/placeholder/300/400',
          category: 'Shirt'
        },
        {
          id: '3',
          name: 'GIRLS WOVEN PARTY DRESS',
          nameBn: 'মেয়েদের পার্টি ড্রেস',
          originalPrice: 2500,
          salePrice: 1250,
          discount: 50,
          image: '/api/placeholder/300/400',
          category: 'Dress'
        },
        {
          id: '4',
          name: 'BOYS FASHION SNEAKER',
          nameBn: 'ছেলেদের ফ্যাশন স্নিকার',
          originalPrice: 1800,
          salePrice: 900,
          discount: 50,
          image: '/api/placeholder/300/400',
          category: 'Footwear'
        },
        {
          id: '5',
          name: 'BOYS FASHION SNEAKER',
          nameBn: 'ছেলেদের ফ্যাশন স্নিকার',
          originalPrice: 1600,
          salePrice: 800,
          discount: 50,
          image: '/api/placeholder/300/400',
          category: 'Footwear'
        }
      ]
    },
    bn: {
      title: '⚡ সেল',
      seeAll: 'সব দেখুন',
      products: [
        {
          id: '1',
          name: 'MENS CASUAL SHIRT 01B',
          nameBn: 'পুরুষদের ক্যাজুয়াল শার্ট ০১বি',
          originalPrice: 1200,
          salePrice: 600,
          discount: 50,
          image: '/api/placeholder/300/400',
          category: 'শার্ট'
        },
        {
          id: '2',
          name: 'MENS CASUAL SHIRT 07B',
          nameBn: 'পুরুষদের ক্যাজুয়াল শার্ট ০৭বি',
          originalPrice: 1400,
          salePrice: 700,
          discount: 50,
          image: '/api/placeholder/300/400',
          category: 'শার্ট'
        },
        {
          id: '3',
          name: 'GIRLS WOVEN PARTY DRESS',
          nameBn: 'মেয়েদের পার্টি ড্রেস',
          originalPrice: 2500,
          salePrice: 1250,
          discount: 50,
          image: '/api/placeholder/300/400',
          category: 'ড্রেস'
        },
        {
          id: '4',
          name: 'BOYS FASHION SNEAKER',
          nameBn: 'ছেলেদের ফ্যাশন স্নিকার',
          originalPrice: 1800,
          salePrice: 900,
          discount: 50,
          image: '/api/placeholder/300/400',
          category: 'জুতা'
        },
        {
          id: '5',
          name: 'BOYS FASHION SNEAKER',
          nameBn: 'ছেলেদের ফ্যাশন স্নিকার',
          originalPrice: 1600,
          salePrice: 800,
          discount: 50,
          image: '/api/placeholder/300/400',
          category: 'জুতা'
        }
      ]
    }
  }

  const currentContent = content[language]

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {currentContent.title}
          </h2>
          <Link href="/sale">
            <Button variant="outline" className="font-semibold">
              {currentContent.seeAll} →
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {currentContent.products.map((product, index) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {/* Discount Badge */}
                <div className="absolute top-2 left-2 z-10">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <p className="text-xs md:text-sm font-bold leading-none">{product.discount}%</p>
                      <p className="text-[8px] md:text-[10px] font-semibold">OFF</p>
                    </div>
                  </div>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-2 right-2 z-10 bg-secondary border border-primary/30 rounded-full p-2 shadow-elegant hover:scale-110 hover:bg-primary transition-all duration-300"
                >
                  {wishlist.includes(product.id) ? (
                    <HeartIconSolid className="h-5 w-5 text-primary" />
                  ) : (
                    <HeartIcon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  )}
                </button>

                {/* Product Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {index < 2 && '👔'}
                      {index === 2 && '👗'}
                      {index >= 3 && '👟'}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-3 md:p-4">
                <h3 className="text-xs md:text-sm font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                  {language === 'en' ? product.name : product.nameBn}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm md:text-base font-bold text-red-600">
                    ৳ {product.salePrice.toLocaleString()}
                  </span>
                  <span className="text-xs md:text-sm text-gray-500 line-through">
                    ৳ {product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
