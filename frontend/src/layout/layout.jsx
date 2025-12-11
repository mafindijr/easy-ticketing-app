import LandingPage from '../components/landing-page'
import Footer from '../components/Footer'

export default function layout({ children }) {
  return (
    <div>

       {/* Header Component */}
      <LandingPage />

      <main className='flex-1'>
        {children}
      </main>

      <Footer />
        
    </div>
  )
}
