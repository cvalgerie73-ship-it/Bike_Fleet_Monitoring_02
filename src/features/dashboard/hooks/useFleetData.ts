import { useState, useEffect, useMemo } from 'react'
import {
  generateFleetData,
  generateHourlyData,
  generateZoneData,
  generateActiveRides,
} from '../services/mockDataService'
import type { FleetData, HourlyData, ZoneData, ActiveRide, PieChartData } from '@/shared/types'

export interface UseFleetDataReturn {
  fleetData: FleetData
  hourlyData: HourlyData[]
  zoneData: ZoneData[]
  activeRides: ActiveRide[]
  pieData: PieChartData[]
  currentTime: Date
  isLoading: boolean
}

export function useFleetData(): UseFleetDataReturn {
  const [fleetData, setFleetData] = useState<FleetData>(generateFleetData())
  const [hourlyData] = useState<HourlyData[]>(generateHourlyData())
  const [zoneData] = useState<ZoneData[]>(generateZoneData())
  const [activeRides, setActiveRides] = useState<ActiveRide[]>(generateActiveRides())
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const [isLoading] = useState(false)

  // Simulate real-time updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
      setFleetData(generateFleetData())
      setActiveRides(generateActiveRides())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Memoize pie chart data to prevent unnecessary recalculations
  const pieData = useMemo<PieChartData[]>(
    () => [
      { name: 'Active', value: fleetData.activeBikes, color: '#22c55e' },
      { name: 'Idle', value: fleetData.idle, color: '#94a3b8' },
      { name: 'Maintenance', value: fleetData.maintenanceNeeded, color: '#ef4444' },
    ],
    [fleetData.activeBikes, fleetData.idle, fleetData.maintenanceNeeded]
  )

  return {
    fleetData,
    hourlyData,
    zoneData,
    activeRides,
    pieData,
    currentTime,
    isLoading,
  }
}
