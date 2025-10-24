import { Suspense, lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './providers/ErrorBoundary'
import { Loading } from '@/shared/components/feedback'

// Lazy load routes for code splitting
const AppRoutes = lazy(() => import('./router/routes'))

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
