import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ScissorsIcon, 
  UserGroupIcon, 
  TruckIcon, 
  ShieldCheckIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

interface FeaturesSectionProps {
  language?: 'en' | 'bn'
}

export default function FeaturesSection({ language = 'en' }: FeaturesSectionProps) {
  const content = {
    en: {
      title: 'Why Choose Tailor My Style?',
      subtitle: 'Experience the perfect blend of technology and craftsmanship',
      features: [
        {
          icon: ScissorsIcon,
          title: 'Expert Local Tailors',
          description: 'Connect with skilled Bangladeshi tailors who understand local preferences and measurements'
        },
        {
          icon: SparklesIcon,
          title: 'Unlimited Customization',
          description: 'Choose from hundreds of fabrics, styles, and customization options to create your perfect garment'
        },
        {
          icon: UserGroupIcon,
          title: 'Personalized Experience',
          description: 'Get one-on-one consultation and support throughout your design and ordering process'
        },
        {
          icon: TruckIcon,
          title: 'Fast Delivery',
          description: 'Quick turnaround times with reliable delivery across Bangladesh'
        },
        {
          icon: ShieldCheckIcon,
          title: 'Quality Guarantee',
          description: 'Every garment comes with our quality promise and satisfaction guarantee'
        },
        {
          icon: HeartIcon,
          title: 'Supporting Local',
          description: 'Empowering local tailors and promoting Bangladeshi craftsmanship'
        }
      ]
    },
    bn: {
      title: 'কেন টেইলর মাই স্টাইল বেছে নিবেন?',
      subtitle: 'প্রযুক্তি এবং কারুশিল্পের নিখুঁত মিশ্রণের অভিজ্ঞতা নিন',
      features: [
        {
          icon: ScissorsIcon,
          title: 'বিশেষজ্ঞ স্থানীয় দর্জি',
          description: 'দক্ষ বাংলাদেশী দর্জিদের সাথে যুক্ত হন যারা স্থানীয় পছন্দ এবং পরিমাপ বুঝেন'
        },
        {
          icon: SparklesIcon,
          title: 'সীমাহীন কাস্টমাইজেশন',
          description: 'আপনার নিখুঁত পোশাক তৈরি করতে শত শত কাপড়, স্টাইল এবং কাস্টমাইজেশন অপশন থেকে বেছে নিন'
        },
        {
          icon: UserGroupIcon,
          title: 'ব্যক্তিগত অভিজ্ঞতা',
          description: 'আপনার ডিজাইন এবং অর্ডার প্রক্রিয়া জুড়ে এক-এক পরামর্শ এবং সহায়তা পান'
        },
        {
          icon: TruckIcon,
          title: 'দ্রুত ডেলিভারি',
          description: 'বাংলাদেশ জুড়ে নির্ভরযোগ্য ডেলিভারির সাথে দ্রুত টার্নআরাউন্ড সময়'
        },
        {
          icon: ShieldCheckIcon,
          title: 'গুণমানের গ্যারান্টি',
          description: 'প্রতিটি পোশাক আমাদের গুণমানের প্রতিশ্রুতি এবং সন্তুষ্টির গ্যারান্টি নিয়ে আসে'
        },
        {
          icon: HeartIcon,
          title: 'স্থানীয় সমর্থন',
          description: 'স্থানীয় দর্জিদের ক্ষমতায়ন এবং বাংলাদেশী কারুশিল্পের প্রচার'
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
