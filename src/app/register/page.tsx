'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  EnvelopeIcon, 
  LockClosedIcon,
  UserIcon,
  PhoneIcon,
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [language, setLanguage] = useState<'en' | 'bn'>('en')
  const [isLoading, setIsLoading] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  const content = {
    en: {
      title: 'Create Account',
      subtitle: 'Join us and start your custom tailoring journey',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      showPassword: 'Show password',
      hidePassword: 'Hide password',
      terms: 'I agree to the',
      termsLink: 'Terms of Service',
      and: 'and',
      privacyLink: 'Privacy Policy',
      signUp: 'Create Account',
      haveAccount: 'Already have an account?',
      signIn: 'Sign in',
      or: 'Or sign up with',
      google: 'Google',
      facebook: 'Facebook',
      passwordRequirements: 'Password must be at least 8 characters'
    },
    bn: {
      title: 'অ্যাকাউন্ট তৈরি করুন',
      subtitle: 'আমাদের সাথে যোগ দিন এবং আপনার কাস্টম টেইলারিং যাত্রা শুরু করুন',
      name: 'পুরো নাম',
      email: 'ইমেইল ঠিকানা',
      phone: 'ফোন নম্বর',
      password: 'পাসওয়ার্ড',
      confirmPassword: 'পাসওয়ার্ড নিশ্চিত করুন',
      showPassword: 'পাসওয়ার্ড দেখান',
      hidePassword: 'পাসওয়ার্ড লুকান',
      terms: 'আমি সম্মত',
      termsLink: 'সেবার শর্তাবলী',
      and: 'এবং',
      privacyLink: 'গোপনীয়তা নীতি',
      signUp: 'অ্যাকাউন্ট তৈরি করুন',
      haveAccount: 'ইতিমধ্যে একটি অ্যাকাউন্ট আছে?',
      signIn: 'সাইন ইন করুন',
      or: 'অথবা সাইন আপ করুন',
      google: 'গুগল',
      facebook: 'ফেসবুক',
      passwordRequirements: 'পাসওয়ার্ড অন্তত ৮টি অক্ষরের হতে হবে'
    }
  }

  const currentContent = content[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert(language === 'en' ? 'Passwords do not match' : 'পাসওয়ার্ড মিলছে না')
      return
    }

    if (!acceptTerms) {
      alert(language === 'en' ? 'Please accept terms and conditions' : 'অনুগ্রহ করে শর্তাবলী স্বীকার করুন')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Register submitted:', formData)
      setIsLoading(false)
      // Redirect to profile after successful registration
      router.push('/profile')
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const passwordStrength = (password: string) => {
    if (password.length === 0) return null
    if (password.length < 8) return { strength: 'weak', color: 'bg-red-500' }
    if (password.length < 12) return { strength: 'medium', color: 'bg-yellow-500' }
    return { strength: 'strong', color: 'bg-green-500' }
  }

  const strength = passwordStrength(formData.password)

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Button
              variant="outline"
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="mb-4"
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </Button>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30">
              <CheckCircleIcon className="h-12 w-12 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-3">
            {currentContent.title}
          </h1>
          <p className="text-muted-foreground">
            {currentContent.subtitle}
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Register Card */}
        <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              {currentContent.signUp}
            </CardTitle>
            <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                  {currentContent.name}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
                    placeholder={language === 'en' ? 'John Doe' : 'আপনার নাম'}
                    required
                  />
                </div>
              </div>

              {/* Email & Phone in Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                    {currentContent.email}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                    {currentContent.phone}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      placeholder="+880 1234 567890"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                  {currentContent.password}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {/* Password Strength */}
                {strength && (
                  <div className="mt-2">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${strength.color} transition-all duration-300`}
                          style={{ width: strength.strength === 'weak' ? '33%' : strength.strength === 'medium' ? '66%' : '100%' }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground capitalize">{strength.strength}</span>
                    </div>
                  </div>
                )}
                <p className="mt-1 text-xs text-muted-foreground">{currentContent.passwordRequirements}</p>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                  {currentContent.confirmPassword}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="mt-1 text-xs text-red-500">
                    {language === 'en' ? 'Passwords do not match' : 'পাসওয়ার্ড মিলছে না'}
                  </p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="h-4 w-4 mt-1 rounded border-border text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground cursor-pointer">
                  {currentContent.terms}{' '}
                  <Link href="/terms" className="font-bold text-primary hover:text-accent transition-colors">
                    {currentContent.termsLink}
                  </Link>{' '}
                  {currentContent.and}{' '}
                  <Link href="/privacy" className="font-bold text-primary hover:text-accent transition-colors">
                    {currentContent.privacyLink}
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isLoading || !acceptTerms}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'en' ? 'Creating account...' : 'অ্যাকাউন্ট তৈরি হচ্ছে...'}
                  </span>
                ) : (
                  currentContent.signUp
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">
                  {currentContent.or}
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => console.log('Google sign up')}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {currentContent.google}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => console.log('Facebook sign up')}
              >
                <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                {currentContent.facebook}
              </Button>
            </div>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {currentContent.haveAccount}{' '}
                <Link 
                  href="/login" 
                  className="font-bold text-primary hover:text-accent transition-colors"
                >
                  {currentContent.signIn}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

