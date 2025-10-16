'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [language, setLanguage] = useState<'en' | 'bn'>('en')

  const content = {
    en: {
      title: 'Get in Touch',
      subtitle: 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
      contactInfo: {
        title: 'Contact Information',
        address: 'House 123, Road 45, Dhanmondi, Dhaka 1205, Bangladesh',
        phone: '+880 1234 567890',
        email: 'hello@tailormystyle.com',
        hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM'
      },
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message'
      }
    },
    bn: {
      title: 'যোগাযোগ করুন',
      subtitle: 'আমরা আপনার কাছ থেকে শুনতে চাই। আমাদের একটি বার্তা পাঠান এবং আমরা যত তাড়াতাড়ি সম্ভব উত্তর দেব।',
      contactInfo: {
        title: 'যোগাযোগের তথ্য',
        address: 'বাড়ি ১২৩, রোড ৪৫, ধানমন্ডি, ঢাকা ১২০৫, বাংলাদেশ',
        phone: '+৮৮০ ১২৩৪ ৫৬৭৮৯০',
        email: 'hello@tailormystyle.com',
        hours: 'রবিবার - বৃহস্পতিবার: সকাল ৯:০০ - সন্ধ্যা ৬:০০'
      },
      form: {
        name: 'পুরো নাম',
        email: 'ইমেইল ঠিকানা',
        phone: 'ফোন নম্বর',
        subject: 'বিষয়',
        message: 'বার্তা',
        submit: 'বার্তা পাঠান'
      }
    }
  }

  const currentContent = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Button
              variant="outline"
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="mb-4"
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </Button>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <Card className="h-full bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  {currentContent.contactInfo.title}
                </CardTitle>
                <div className="h-[2px] w-16 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-start space-x-5 group">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-all duration-300">
                    <MapPinIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">
                      {language === 'en' ? 'Address' : 'ঠিকানা'}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentContent.contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-all duration-300">
                    <PhoneIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">
                      {language === 'en' ? 'Phone' : 'ফোন'}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentContent.contactInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-all duration-300">
                    <EnvelopeIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">
                      {language === 'en' ? 'Email' : 'ইমেইল'}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentContent.contactInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-all duration-300">
                    <ClockIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">
                      {language === 'en' ? 'Business Hours' : 'ব্যবসার সময়'}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentContent.contactInfo.hours}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="h-full bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  {language === 'en' ? 'Send us a Message' : 'আমাদের একটি বার্তা পাঠান'}
                </CardTitle>
                <div className="h-[2px] w-16 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                <CardDescription className="text-muted-foreground mt-3">
                  {language === 'en' ? 'Fill out the form below and we\'ll get back to you within 24 hours.' : 'নীচের ফর্মটি পূরণ করুন এবং আমরা ২৪ ঘন্টার মধ্যে আপনার কাছে ফিরে আসব।'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      {currentContent.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      {currentContent.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      {currentContent.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      {currentContent.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      {currentContent.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    {currentContent.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
