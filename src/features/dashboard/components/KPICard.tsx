import { memo } from 'react'
import { Card } from '@/shared/components/ui'
import type { LucideIcon } from 'lucide-react'

interface KPICardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: LucideIcon
  iconColor: string
  trend?: {
    value: string
    icon: LucideIcon
    color: string
  }
}

export const KPICard = memo(function KPICard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconColor,
  trend,
}: KPICardProps) {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        <span className="text-xs font-medium text-gray-600">{title}</span>
      </div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
      {trend && (
        <div className={`text-xs ${trend.color} flex items-center gap-1 mt-1`}>
          <trend.icon className="w-3 h-3" /> {trend.value}
        </div>
      )}
    </Card>
  )
})
