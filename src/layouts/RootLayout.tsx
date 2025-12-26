import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { usePrefetch } from '../hooks/usePrefetch'
import { useScrollToTop } from '../hooks/useScrollToTop'

function RootLayout() {
  usePrefetch()
  useScrollToTop()
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800">
      <Navbar />
      <main className="flex-1">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout


