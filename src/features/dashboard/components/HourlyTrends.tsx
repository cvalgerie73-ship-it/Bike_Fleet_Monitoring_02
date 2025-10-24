import { memo } from 'react'
import { Card } from '@/shared/components/ui'
import { BaseLineChart } from '@/shared/components/charts'
import type { HourlyData } from '@/shared/types'

interface HourlyTrendsProps {
  data: HourlyData[]
}

export const HourlyTrends = memo(function HourlyTrends({ data }: HourlyTrendsProps) {
  const lines = [
    { dataKey: 'rides', stroke: '#3b82f6', yAxisId: 'left', name: 'Rides' },
    { dataKey: 'avgVibration', stroke: '#ef4444', yAxisId: 'right', name: 'Avg Vibration' },
  ]

  return (
    <Card className="lg:col-span-2">
      <h2 className="text-lg font-bold text-gray-800 mb-3">Rides & Vibration Trends (24h)</h2>
      <BaseLineChart data={data} lines={lines} xAxisKey="hour" height={250} />
    </Card>
  )
})
