import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'

export default function UserDashboard() {
  return (
    <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
  )
}
