import React from 'react'
import LandingPage from '../components/landing-page'
import Footer from '../components/Footer'
import CreateEventForm from '../components/create-event'

export default function layout({ children }) {
  return (
    <div>

       {/* Header Component */}
      <LandingPage />

      <main className='flex-1'>
        {children}
      </main>

      <Footer />
      <CreateEventForm />
        
    </div>
  )
}
