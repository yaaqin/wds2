import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'

export default function UserDashboard() {
  return (
    <div className='flex flex-col min-h-screen'>
      <section className='sticky top-0 z-50'>
        <Navbar />
      </section>
      <main className="flex-grow items-center justify-center">
        <Outlet />
      </main>
      <section className='bottom-0'>
        <Footer />
      </section>
    </div>
  )
}
