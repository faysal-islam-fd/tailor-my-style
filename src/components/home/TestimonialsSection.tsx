'use client'

import { Card, CardContent } from '@/components/ui/card'
import { StarIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/button'

interface TestimonialsSectionProps {
  language?: 'en' | 'bn'
}

export default function TestimonialsSection({ language = 'en' }: TestimonialsSectionProps) {
  const content = {
    en: {
      title: 'Reviewed by you',
      testimonials: [
        {
          rating: 5,
          text: 'I have been using this service for over 3 years now and I am extremely satisfied with the quality and fit of the garments. Highly recommended!',
          author: 'John D.',
          date: '2 weeks ago'
        },
        {
          rating: 5,
          text: 'Amazing quality and perfect fit! The customization options are endless and the customer service is top-notch.',
          author: 'Sarah M.',
          date: '1 month ago'
        },
        {
          rating: 5,
          text: 'Best tailoring service I have ever used. The 3D design tool makes it so easy to visualize the final product.',
          author: 'Michael R.',
          date: '3 weeks ago'
        }
      ],
      viewMore: 'View More Reviews'
    },
    bn: {
      title: 'আপনার দ্বারা পর্যালোচনা',
      testimonials: [
        {
          rating: 5,
          text: 'আমি 3 বছরেরও বেশি সময় ধরে এই পরিষেবাটি ব্যবহার করছি এবং আমি পোশাকের গুণমান এবং ফিট নিয়ে অত্যন্ত সন্তুষ্ট। অত্যন্ত সুপারিশ!',
          author: 'জন ডি.',
          date: '২ সপ্তাহ আগে'
        },
        {
          rating: 5,
          text: 'আশ্চর্যজনক মান এবং নিখুঁত ফিট! কাস্টমাইজেশন অপশন অসীম এবং গ্রাহক সেবা শীর্ষস্থানীয়।',
          author: 'সারাহ এম.',
          date: '১ মাস আগে'
        },
        {
          rating: 5,
          text: 'আমার ব্যবহার করা সেরা টেইলারিং সেবা। 3D ডিজাইন টুল চূড়ান্ত পণ্য কল্পনা করা খুব সহজ করে তোলে।',
          author: 'মাইকেল আর.',
          date: '৩ সপ্তাহ আগে'
        }
      ],
      viewMore: 'আরও পর্যালোচনা দেখুন'
    }
  }

  const currentContent = content[language]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
            Customer Love
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {currentContent.testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-elegant-hover transition-all duration-300 border-0 shadow-elegant hover:scale-105 bg-white"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-6 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-yellow-400 drop-shadow-sm" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t-2 border-gray-100 pt-5">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-2 shadow-md hover:shadow-lg">
            {currentContent.viewMore}
          </Button>
        </div>
      </div>
    </section>
  )
}
