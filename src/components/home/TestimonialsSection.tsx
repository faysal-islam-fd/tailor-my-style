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
    <section className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      {/* Premium background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            Customer Love
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            {currentContent.title}
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {currentContent.testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-elegant-hover transition-all duration-500 shadow-elegant hover:scale-[1.02] bg-gradient-to-br from-card to-secondary border-primary/20 hover:border-primary/40 relative group"
            >
              {/* Premium corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-6 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-primary drop-shadow-sm" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t-2 border-primary/20 pt-5">
                  <p className="font-bold text-foreground text-lg">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            {currentContent.viewMore}
          </Button>
        </div>
      </div>
    </section>
  )
}
