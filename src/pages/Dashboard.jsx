import React from 'react'
import { Outlet } from "react-router-dom";
import entrance from '../assets/entrance.jfif'

function Dashboard() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      <img
  src={entrance}
  alt="test"
  className="absolute inset-0 w-full h-full object-cover"
/>

      
      <div className="absolute inset-0 bg-black/40 " />

      
      <div className="relative z-10 p-20">
        <Outlet />
      </div>

    </div>
  )
}

export default Dashboard
