import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/shared/components/layout'
import { Loading } from '@/shared/components/feedback'

// Lazy load pages for code splitting
const Dashboard = lazy(() => import('@/features/dashboard'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
