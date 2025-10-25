'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PencilSquareIcon,
  ShoppingBagIcon,
  HeartIcon,
  ScaleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ClockIcon,
  CheckCircleIcon,
  TruckIcon,
  CameraIcon
} from '@heroicons/react/24/outline'

export default function ProfilePage() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en')
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'saved' | 'measurements' | 'settings'>('overview')
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data
  const user = {
    name: 'Ahmed Rahman',
    email: 'ahmed.rahman@example.com',
    phone: '+880 1712 345678',
    address: {
      street: 'House 45, Road 12',
      city: 'Dhaka',
      district: 'Dhanmondi',
      postalCode: '1205',
      country: 'Bangladesh'
    },
    memberSince: 'January 2024',
    totalOrders: 12,
    avatar: null
  }

  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      type: 'Custom Shirt',
      status: 'delivered',
      date: '2024-10-15',
      amount: 4500,
      tailor: 'Master Tailor Karim',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop'
    },
    {
      id: 'ORD-002',
      type: 'Blazer',
      status: 'in-production',
      date: '2024-10-20',
      amount: 8500,
      tailor: 'Elite Tailors',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=300&fit=crop'
    },
    {
      id: 'ORD-003',
      type: 'Kurta',
      status: 'pending',
      date: '2024-10-22',
      amount: 3200,
      tailor: 'Traditional Crafts',
      image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=300&h=300&fit=crop'
    }
  ]

  // Mock saved designs
  const savedDesigns = [
    {
      id: 'DES-001',
      name: 'Blue Oxford Shirt',
      type: 'Shirt',
      price: 4200,
      savedDate: '2024-10-18',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop'
    },
    {
      id: 'DES-002',
      name: 'Navy Suit',
      type: 'Suit',
      price: 15000,
      savedDate: '2024-10-10',
      image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=300&h=300&fit=crop'
    }
  ]

  // Mock measurements
  const measurements = {
    shirt: [
      { name: 'Chest', value: 42, unit: 'inch' },
      { name: 'Shoulder', value: 18, unit: 'inch' },
      { name: 'Sleeve Length', value: 34, unit: 'inch' },
      { name: 'Shirt Length', value: 30, unit: 'inch' },
      { name: 'Neck', value: 16, unit: 'inch' }
    ],
    trouser: [
      { name: 'Waist', value: 34, unit: 'inch' },
      { name: 'Hip', value: 40, unit: 'inch' },
      { name: 'Inseam', value: 32, unit: 'inch' },
      { name: 'Outseam', value: 42, unit: 'inch' }
    ]
  }

  const content = {
    en: {
      profile: 'My Profile',
      overview: 'Overview',
      orders: 'My Orders',
      saved: 'Saved Designs',
      measurements: 'Measurements',
      settings: 'Settings',
      editProfile: 'Edit Profile',
      logout: 'Logout',
      memberSince: 'Member Since',
      totalOrders: 'Total Orders',
      activeOrders: 'Active Orders',
      viewAll: 'View All',
      orderStatus: {
        pending: 'Pending',
        confirmed: 'Confirmed',
        'in-production': 'In Production',
        'quality-check': 'Quality Check',
        completed: 'Completed',
        delivered: 'Delivered'
      },
      trackOrder: 'Track Order',
      reorder: 'Reorder',
      saveDesign: 'Continue Design',
      deleteDesign: 'Delete',
      shirtMeasurements: 'Shirt Measurements',
      trouserMeasurements: 'Trouser Measurements',
      updateMeasurements: 'Update Measurements',
      contactInfo: 'Contact Information',
      deliveryAddress: 'Delivery Address',
      accountSettings: 'Account Settings',
      save: 'Save Changes',
      cancel: 'Cancel'
    },
    bn: {
      profile: 'আমার প্রোফাইল',
      overview: 'সংক্ষিপ্ত বিবরণ',
      orders: 'আমার অর্ডার',
      saved: 'সংরক্ষিত ডিজাইন',
      measurements: 'মাপ',
      settings: 'সেটিংস',
      editProfile: 'প্রোফাইল সম্পাদনা',
      logout: 'লগআউট',
      memberSince: 'সদস্য হওয়ার তারিখ',
      totalOrders: 'মোট অর্ডার',
      activeOrders: 'সক্রিয় অর্ডার',
      viewAll: 'সব দেখুন',
      orderStatus: {
        pending: 'অপেক্ষমাণ',
        confirmed: 'নিশ্চিত',
        'in-production': 'উৎপাদনে',
        'quality-check': 'মান পরীক্ষা',
        completed: 'সম্পন্ন',
        delivered: 'বিতরণ করা হয়েছে'
      },
      trackOrder: 'অর্ডার ট্র্যাক করুন',
      reorder: 'পুনরায় অর্ডার',
      saveDesign: 'ডিজাইন চালিয়ে যান',
      deleteDesign: 'মুছুন',
      shirtMeasurements: 'শার্টের মাপ',
      trouserMeasurements: 'প্যান্টের মাপ',
      updateMeasurements: 'মাপ আপডেট করুন',
      contactInfo: 'যোগাযোগের তথ্য',
      deliveryAddress: 'ডেলিভারি ঠিকানা',
      accountSettings: 'অ্যাকাউন্ট সেটিংস',
      save: 'পরিবর্তন সংরক্ষণ করুন',
      cancel: 'বাতিল'
    }
  }

  const currentContent = content[language]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <ClockIcon className="h-5 w-5" />
      case 'in-production':
        return <Cog6ToothIcon className="h-5 w-5" />
      case 'delivered':
        return <CheckCircleIcon className="h-5 w-5" />
      default:
        return <TruckIcon className="h-5 w-5" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30'
      case 'confirmed':
        return 'bg-blue-500/20 text-blue-700 border-blue-500/30'
      case 'in-production':
        return 'bg-purple-500/20 text-purple-700 border-purple-500/30'
      case 'completed':
        return 'bg-green-500/20 text-green-700 border-green-500/30'
      case 'delivered':
        return 'bg-green-600/20 text-green-800 border-green-600/30'
      default:
        return 'bg-gray-500/20 text-gray-700 border-gray-500/30'
    }
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
              {currentContent.profile}
            </h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </Button>
            <Link href="/login">
              <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                {currentContent.logout}
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant sticky top-24">
              <CardContent className="p-6">
                {/* Profile Picture */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-4 border-primary/40 flex items-center justify-center overflow-hidden">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <UserIcon className="h-12 w-12 text-primary" />
                      )}
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full border-2 border-card hover:bg-accent transition-colors">
                      <CameraIcon className="h-4 w-4 text-white" />
                    </button>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <Badge className="mt-2 bg-primary/10 text-primary border-primary/30">
                    {currentContent.memberSince}: {user.memberSince}
                  </Badge>
                </div>

                {/* Quick Stats */}
                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{currentContent.totalOrders}</span>
                    <span className="font-bold text-primary">{user.totalOrders}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{currentContent.activeOrders}</span>
                    <span className="font-bold text-accent">2</span>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === 'overview'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    <UserIcon className="h-5 w-5" />
                    <span className="font-bold">{currentContent.overview}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === 'orders'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    <ShoppingBagIcon className="h-5 w-5" />
                    <span className="font-bold">{currentContent.orders}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('saved')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === 'saved'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    <HeartIcon className="h-5 w-5" />
                    <span className="font-bold">{currentContent.saved}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('measurements')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === 'measurements'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    <ScaleIcon className="h-5 w-5" />
                    <span className="font-bold">{currentContent.measurements}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === 'settings'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    <Cog6ToothIcon className="h-5 w-5" />
                    <span className="font-bold">{currentContent.settings}</span>
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Welcome Card */}
                <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary border-primary/20 shadow-elegant">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-primary mb-2">
                      {language === 'en' ? `Welcome back, ${user.name.split(' ')[0]}!` : `স্বাগতম, ${user.name.split(' ')[0]}!`}
                    </h2>
                    <p className="text-muted-foreground">
                      {language === 'en' 
                        ? 'Here\'s what\'s happening with your orders and designs.' 
                        : 'আপনার অর্ডার এবং ডিজাইনের সাথে কী ঘটছে তা এখানে দেখুন।'}
                    </p>
                  </CardContent>
                </Card>

                {/* Recent Orders */}
                <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-2xl font-bold text-primary">
                          {language === 'en' ? 'Recent Orders' : 'সাম্প্রতিক অর্ডার'}
                        </CardTitle>
                        <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
                      </div>
                      <Button variant="outline" onClick={() => setActiveTab('orders')}>
                        {currentContent.viewAll}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.slice(0, 3).map((order) => (
                        <div 
                          key={order.id}
                          className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300"
                        >
                          <img 
                            src={order.image} 
                            alt={order.type}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-bold text-foreground">{order.type}</h4>
                                <p className="text-sm text-muted-foreground">{order.id}</p>
                              </div>
                              <Badge className={`flex items-center gap-1 ${getStatusColor(order.status)}`}>
                                {getStatusIcon(order.status)}
                                {currentContent.orderStatus[order.status as keyof typeof currentContent.orderStatus]}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">{order.tailor}</span>
                              <span className="font-bold text-primary">৳{order.amount}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Saved Designs Preview */}
                <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-2xl font-bold text-primary">
                          {language === 'en' ? 'Saved Designs' : 'সংরক্ষিত ডিজাইন'}
                        </CardTitle>
                        <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
                      </div>
                      <Button variant="outline" onClick={() => setActiveTab('saved')}>
                        {currentContent.viewAll}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {savedDesigns.map((design) => (
                        <div 
                          key={design.id}
                          className="relative group rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
                        >
                          <img 
                            src={design.image} 
                            alt={design.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h4 className="font-bold text-white mb-1">{design.name}</h4>
                              <p className="text-sm text-gray-200">৳{design.price}</p>
                            </div>
                          </div>
                          <div className="p-4 bg-card">
                            <h4 className="font-bold text-foreground">{design.name}</h4>
                            <p className="text-sm text-muted-foreground">{design.type}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {currentContent.orders}
                  </CardTitle>
                  <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <CardDescription>
                    {language === 'en' ? 'Track and manage all your orders' : 'আপনার সমস্ত অর্ডার ট্র্যাক এবং পরিচালনা করুন'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div 
                        key={order.id}
                        className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row gap-4">
                          <img 
                            src={order.image} 
                            alt={order.type}
                            className="w-full md:w-32 h-32 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                              <div>
                                <h4 className="text-xl font-bold text-foreground mb-1">{order.type}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{order.id} • {order.date}</p>
                                <p className="text-sm text-muted-foreground">
                                  <span className="font-semibold">{language === 'en' ? 'Tailor:' : 'দর্জি:'}</span> {order.tailor}
                                </p>
                              </div>
                              <Badge className={`flex items-center gap-1 ${getStatusColor(order.status)} h-fit`}>
                                {getStatusIcon(order.status)}
                                {currentContent.orderStatus[order.status as keyof typeof currentContent.orderStatus]}
                              </Badge>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-3 border-t border-border">
                              <span className="text-2xl font-bold text-primary">৳{order.amount}</span>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <TruckIcon className="h-4 w-4 mr-2" />
                                  {currentContent.trackOrder}
                                </Button>
                                {order.status === 'delivered' && (
                                  <Button size="sm">
                                    {currentContent.reorder}
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Saved Designs Tab */}
            {activeTab === 'saved' && (
              <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {currentContent.saved}
                  </CardTitle>
                  <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <CardDescription>
                    {language === 'en' ? 'Your saved custom designs' : 'আপনার সংরক্ষিত কাস্টম ডিজাইন'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedDesigns.map((design) => (
                      <div 
                        key={design.id}
                        className="rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 bg-secondary/50"
                      >
                        <div className="relative group">
                          <img 
                            src={design.image} 
                            alt={design.name}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3">
                            <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg">
                              <HeartIcon className="h-5 w-5 fill-current" />
                            </button>
                          </div>
                        </div>
                        <div className="p-5">
                          <h4 className="text-xl font-bold text-foreground mb-1">{design.name}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{design.type}</p>
                          <p className="text-xs text-muted-foreground mb-4">
                            {language === 'en' ? 'Saved on' : 'সংরক্ষিত'} {design.savedDate}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-primary">৳{design.price}</span>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                {currentContent.deleteDesign}
                              </Button>
                              <Button size="sm">
                                {currentContent.saveDesign}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Measurements Tab */}
            {activeTab === 'measurements' && (
              <div className="space-y-6">
                {/* Shirt Measurements */}
                <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl font-bold text-primary">
                          {currentContent.shirtMeasurements}
                        </CardTitle>
                        <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
                      </div>
                      <Button variant="outline" size="sm">
                        <PencilSquareIcon className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'Edit' : 'সম্পাদনা'}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {measurements.shirt.map((measurement, index) => (
                        <div key={index} className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <p className="text-sm text-muted-foreground mb-1">{measurement.name}</p>
                          <p className="text-2xl font-bold text-primary">
                            {measurement.value} <span className="text-sm">{measurement.unit}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Trouser Measurements */}
                <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl font-bold text-primary">
                          {currentContent.trouserMeasurements}
                        </CardTitle>
                        <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
                      </div>
                      <Button variant="outline" size="sm">
                        <PencilSquareIcon className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'Edit' : 'সম্পাদনা'}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {measurements.trouser.map((measurement, index) => (
                        <div key={index} className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <p className="text-sm text-muted-foreground mb-1">{measurement.name}</p>
                          <p className="text-2xl font-bold text-primary">
                            {measurement.value} <span className="text-sm">{measurement.unit}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                {/* Contact Information */}
                <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl font-bold text-primary">
                          {currentContent.contactInfo}
                        </CardTitle>
                        <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
                      </div>
                      {!isEditing && (
                        <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                          <PencilSquareIcon className="h-4 w-4 mr-2" />
                          {currentContent.editProfile}
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                          <UserIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <label className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                            {language === 'en' ? 'Full Name' : 'পুরো নাম'}
                          </label>
                          {isEditing ? (
                            <input 
                              type="text" 
                              defaultValue={user.name}
                              className="mt-1 w-full px-4 py-2 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                          ) : (
                            <p className="mt-1 text-foreground font-medium">{user.name}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                          <EnvelopeIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <label className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                            {language === 'en' ? 'Email' : 'ইমেইল'}
                          </label>
                          {isEditing ? (
                            <input 
                              type="email" 
                              defaultValue={user.email}
                              className="mt-1 w-full px-4 py-2 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                          ) : (
                            <p className="mt-1 text-foreground font-medium">{user.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                          <PhoneIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <label className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                            {language === 'en' ? 'Phone' : 'ফোন'}
                          </label>
                          {isEditing ? (
                            <input 
                              type="tel" 
                              defaultValue={user.phone}
                              className="mt-1 w-full px-4 py-2 bg-secondary border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                          ) : (
                            <p className="mt-1 text-foreground font-medium">{user.phone}</p>
                          )}
                        </div>
                      </div>

                      {isEditing && (
                        <div className="flex gap-3 pt-4">
                          <Button onClick={() => setIsEditing(false)}>
                            {currentContent.save}
                          </Button>
                          <Button variant="outline" onClick={() => setIsEditing(false)}>
                            {currentContent.cancel}
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Address */}
                <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl font-bold text-primary">
                          {currentContent.deliveryAddress}
                        </CardTitle>
                        <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                        <MapPinIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground font-medium">{user.address.street}</p>
                        <p className="text-foreground font-medium">{user.address.district}, {user.address.city}</p>
                        <p className="text-foreground font-medium">{user.address.postalCode}</p>
                        <p className="text-muted-foreground">{user.address.country}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Account Settings */}
                <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">
                      {currentContent.accountSettings}
                    </CardTitle>
                    <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                      <div>
                        <h4 className="font-bold text-foreground">{language === 'en' ? 'Language' : 'ভাষা'}</h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'en' ? 'Choose your preferred language' : 'আপনার পছন্দের ভাষা চয়ন করুন'}
                        </p>
                      </div>
                      <Button variant="outline" onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}>
                        {language === 'en' ? 'বাংলা' : 'English'}
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                      <div>
                        <h4 className="font-bold text-foreground">
                          {language === 'en' ? 'Change Password' : 'পাসওয়ার্ড পরিবর্তন করুন'}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'en' ? 'Update your password' : 'আপনার পাসওয়ার্ড আপডেট করুন'}
                        </p>
                      </div>
                      <Button variant="outline">
                        {language === 'en' ? 'Change' : 'পরিবর্তন করুন'}
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                      <div>
                        <h4 className="font-bold text-red-600">
                          {language === 'en' ? 'Delete Account' : 'অ্যাকাউন্ট মুছুন'}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'en' ? 'Permanently delete your account' : 'স্থায়ীভাবে আপনার অ্যাকাউন্ট মুছুন'}
                        </p>
                      </div>
                      <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        {language === 'en' ? 'Delete' : 'মুছুন'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

