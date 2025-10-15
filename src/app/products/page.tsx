'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { FunnelIcon, Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline'

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [wishlist, setWishlist] = useState<string[]>([])
  const [language, setLanguage] = useState<'en' | 'bn'>('en')

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: `product-${i + 1}`,
    name: `Custom ${['Shirt', 'Suit', 'Blazer', 'Trousers', 'Kurta', 'Sherwani'][i % 6]}`,
    nameBn: ['শার্ট', 'স্যুট', 'ব্লেজার', 'ট্রাউজার', 'কুর্তা', 'শেরওয়ানি'][i % 6],
    price: [800, 8000, 4000, 1200, 1500, 6000][i % 6],
    originalPrice: [1200, 12000, 6000, 1800, 2200, 9000][i % 6],
    discount: 33,
    rating: 4.5,
    reviews: Math.floor(Math.random() * 100) + 10,
    inStock: true
  }))

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {language === 'en' ? 'All Products' : 'সব পণ্য'}
            </h1>
            <Button
              variant="outline"
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </Button>
          </div>
          
          {/* Filters and View Toggle */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <FunnelIcon className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Filters' : 'ফিল্টার'}
              </Button>
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option>{language === 'en' ? 'Sort by: Featured' : 'সাজান: ফিচার্ড'}</option>
                <option>{language === 'en' ? 'Price: Low to High' : 'দাম: কম থেকে বেশি'}</option>
                <option>{language === 'en' ? 'Price: High to Low' : 'দাম: বেশি থেকে কম'}</option>
                <option>{language === 'en' ? 'Newest' : 'নতুন'}</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Squares2X2Icon className="h-5 w-5" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <ListBulletIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {products.map((product, index) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className={`${viewMode === 'grid' ? 'block' : 'flex'}`}>
                {/* Product Image */}
                <div className={`relative ${
                  viewMode === 'grid' ? 'aspect-[3/4]' : 'w-48 aspect-square'
                } overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200`}>
                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <div className="absolute top-2 left-2 z-10">
                      <Badge className="bg-red-600 text-white">
                        -{product.discount}%
                      </Badge>
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
                  >
                    {wishlist.includes(product.id) ? (
                      <HeartIconSolid className="h-5 w-5 text-red-500" />
                    ) : (
                      <HeartIcon className="h-5 w-5 text-gray-600" />
                    )}
                  </button>

                  {/* Product Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">
                        {index % 6 === 0 && '👔'}
                        {index % 6 === 1 && '🤵'}
                        {index % 6 === 2 && '🧥'}
                        {index % 6 === 3 && '👖'}
                        {index % 6 === 4 && '👘'}
                        {index % 6 === 5 && '🎩'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                    {language === 'en' ? product.name : `কাস্টম ${product.nameBn}`}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg font-bold text-primary">
                      ৳{product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ৳{product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  
                  {product.inStock ? (
                    <Badge variant="secondary" className="mb-3">
                      {language === 'en' ? 'In Stock' : 'স্টকে আছে'}
                    </Badge>
                  ) : (
                    <Badge variant="destructive" className="mb-3">
                      {language === 'en' ? 'Out of Stock' : 'স্টকে নেই'}
                    </Badge>
                  )}
                  
                  <Button className="w-full" size="sm">
                    {language === 'en' ? 'Add to Cart' : 'কার্টে যোগ করুন'}
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              {language === 'en' ? 'Previous' : 'পূর্ববর্তী'}
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? 'default' : 'outline'}
                size="sm"
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" size="sm">
              {language === 'en' ? 'Next' : 'পরবর্তী'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
