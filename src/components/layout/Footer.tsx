import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface FooterProps {
  language?: 'en' | 'bn'
}

export default function Footer({ language = 'en' }: FooterProps) {
  const footerContent = {
    en: {
      company: 'Company',
      about: 'About Us',
      careers: 'Careers',
      press: 'Press',
      support: 'Support',
      help: 'Help Center',
      contact: 'Contact Us',
      shipping: 'Shipping Info',
      returns: 'Returns',
      product: 'Product',
      design: 'Design Your Own',
      fabrics: 'Fabrics',
      tailors: 'Find Tailors',
      sizing: 'Size Guide',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      newsletter: 'Stay Updated',
      newsletterDesc: 'Get the latest updates on new fabrics and styles',
      subscribe: 'Subscribe',
      copyright: '© 2024 Tailor My Style. All rights reserved.',
      madeIn: 'Made with ❤️ in Bangladesh'
    },
    bn: {
      company: 'কোম্পানি',
      about: 'আমাদের সম্পর্কে',
      careers: 'ক্যারিয়ার',
      press: 'প্রেস',
      support: 'সাপোর্ট',
      help: 'হেল্প সেন্টার',
      contact: 'যোগাযোগ',
      shipping: 'শিপিং তথ্য',
      returns: 'রিটার্ন',
      product: 'পণ্য',
      design: 'নিজের ডিজাইন করুন',
      fabrics: 'কাপড়',
      tailors: 'দর্জি খুঁজুন',
      sizing: 'সাইজ গাইড',
      legal: 'আইনি',
      privacy: 'প্রাইভেসি পলিসি',
      terms: 'সার্ভিস শর্তাবলী',
      cookies: 'কুকি পলিসি',
      newsletter: 'আপডেট থাকুন',
      newsletterDesc: 'নতুন কাপড় এবং স্টাইলের সর্বশেষ আপডেট পান',
      subscribe: 'সাবস্ক্রাইব',
      copyright: '© ২০২৪ টেইলর মাই স্টাইল। সকল অধিকার সংরক্ষিত।',
      madeIn: 'বাংলাদেশে ❤️ দিয়ে তৈরি'
    }
  }

  const content = footerContent[language]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <span className="text-3xl font-black text-white" style={{ fontFamily: 'serif' }}>
                sailor
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {content.madeIn}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {content.company}
            </h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">{content.about}</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">{content.careers}</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-white transition-colors">{content.press}</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {content.support}
            </h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">{content.help}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">{content.contact}</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">{content.shipping}</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-white transition-colors">{content.returns}</Link></li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {content.product}
            </h3>
            <ul className="space-y-2">
              <li><Link href="/design" className="text-gray-400 hover:text-white transition-colors">{content.design}</Link></li>
              <li><Link href="/fabrics" className="text-gray-400 hover:text-white transition-colors">{content.fabrics}</Link></li>
              <li><Link href="/tailors" className="text-gray-400 hover:text-white transition-colors">{content.tailors}</Link></li>
              <li><Link href="/sizing" className="text-gray-400 hover:text-white transition-colors">{content.sizing}</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">{content.newsletter}</h3>
              <p className="text-gray-400 text-sm">{content.newsletterDesc}</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder={language === 'en' ? 'Enter your email' : 'আপনার ইমেইল লিখুন'}
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="rounded-l-none">
                {content.subscribe}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              {content.privacy}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              {content.terms}
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              {content.cookies}
            </Link>
          </div>
          <p className="text-gray-400 text-sm">{content.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
