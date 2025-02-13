import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='px-4 md:px-8 lg:px-16 lx:px-32 2xl'>
      <Navbar/>
      <Outlet/> {/* it shows all routed pages */}
    </div>
  )
}

export default MainLayout
