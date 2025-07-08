import React from 'react'
import LandingPage from '../components/landing-page'
import Footer from '../components/Footer'
import ResetPassword from '../components/auth/sign-up/reset-password/reset-password'

export default function layout({ children }) {
  return (
    <div>

       {/* Header Component */}
      <LandingPage />

      <main className='flex-1'>
        {children}
      </main>

      <Footer />

      <ResetPassword />
        
    </div>
  )
}
