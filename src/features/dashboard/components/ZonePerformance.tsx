import { memo } from 'react'
import { Card } from '@/shared/components/ui'
import { MapPin, AlertTriangle } from 'lucide-react'
import { getQualityColor } from '@/shared/utils'
import type { ZoneData } from '@/shared/types'

interface ZonePerformanceProps {
  zones: ZoneData[]
}

export const ZonePerformance = memo(function ZonePerformance({ zones }: ZonePerformanceProps) {
  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-800 mb-3">Zone Performance</h2>
      <div className="space-y-3">
        {zones.map((zone, idx) => (
          <div key={idx} className="border-l-4 pl-3 py-2" style={{ borderColor: zone.color }}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: zone.color }} />
                <span className="font-semibold text-gray-800">{zone.zone}</span>
              </div>
              <span className="text-sm font-medium text-gray-600">{zone.rides} rides</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                Quality:{' '}
                <span className={`font-semibold ${getQualityColor(zone.avgQuality)}`}>
                  {zone.avgQuality}/10
                </span>
              </span>
              {zone.alerts > 0 && (
                <span className="text-red-600 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> {zone.alerts} alerts
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
})
