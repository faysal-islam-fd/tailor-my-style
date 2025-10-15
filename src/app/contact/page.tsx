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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Button
              variant="outline"
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="mb-4"
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </Button>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {currentContent.contactInfo.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === 'en' ? 'Address' : 'ঠিকানা'}
                    </h3>
                    <p className="text-gray-600">
                      {currentContent.contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === 'en' ? 'Phone' : 'ফোন'}
                    </h3>
                    <p className="text-gray-600">
                      {currentContent.contactInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === 'en' ? 'Email' : 'ইমেইল'}
                    </h3>
                    <p className="text-gray-600">
                      {currentContent.contactInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <ClockIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === 'en' ? 'Business Hours' : 'ব্যবসার সময়'}
                    </h3>
                    <p className="text-gray-600">
                      {currentContent.contactInfo.hours}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {language === 'en' ? 'Send us a Message' : 'আমাদের একটি বার্তা পাঠান'}
                </CardTitle>
                <CardDescription>
                  {language === 'en' ? 'Fill out the form below and we\'ll get back to you within 24 hours.' : 'নীচের ফর্মটি পূরণ করুন এবং আমরা ২৪ ঘন্টার মধ্যে আপনার কাছে ফিরে আসব।'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
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
