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
    <footer className="bg-[#070A1E] text-foreground border-t border-primary/20 relative">
      {/* Premium top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <span className="text-4xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
                sailor
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {content.madeIn}
            </p>
            <div className="flex gap-4 mt-6">
              <div className="w-10 h-10 rounded-full bg-secondary border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group">
                <span className="text-primary group-hover:text-primary-foreground transition-colors">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group">
                <span className="text-primary group-hover:text-primary-foreground transition-colors">𝕏</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer group">
                <span className="text-primary group-hover:text-primary-foreground transition-colors">in</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">
              {content.company}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>{content.about}</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>{content.careers}</Link></li>
              <li><Link href="/press" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>{content.press}</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">
              {content.support}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>{content.help}</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>{content.contact}</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>{content.shipping}</Link></li>
              <li><Link href="/returns" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>{content.returns}</Link></li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">
              {content.product}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/design" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>{content.design}</Link></li>
              <li><Link href="/fabrics" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>{content.fabrics}</Link></li>
              <li><Link href="/tailors" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>{content.tailors}</Link></li>
              <li><Link href="/sizing" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>{content.sizing}</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary/20 mt-12 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-3 text-primary">{content.newsletter}</h3>
              <p className="text-muted-foreground text-sm max-w-md leading-relaxed">{content.newsletterDesc}</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder={language === 'en' ? 'Enter your email' : 'আপনার ইমেইল লিখুন'}
                className="flex-1 md:w-72 px-5 py-3 bg-secondary border-2 border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
              />
              <Button className="rounded-l-none">
                {content.subscribe}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300 font-medium">
              {content.privacy}
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300 font-medium">
              {content.terms}
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300 font-medium">
              {content.cookies}
            </Link>
          </div>
          <p className="text-muted-foreground text-sm font-medium">{content.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
