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
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Premium background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            {currentContent.title}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-primary" />
              ))}
            </div>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-muted-foreground mt-4 text-sm uppercase tracking-wider">Premium Testimonials from Our Elite Clientele</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentContent.reviews.map((review, index) => (
            <Card key={index} className="bg-gradient-to-br from-secondary via-secondary to-muted text-foreground overflow-hidden hover:shadow-elegant-hover transition-all duration-500 border border-primary/20 hover:border-primary/40 group relative">
              {/* Premium corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
              
              <div className="relative">
                {/* Customer Photo */}
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                      {index % 2 === 0 ? '👗' : '👔'}
                    </div>
                  </div>
                  
                  {/* Premium overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                  
                  {/* Review Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-br from-card to-secondary border border-primary/30 rounded-lg p-4 shadow-elegant backdrop-blur-sm group-hover:border-primary transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {language === 'en' ? 'Elite Review' : 'এলিট রিভিউ'}
                      </span>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <StarIcon key={i} className="h-3.5 w-3.5 text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>
                </div>
              </div>

              <CardContent className="p-5 bg-gradient-to-b from-transparent to-card/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-foreground mb-1">{review.name}</h3>
                    <p className="text-xs text-primary font-medium">{review.product}</p>
                  </div>
                  <div className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
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
