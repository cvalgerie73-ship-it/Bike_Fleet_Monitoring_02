import { clsx, type ClassValue } from 'clsx'

// Utility to merge class names
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Get status color class
export const getStatusColor = (status: string): string => {
  if (status === 'Normal') return 'bg-green-100 text-green-800'
  if (status === 'High Vibration') return 'bg-red-100 text-red-800'
  return 'bg-orange-100 text-orange-800'
}

// Get quality color class
export const getQualityColor = (quality: number): string => {
  if (quality >= 7) return 'text-green-600'
  if (quality >= 5) return 'text-yellow-600'
  return 'text-red-600'
}

// Format number with commas
export const formatNumber = (num: number): string => {
  return num.toLocaleString()
}

// Format percentage
export const formatPercentage = (value: number, total: number): string => {
  return ((value / total) * 100).toFixed(1) + '%'
}
