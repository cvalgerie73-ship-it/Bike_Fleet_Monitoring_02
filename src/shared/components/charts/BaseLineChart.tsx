import { memo } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface DataPoint {
  [key: string]: string | number
}

interface BaseLineChartProps {
  data: DataPoint[]
  lines: {
    dataKey: string
    stroke: string
    yAxisId?: string
    name?: string
  }[]
  height?: number
  xAxisKey: string
}

export const BaseLineChart = memo(function BaseLineChart({
  data,
  lines,
  height = 250,
  xAxisKey,
}: BaseLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey={xAxisKey} stroke="#6b7280" style={{ fontSize: '12px' }} />
        <YAxis yAxisId="left" stroke="#6b7280" style={{ fontSize: '12px' }} />
        <YAxis yAxisId="right" orientation="right" stroke="#ef4444" style={{ fontSize: '12px' }} />
        <Tooltip />
        {lines.map((line) => (
          <Line
            key={line.dataKey}
            yAxisId={line.yAxisId || 'left'}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.stroke}
            strokeWidth={2}
            dot={false}
            name={line.name || line.dataKey}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
})
