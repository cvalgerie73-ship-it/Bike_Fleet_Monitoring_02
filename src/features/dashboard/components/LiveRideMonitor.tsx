import { memo } from 'react'
import { Card, Badge } from '@/shared/components/ui'
import { Bike } from 'lucide-react'
import type { ActiveRide } from '@/shared/types'

interface LiveRideMonitorProps {
  rides: ActiveRide[]
}

const RideCard = memo(function RideCard({ ride }: { ride: ActiveRide }) {
  const getVariant = (status: string) => {
    if (status === 'Normal') return 'success'
    if (status === 'High Vibration') return 'danger'
    return 'warning'
  }

  return (
    <div className="border border-gray-200 rounded p-3 hover:bg-gray-50 transition">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Bike className="w-4 h-4 text-gray-600" />
          <span className="font-mono font-semibold text-sm text-gray-800">{ride.bikeId}</span>
        </div>
        <Badge variant={getVariant(ride.status)}>{ride.status}</Badge>
      </div>
      <div className="flex items-center justify-between text-xs text-gray-600">
        <span>
          {ride.zone} • {ride.duration}
        </span>
        <span
          className={`font-medium ${ride.vibration > 40 ? 'text-red-600' : 'text-green-600'}`}
        >
          {ride.vibration.toFixed(1)} vib
        </span>
      </div>
    </div>
  )
})

export const LiveRideMonitor = memo(function LiveRideMonitor({ rides }: LiveRideMonitorProps) {
  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-800">Live Ride Monitor</h2>
        <span className="text-xs text-gray-500">Updating every 5s</span>
      </div>
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {rides.map((ride, idx) => (
          <RideCard key={`${ride.bikeId}-${idx}`} ride={ride} />
        ))}
      </div>
    </Card>
  )
})
