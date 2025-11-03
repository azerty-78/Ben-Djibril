import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout


