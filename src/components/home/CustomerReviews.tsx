'use client'

import { Card, CardContent } from '@/components/ui/card'
import { StarIcon } from '@heroicons/react/24/solid'

interface CustomerReviewsProps {
  language?: 'en' | 'bn'
}

export default function CustomerReviews({ language = 'en' }: CustomerReviewsProps) {
  const content = {
    en: {
      title: 'Customer Reviews',
      reviews: [
        {
          name: 'Ayesha Rahman',
          rating: 5,
          comment: 'Excellent quality and perfect fit! The tailoring is superb.',
          image: '/api/placeholder/300/400',
          product: 'Custom Kurta'
        },
        {
          name: 'Karim Ahmed',
          rating: 5,
          comment: 'Best custom suit I\'ve ever had. Highly recommend!',
          image: '/api/placeholder/300/400',
          product: 'Bespoke Suit'
        },
        {
          name: 'Nadia Islam',
          rating: 5,
          comment: 'Amazing service and beautiful fabric selection.',
          image: '/api/placeholder/300/400',
          product: 'Designer Dress'
        },
        {
          name: 'Rafiq Hassan',
          rating: 5,
          comment: 'Professional tailors and quick delivery. Very satisfied!',
          image: '/api/placeholder/300/400',
          product: 'Custom Shirt'
        }
      ]
    },
    bn: {
      title: 'গ্রাহক পর্যালোচনা',
      reviews: [
        {
          name: 'আয়েশা রহমান',
          rating: 5,
          comment: 'চমৎকার মান এবং নিখুঁত ফিট! দর্জির কাজ অসাধারণ।',
          image: '/api/placeholder/300/400',
          product: 'কাস্টম কুর্তা'
        },
        {
          name: 'করিম আহমেদ',
          rating: 5,
          comment: 'আমার সেরা কাস্টম স্যুট। অত্যন্ত সুপারিশ করছি!',
          image: '/api/placeholder/300/400',
          product: 'বেসপোক স্যুট'
        },
        {
          name: 'নাদিয়া ইসলাম',
          rating: 5,
          comment: 'অসাধারণ সেবা এবং সুন্দর কাপড়ের নির্বাচন।',
          image: '/api/placeholder/300/400',
          product: 'ডিজাইনার ড্রেস'
        },
        {
          name: 'রফিক হাসান',
          rating: 5,
          comment: 'পেশাদার দর্জি এবং দ্রুত ডেলিভারি। খুবই সন্তুষ্ট!',
          image: '/api/placeholder/300/400',
          product: 'কাস্টম শার্ট'
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {currentContent.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentContent.reviews.map((review, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                {/* Customer Photo */}
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">
                      {index % 2 === 0 ? '👗' : '👔'}
                    </div>
                  </div>
                  
                  {/* Review Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-900 uppercase">
                        {language === 'en' ? 'Your Voice' : 'আপনার মতামত'}
                      </span>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <StarIcon key={i} className="h-3 w-3 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-700 line-clamp-3">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm">{review.name}</h3>
                    <p className="text-xs text-gray-400">{review.product}</p>
                  </div>
                  <div className="text-2xl font-black text-white" style={{ fontFamily: 'serif' }}>
                    sailor
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
