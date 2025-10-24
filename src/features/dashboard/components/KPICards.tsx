import { memo } from 'react'
import { KPICard } from './KPICard'
import {
  Bike,
  Activity,
  Users,
  TrendingUp,
  AlertTriangle,
  Wrench,
  Clock,
} from 'lucide-react'
import { formatNumber, formatPercentage } from '@/shared/utils'
import type { FleetData } from '@/shared/types'

interface KPICardsProps {
  fleetData: FleetData
}

export const KPICards = memo(function KPICards({ fleetData }: KPICardsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-4">
      <KPICard
        title="Total Fleet"
        value={formatNumber(fleetData.totalBikes)}
        icon={Bike}
        iconColor="text-blue-500"
      />

      <KPICard
        title="Active Now"
        value={formatNumber(fleetData.activeBikes)}
        subtitle={formatPercentage(fleetData.activeBikes, fleetData.totalBikes)}
        icon={Activity}
        iconColor="text-green-500"
      />

      <KPICard
        title="Rides Today"
        value={formatNumber(fleetData.todayRides)}
        icon={Users}
        iconColor="text-purple-500"
        trend={{
          value: '+12%',
          icon: TrendingUp,
          color: 'text-green-600',
        }}
      />

      <KPICard
        title="Avg Quality"
        value={`${fleetData.avgRideQuality}/10`}
        subtitle="Good"
        icon={TrendingUp}
        iconColor="text-indigo-500"
      />

      <KPICard
        title="Alerts"
        value={fleetData.highVibrationAlerts}
        subtitle="High vibration"
        icon={AlertTriangle}
        iconColor="text-red-500"
      />

      <KPICard
        title="Maintenance"
        value={fleetData.maintenanceNeeded}
        subtitle="Need service"
        icon={Wrench}
        iconColor="text-orange-500"
      />

      <KPICard
        title="Idle Bikes"
        value={fleetData.idle}
        subtitle="Available"
        icon={Clock}
        iconColor="text-gray-500"
      />
    </div>
  )
})
