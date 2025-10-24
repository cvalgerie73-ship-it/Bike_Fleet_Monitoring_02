// Fleet Data Types
export interface FleetData {
  totalBikes: number
  activeBikes: number
  maintenanceNeeded: number
  idle: number
  todayRides: number
  avgRideQuality: number
  highVibrationAlerts: number
}

// Ride Data Types
export interface HourlyData {
  hour: string
  rides: number
  avgVibration: number
}

export interface ZoneData {
  zone: string
  rides: number
  avgQuality: number
  alerts: number
  color: string
}

export interface ActiveRide {
  bikeId: string
  zone: string
  duration: string
  vibration: number
  status: RideStatus
}

export type RideStatus = 'Normal' | 'High Vibration' | 'Maintenance Alert'

// Chart Data Types
export interface PieChartData {
  name: string
  value: number
  color: string
}

// Bike Types
export interface Bike {
  id: string
  status: BikeStatus
  location: Location
  vibrationLevel: number
  lastMaintenance: Date
  totalRides: number
}

export type BikeStatus = 'active' | 'idle' | 'maintenance' | 'offline'

export interface Location {
  latitude: number
  longitude: number
  zone: string
}

// Quality Score Types
export type QualityScore = number // 0-10

export interface QualityMetrics {
  score: QualityScore
  trend: 'up' | 'down' | 'stable'
  color: string
}
