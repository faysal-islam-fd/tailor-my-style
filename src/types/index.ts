export interface GarmentType {
  id: string
  name: string
  nameBn: string
  category: 'formal' | 'casual' | 'traditional' | 'semi-formal'
  basePrice: number
  image: string
}

export interface Fabric {
  id: string
  name: string
  nameBn: string
  description: string
  descriptionBn: string
  price: number
  image: string
  swatchImage: string
  material: string
  weight: string
  color: string
  pattern: 'solid' | 'striped' | 'checked' | 'printed' | 'textured'
  season: 'summer' | 'winter' | 'all-season'
  availability: boolean
}

export interface Style {
  id: string
  garmentTypeId: string
  name: string
  nameBn: string
  category: 'collar' | 'cuff' | 'pocket' | 'lapel' | 'fit'
  options: StyleOption[]
}

export interface StyleOption {
  id: string
  name: string
  nameBn: string
  priceModifier: number
  image: string
  description: string
  descriptionBn: string
}

export interface Measurement {
  id: string
  name: string
  nameBn: string
  value: number
  unit: 'cm' | 'inch'
  required: boolean
  description: string
  descriptionBn: string
}

export interface CustomDesign {
  id: string
  garmentTypeId: string
  fabricId: string
  selectedStyles: Record<string, string>
  measurements: Measurement[]
  customizations: Customization[]
  totalPrice: number
  createdAt: Date
}

export interface Customization {
  id: string
  type: 'monogram' | 'lining' | 'buttons' | 'other'
  name: string
  nameBn: string
  price: number
  options?: string[]
}

export interface Tailor {
  id: string
  name: string
  location: string
  rating: number
  totalOrders: number
  specialties: string[]
  availability: boolean
  deliveryTime: number // in days
}

export interface Order {
  id: string
  userId: string
  design: CustomDesign
  tailorId: string
  status: 'pending' | 'confirmed' | 'in-production' | 'quality-check' | 'completed' | 'delivered'
  totalAmount: number
  createdAt: Date
  estimatedDelivery: Date
  trackingUpdates: TrackingUpdate[]
}

export interface TrackingUpdate {
  id: string
  status: string
  message: string
  messageBn: string
  timestamp: Date
  image?: string
}

export interface User {
  id: string
  email: string
  name: string
  phone: string
  address: Address
  measurements: Measurement[]
  preferredLanguage: 'en' | 'bn'
}

export interface Address {
  street: string
  city: string
  district: string
  postalCode: string
  country: string
}

export interface PaymentMethod {
  id: string
  type: 'bkash' | 'nagad' | 'rocket' | 'bank-transfer' | 'card'
  name: string
  nameBn: string
  isActive: boolean
}
