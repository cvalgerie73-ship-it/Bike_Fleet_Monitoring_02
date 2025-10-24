import { memo } from 'react'
import { cn } from '@/shared/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'danger'
  className?: string
}

const variantClasses = {
  default: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-orange-100 text-orange-800',
  danger: 'bg-red-100 text-red-800',
}

export const Badge = memo(function Badge({
  children,
  variant = 'default',
  className
}: BadgeProps) {
  return (
    <span
      className={cn(
        'text-xs px-2 py-1 rounded-full font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
})
