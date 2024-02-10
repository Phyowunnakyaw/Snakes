import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from "../../components/NavBar"

export default function layout() {
  return (
        
        <div className=' bg-cover bg-no-repeat bg-home-bg'>

             <NavBar />

            <div> 

                <Outlet />

            </div>

        </div>
  )
}
