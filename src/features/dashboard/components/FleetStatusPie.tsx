import { memo } from 'react'
import { Card } from '@/shared/components/ui'
import { BasePieChart } from '@/shared/components/charts'
import type { PieChartData } from '@/shared/types'

interface FleetStatusPieProps {
  data: PieChartData[]
}

export const FleetStatusPie = memo(function FleetStatusPie({ data }: FleetStatusPieProps) {
  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-800 mb-3">Fleet Status Distribution</h2>
      <BasePieChart data={data} height={250} />
    </Card>
  )
})
