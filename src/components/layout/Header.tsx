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
    <header className="bg-card shadow-elegant sticky top-0 z-50 border-b border-primary/20">
      {/* Top Banner */}
    
      
      {/* Main Header */}
      <div className="border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <span className="text-4xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:from-accent group-hover:via-primary group-hover:to-accent transition-all duration-300" style={{ fontFamily: 'serif' }}>
                Dorojay Dorji
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:bg-primary/10 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-primary hover:bg-primary/10"
            >
              <LanguageIcon className="h-5 w-5" />
              <span className="sr-only">
                {language === 'en' ? 'Switch to Bangla' : 'Switch to English'}
              </span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10 relative">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* User Account */}
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <UserIcon className="h-5 w-5" />
                <span className="sr-only">User account</span>
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-primary hover:bg-primary/10"
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
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-secondary/50 rounded-lg border border-primary/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10 block px-4 py-3 text-base font-bold rounded-lg transition-all duration-300"
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
      <div className="bg-gradient-to-r from-secondary to-card border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6 py-3 text-xs sm:text-sm font-bold text-muted-foreground overflow-x-auto">
            <Link href="/sailor-service" className="hover:text-primary transition-all duration-300 whitespace-nowrap tracking-wider hover:scale-105">
              {language === 'en' ? 'SAILOR SERVICE' : 'সেইলর সার্ভিস'}
            </Link>
            <Link href="/new-arrivals" className="hover:text-primary transition-all duration-300 whitespace-nowrap tracking-wider hover:scale-105">
              {language === 'en' ? 'NEW ARRIVALS' : 'নতুন আগমন'}
            </Link>
            <Link href="/summer-collections" className="hover:text-primary transition-all duration-300 whitespace-nowrap tracking-wider hover:scale-105">
              {language === 'en' ? 'SUMMER COLLECTIONS' : 'গ্রীষ্মের সংগ্রহ'}
            </Link>
            <Link href="/men" className="hover:text-primary transition-all duration-300 whitespace-nowrap tracking-wider hover:scale-105">
              {language === 'en' ? 'MEN' : 'পুরুষ'}
            </Link>
            <Link href="/women" className="hover:text-primary transition-all duration-300 whitespace-nowrap tracking-wider hover:scale-105">
              {language === 'en' ? 'WOMEN' : 'মহিলা'}
            </Link>
            <Link href="/kids" className="hover:text-primary transition-all duration-300 whitespace-nowrap tracking-wider hover:scale-105">
              {language === 'en' ? 'KIDS' : 'শিশু'}
            </Link>
            <Link href="/wedding" className="hover:text-primary transition-all duration-300 whitespace-nowrap tracking-wider hover:scale-105">
              {language === 'en' ? 'WEDDING' : 'বিবাহ'}
            </Link>
            <Link href="/footwear" className="hover:text-primary transition-all duration-300 whitespace-nowrap tracking-wider hover:scale-105">
              {language === 'en' ? 'FOOTWEAR' : 'জুতা'}
            </Link>
            <Link href="/accessories" className="hover:text-primary transition-all duration-300 whitespace-nowrap tracking-wider hover:scale-105">
              {language === 'en' ? 'ACCESSORIES' : 'আনুষাঙ্গিক'}
            </Link>
            <Link href="/sale" className="hover:text-accent text-primary transition-all duration-300 whitespace-nowrap font-bold tracking-wider hover:scale-110 animate-pulse">
              {language === 'en' ? '🔥 SALE' : '🔥 সেল'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
