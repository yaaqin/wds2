import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'

export default function UserDashboard() {
  return (
    <div>
      <section className='sticky top-0 z-50'>
    <Navbar />
      </section>
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
  )
}
