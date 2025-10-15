'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ShoppingCartIcon, 
  UserIcon, 
  Bars3Icon,
  XMarkIcon,
  LanguageIcon
} from '@heroicons/react/24/outline'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'bn'>('en')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          setIsScrolled(scrollTop > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bn' : 'en')
  }

  const navigation = [
    { name: language === 'en' ? 'Home' : 'হোম', href: '/' },
    { name: language === 'en' ? 'Design' : 'ডিজাইন', href: '/design' },
    { name: language === 'en' ? 'Fabrics' : 'কাপড়', href: '/fabrics' },
    { name: language === 'en' ? 'Tailors' : 'দর্জি', href: '/tailors' },
    { name: language === 'en' ? 'About' : 'আমাদের সম্পর্কে', href: '/about' },
    { name: language === 'en' ? 'Contact' : 'যোগাযোগ', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Banner */}
      <div className={`bg-gradient-to-r from-primary to-blue-600 text-white transition-all duration-300 ease-in-out overflow-hidden transform ${
        isScrolled ? 'max-h-0 py-0 opacity-0 -translate-y-full' : 'max-h-20 py-2.5 opacity-100 translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm font-semibold tracking-wide">
            {language === 'en' 
              ? '✨ Shop Into The Festive Season - Free Shipping On Orders Over $100' 
              : '✨ সেইলরের সাথে উৎসবের মৌসুমে কেনাকাটা করুন - ১০০ ডলারের উপরে ফ্রি শিপিং'}
          </p>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-black text-gray-900" style={{ fontFamily: 'serif' }}>
                sailor
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-gray-600 hover:text-primary"
            >
              <LanguageIcon className="h-5 w-5" />
              <span className="sr-only">
                {language === 'en' ? 'Switch to Bangla' : 'Switch to English'}
              </span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary">
              <UserIcon className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
      
      {/* Secondary Navigation */}
      <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 overflow-x-auto">
            <Link href="/sailor-service" className="hover:text-primary transition-colors duration-200 whitespace-nowrap">
              {language === 'en' ? 'SAILOR SERVICE' : 'সেইলর সার্ভিস'}
            </Link>
            <Link href="/new-arrivals" className="hover:text-primary transition-colors duration-200 whitespace-nowrap">
              {language === 'en' ? 'NEW ARRIVALS' : 'নতুন আগমন'}
            </Link>
            <Link href="/summer-collections" className="hover:text-primary transition-colors duration-200 whitespace-nowrap">
              {language === 'en' ? 'SUMMER COLLECTIONS' : 'গ্রীষ্মের সংগ্রহ'}
            </Link>
            <Link href="/men" className="hover:text-primary transition-colors duration-200 whitespace-nowrap">
              {language === 'en' ? 'MEN' : 'পুরুষ'}
            </Link>
            <Link href="/women" className="hover:text-primary transition-colors duration-200 whitespace-nowrap">
              {language === 'en' ? 'WOMEN' : 'মহিলা'}
            </Link>
            <Link href="/kids" className="hover:text-primary transition-colors duration-200 whitespace-nowrap">
              {language === 'en' ? 'KIDS' : 'শিশু'}
            </Link>
            <Link href="/wedding" className="hover:text-primary transition-colors duration-200 whitespace-nowrap">
              {language === 'en' ? 'WEDDING' : 'বিবাহ'}
            </Link>
            <Link href="/footwear" className="hover:text-primary transition-colors duration-200 whitespace-nowrap">
              {language === 'en' ? 'FOOTWEAR' : 'জুতা'}
            </Link>
            <Link href="/accessories" className="hover:text-primary transition-colors duration-200 whitespace-nowrap">
              {language === 'en' ? 'ACCESSORIES' : 'আনুষাঙ্গিক'}
            </Link>
            <Link href="/sale" className="hover:text-primary text-red-600 transition-colors duration-200 whitespace-nowrap font-bold">
              {language === 'en' ? '🔥 SALE' : '🔥 সেল'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
