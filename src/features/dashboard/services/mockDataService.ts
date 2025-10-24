import type { FleetData, HourlyData, ZoneData, ActiveRide, RideStatus } from '@/shared/types'

// Generate mock fleet data
export const generateFleetData = (): FleetData => {
  const totalBikes = 3247
  const activeBikes = Math.floor(totalBikes * 0.68)
  const maintenanceNeeded = Math.floor(totalBikes * 0.12)
  const idle = totalBikes - activeBikes - maintenanceNeeded

  return {
    totalBikes,
    activeBikes,
    maintenanceNeeded,
    idle,
    todayRides: 8934,
    avgRideQuality: 7.4,
    highVibrationAlerts: 47,
  }
}

// Generate hourly ride data
export const generateHourlyData = (): HourlyData[] => {
  const hours: HourlyData[] = []
  for (let i = 0; i < 24; i++) {
    const baseRides =
      i >= 7 && i <= 9 ? 800 : i >= 17 && i <= 19 ? 900 : i >= 11 && i <= 14 ? 500 : 100
    hours.push({
      hour: `${i}:00`,
      rides: baseRides + Math.floor(Math.random() * 200),
      avgVibration: 15 + Math.random() * 25,
    })
  }
  return hours
}

// Generate zone data
export const generateZoneData = (): ZoneData[] => [
  { zone: 'Downtown', rides: 2847, avgQuality: 6.8, alerts: 18, color: '#ef4444' },
  { zone: 'North District', rides: 1923, avgQuality: 8.2, alerts: 5, color: '#22c55e' },
  { zone: 'East Side', rides: 1654, avgQuality: 5.9, alerts: 15, color: '#f59e0b' },
  { zone: 'West End', rides: 1389, avgQuality: 7.8, alerts: 6, color: '#3b82f6' },
  { zone: 'South Zone', rides: 1121, avgQuality: 7.1, alerts: 3, color: '#8b5cf6' },
]

// Generate active rides
export const generateActiveRides = (): ActiveRide[] => {
  const statuses: RideStatus[] = ['Normal', 'High Vibration', 'Normal', 'Normal', 'Maintenance Alert']
  const zones = ['Downtown', 'North District', 'East Side', 'West End', 'South Zone']
  const rides: ActiveRide[] = []

  for (let i = 0; i < 12; i++) {
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    rides.push({
      bikeId: `BK-${1000 + i}`,
      zone: zones[Math.floor(Math.random() * zones.length)],
      duration: `${5 + Math.floor(Math.random() * 25)} min`,
      vibration: 15 + Math.random() * 45,
      status: status,
    })
  }
  return rides
}
