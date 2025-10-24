import { memo } from 'react'
import { useFleetData } from './hooks/useFleetData'
import { KPICards } from './components/KPICards'
import { HourlyTrends } from './components/HourlyTrends'
import { FleetStatusPie } from './components/FleetStatusPie'
import { ZonePerformance } from './components/ZonePerformance'
import { LiveRideMonitor } from './components/LiveRideMonitor'
import { formatNumber } from '@/shared/utils'

export const Dashboard = memo(function Dashboard() {
  const { fleetData, hourlyData, zoneData, activeRides, pieData, currentTime, isLoading } =
    useFleetData()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Bike Fleet Control Center</h1>
            <p className="text-gray-600">
              Real-time monitoring of {formatNumber(fleetData.totalBikes)} bikes across all zones
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Last updated</div>
            <div className="text-lg font-semibold text-gray-800">
              {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <KPICards fleetData={fleetData} />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <HourlyTrends data={hourlyData} />
          <FleetStatusPie data={pieData} />
        </div>

        {/* Zone Performance & Live Monitor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ZonePerformance zones={zoneData} />
          <LiveRideMonitor rides={activeRides} />
        </div>
      </div>
    </div>
  )
})

export default Dashboard
