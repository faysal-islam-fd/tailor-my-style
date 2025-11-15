'use client'

import { useEffect, useState } from 'react'
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
import { useLogoutMutation, useUpdateProfileMutation } from '@/services/authApi'
import { useAppDispatch, useAppSelector } from '@/lib/store'
import { clearCredentials, setCredentials } from '@/slices/authSlice'

export interface ProfileUser {
  id?: number
  name: string
  email?: string
  phone?: string
  address?: { street?: string; city?: string; district?: string; postalCode?: string; country?: string }
  memberSince?: string
  totalOrders?: number
  avatar?: string | null
  gender?: string
  dob?: string
}

export default function ProfileClient({ initialUser }: { initialUser: ProfileUser }) {
  const [language, setLanguage] = useState<'en' | 'bn'>('en')
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'saved' | 'measurements' | 'settings'>('overview')
  const [isEditing, setIsEditing] = useState(false)
  const auth = useAppSelector(s => s.auth)
  const dispatch = useAppDispatch()
  const [logout] = useLogoutMutation()
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation()
  const [formName, setFormName] = useState(initialUser.name || '')
  const [updateError, setUpdateError] = useState<string | null>(null)
  const [updateSuccess, setUpdateSuccess] = useState<string | null>(null)

  const user = {
    name: initialUser.name ?? '—',
    email: initialUser.email ?? '—',
    phone: initialUser.phone ?? '—',
    address: {
      street: initialUser.address?.street ?? '—',
      city: initialUser.address?.city ?? '—',
      district: initialUser.address?.district ?? '—',
      postalCode: initialUser.address?.postalCode ?? '—',
      country: initialUser.address?.country ?? '—',
    },
    memberSince: initialUser.memberSince ?? '—',
    totalOrders: initialUser.totalOrders ?? 0,
    avatar: initialUser.avatar ?? null,
  }

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

  const handleSaveProfile = async () => {
    try {
      setUpdateError(null)
      setUpdateSuccess(null)
      const res = await updateProfile({ name: formName || undefined }).unwrap()
      const newUser = res.user as any
      dispatch(setCredentials({ token: auth.token as string, user: {
        id: newUser.id,
        name: newUser.name,
        phone: newUser.phone,
        email: newUser.email,
      }}))
      setUpdateSuccess(res.message || (language === 'en' ? 'Profile updated' : 'প্রোফাইল আপডেট হয়েছে'))
      setIsEditing(false)
    } catch (e: any) {
      setUpdateError(e?.data?.message || (language === 'en' ? 'Update failed' : 'আপডেট ব্যর্থ'))
    }
  }

  const orders: any[] = []
  const savedDesigns: any[] = []
  const measurements = { shirt: [], trouser: [] }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
              {language === 'en' ? 'My Profile' : 'আমার প্রোফাইল'}
            </h1>
            <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}>
              {language === 'en' ? 'বাংলা' : 'English'}
            </Button>
            <Button
              variant="outline"
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={async () => {
                try { await fetch('/api/auth/clear-token', { method: 'POST' }) } finally { dispatch(clearCredentials()) }
              }}
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
              {language === 'en' ? 'Logout' : 'লগআউট'}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant sticky top-24">
              <CardContent className="p-6">
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
                  <p className="text-sm text-muted-foreground">{user.email ?? '—'}</p>
                  <Badge className="mt-2 bg-primary/10 text-primary border-primary/30">
                    {(language === 'en' ? 'Member Since' : 'সদস্য হওয়ার তারিখ')}: {user.memberSince}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold text-primary">
                      {language === 'en' ? 'Contact Information' : 'যোগাযোগের তথ্য'}
                    </CardTitle>
                    <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
                  </div>
                  {!isEditing && (
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                      <PencilSquareIcon className="h-4 w-4 mr-2" />
                      {language === 'en' ? 'Edit Profile' : 'প্রোফাইল সম্পাদনা'}
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {updateError && (<div className="text-sm text-red-600">{updateError}</div>)}
                  {updateSuccess && (<div className="text-sm text-green-600">{updateSuccess}</div>)}

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
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
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
                      <p className="mt-1 text-foreground font-medium">{user.email ?? '—'}</p>
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
                      <p className="mt-1 text-foreground font-medium">{user.phone ?? '—'}</p>
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex gap-3 pt-4">
                      <Button onClick={handleSaveProfile} disabled={isUpdating}>
                        {isUpdating ? (language === 'en' ? 'Saving...' : 'সংরক্ষণ হচ্ছে...') : (language === 'en' ? 'Save Changes' : 'পরিবর্তন সংরক্ষণ করুন')}
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)} disabled={isUpdating}>
                        {language === 'en' ? 'Cancel' : 'বাতিল'}
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-secondary border-primary/20 shadow-elegant mt-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold text-primary">
                      {language === 'en' ? 'Delivery Address' : 'ডেলিভারি ঠিকানা'}
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
          </div>
        </div>
      </div>
    </div>
  )
}

