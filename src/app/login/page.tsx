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
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [language, setLanguage] = useState<'en' | 'bn'>('en')
  const [isLoading, setIsLoading] = useState(false)

  const content = {
    en: {
      title: 'Welcome Back',
      subtitle: 'Sign in to your account to continue',
      email: 'Email Address',
      password: 'Password',
      showPassword: 'Show password',
      hidePassword: 'Hide password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      signIn: 'Sign In',
      noAccount: "Don't have an account?",
      signUp: 'Sign up',
      or: 'Or continue with',
      google: 'Google',
      facebook: 'Facebook'
    },
    bn: {
      title: 'স্বাগতম',
      subtitle: 'চালিয়ে যেতে আপনার অ্যাকাউন্টে সাইন ইন করুন',
      email: 'ইমেইল ঠিকানা',
      password: 'পাসওয়ার্ড',
      showPassword: 'পাসওয়ার্ড দেখান',
      hidePassword: 'পাসওয়ার্ড লুকান',
      rememberMe: 'আমাকে মনে রাখুন',
      forgotPassword: 'পাসওয়ার্ড ভুলে গেছেন?',
      signIn: 'সাইন ইন',
      noAccount: 'কোনো অ্যাকাউন্ট নেই?',
      signUp: 'সাইন আপ করুন',
      or: 'অথবা চালিয়ে যান',
      google: 'গুগল',
      facebook: 'ফেসবুক'
    }
  }

  const currentContent = content[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login submitted:', formData)
      setIsLoading(false)
      // Redirect to profile after successful login
      router.push('/profile')
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-md mx-auto">
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
              <UserIcon className="h-12 w-12 text-primary" />
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

        {/* Login Card */}
        <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              {currentContent.signIn}
            </CardTitle>
            <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
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
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground cursor-pointer">
                    {currentContent.rememberMe}
                  </label>
                </div>
                <Link 
                  href="/forgot-password" 
                  className="text-sm font-bold text-primary hover:text-accent transition-colors"
                >
                  {currentContent.forgotPassword}
                </Link>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'en' ? 'Signing in...' : 'সাইন ইন হচ্ছে...'}
                  </span>
                ) : (
                  currentContent.signIn
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
                onClick={() => console.log('Google login')}
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
                onClick={() => console.log('Facebook login')}
              >
                <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                {currentContent.facebook}
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {currentContent.noAccount}{' '}
                <Link 
                  href="/register" 
                  className="font-bold text-primary hover:text-accent transition-colors"
                >
                  {currentContent.signUp}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

