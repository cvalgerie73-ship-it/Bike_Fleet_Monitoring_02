import { memo, type ReactNode } from 'react'
import { cn } from '@/shared/utils'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = memo(function Card({ children, className }: CardProps) {
  return (
    <div className={cn('bg-white rounded-lg shadow p-4', className)}>
      {children}
    </div>
  )
})
