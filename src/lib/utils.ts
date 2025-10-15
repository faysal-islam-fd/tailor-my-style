import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency = 'BDT'): string {
  return new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: currency === 'BDT' ? 'BDT' : 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatPrice(amount: number): string {
  return `৳${amount.toLocaleString('bn-BD')}`
}
