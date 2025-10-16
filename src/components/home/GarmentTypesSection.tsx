import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface GarmentTypesSectionProps {
  language?: 'en' | 'bn'
}

export default function GarmentTypesSection({ language = 'en' }: GarmentTypesSectionProps) {
  const content = {
    en: {
      title: 'What Would You Like to Design?',
      subtitle: 'Choose from our wide range of customizable garments',
      garments: [
        {
          name: 'Shirts',
          nameBn: 'শার্ট',
          description: 'Custom formal and casual shirts',
          descriptionBn: 'কাস্টম ফরমাল এবং ক্যাজুয়াল শার্ট',
          price: 'From ৳800',
          image: '/api/placeholder/300/400',
          href: '/design/shirt'
        },
        {
          name: 'Suits',
          nameBn: 'স্যুট',
          description: 'Bespoke business and formal suits',
          descriptionBn: 'বেসপোক ব্যবসায়িক এবং ফরমাল স্যুট',
          price: 'From ৳8,000',
          image: '/api/placeholder/300/400',
          href: '/design/suit'
        },
        {
          name: 'Blazers',
          nameBn: 'ব্লেজার',
          description: 'Smart blazers for any occasion',
          descriptionBn: 'যেকোনো উপলক্ষ্যে স্মার্ট ব্লেজার',
          price: 'From ৳4,000',
          image: '/api/placeholder/300/400',
          href: '/design/blazer'
        },
        {
          name: 'Trousers',
          nameBn: 'ট্রাউজার',
          description: 'Perfect fitting trousers',
          descriptionBn: 'নিখুঁত ফিটিং ট্রাউজার',
          price: 'From ৳1,200',
          image: '/api/placeholder/300/400',
          href: '/design/trousers'
        },
        {
          name: 'Kurta',
          nameBn: 'কুর্তা',
          description: 'Traditional and modern kurtas',
          descriptionBn: 'ঐতিহ্যবাহী এবং আধুনিক কুর্তা',
          price: 'From ৳1,500',
          image: '/api/placeholder/300/400',
          href: '/design/kurta'
        },
        {
          name: 'Sherwani',
          nameBn: 'শেরওয়ানি',
          description: 'Elegant sherwanis for special occasions',
          descriptionBn: 'বিশেষ উপলক্ষ্যে মার্জিত শেরওয়ানি',
          price: 'From ৳6,000',
          image: '/api/placeholder/300/400',
          href: '/design/sherwani'
        }
      ]
    },
    bn: {
      title: 'আপনি কী ডিজাইন করতে চান?',
      subtitle: 'আমাদের বিস্তৃত কাস্টমাইজযোগ্য পোশাক থেকে বেছে নিন',
      garments: [
        {
          name: 'Shirts',
          nameBn: 'শার্ট',
          description: 'Custom formal and casual shirts',
          descriptionBn: 'কাস্টম ফরমাল এবং ক্যাজুয়াল শার্ট',
          price: '৳৮০০ থেকে',
          image: '/api/placeholder/300/400',
          href: '/design/shirt'
        },
        {
          name: 'Suits',
          nameBn: 'স্যুট',
          description: 'Bespoke business and formal suits',
          descriptionBn: 'বেসপোক ব্যবসায়িক এবং ফরমাল স্যুট',
          price: '৳৮,০০০ থেকে',
          image: '/api/placeholder/300/400',
          href: '/design/suit'
        },
        {
          name: 'Blazers',
          nameBn: 'ব্লেজার',
          description: 'Smart blazers for any occasion',
          descriptionBn: 'যেকোনো উপলক্ষ্যে স্মার্ট ব্লেজার',
          price: '৳৪,০০০ থেকে',
          image: '/api/placeholder/300/400',
          href: '/design/blazer'
        },
        {
          name: 'Trousers',
          nameBn: 'ট্রাউজার',
          description: 'Perfect fitting trousers',
          descriptionBn: 'নিখুঁত ফিটিং ট্রাউজার',
          price: '৳১,২০০ থেকে',
          image: '/api/placeholder/300/400',
          href: '/design/trousers'
        },
        {
          name: 'Kurta',
          nameBn: 'কুর্তা',
          description: 'Traditional and modern kurtas',
          descriptionBn: 'ঐতিহ্যবাহী এবং আধুনিক কুর্তা',
          price: '৳১,৫০০ থেকে',
          image: '/api/placeholder/300/400',
          href: '/design/kurta'
        },
        {
          name: 'Sherwani',
          nameBn: 'শেরওয়ানি',
          description: 'Elegant sherwanis for special occasions',
          descriptionBn: 'বিশেষ উপলক্ষ্যে মার্জিত শেরওয়ানি',
          price: '৳৬,০০০ থেকে',
          image: '/api/placeholder/300/400',
          href: '/design/sherwani'
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.garments.map((garment, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                {/* Placeholder for garment image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {garment.name === 'Shirts' && '👔'}
                    {garment.name === 'Suits' && '🤵'}
                    {garment.name === 'Blazers' && '🧥'}
                    {garment.name === 'Trousers' && '👖'}
                    {garment.name === 'Kurta' && '👘'}
                    {garment.name === 'Sherwani' && '🎩'}
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button asChild className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Link href={garment.href}>
                      {language === 'en' ? 'Design Now' : 'এখন ডিজাইন করুন'}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {language === 'en' ? garment.name : garment.nameBn}
                  </h3>
                  <span className="text-lg font-bold text-primary">
                    {garment.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {language === 'en' ? garment.description : garment.descriptionBn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
