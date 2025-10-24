import type { FleetData, HourlyData, ZoneData, ActiveRide } from '@/shared/types'

export interface DashboardData {
  fleet: FleetData
  hourly: HourlyData[]
  zones: ZoneData[]
  activeRides: ActiveRide[]
  lastUpdated: Date
}

export interface KPICardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  trend?: {
    value: string
    direction: 'up' | 'down'
  }
}
