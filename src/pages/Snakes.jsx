import React from 'react'
import SnakesList from '../components/SnakesList';
import { Link } from 'react-router-dom'

export default function Snakes() {
  return (
         
         <div className=' relative p-6 max-w-6xl mx-auto space-y-6 font-ubuntu'>
          
             <SnakesList />

             <Link to='/' className=" absolute right-6 bottom-6 "> 
                      
                  <button className=" p-1 px-3 text-base font-normal bg-sec rounded mt-4 hover:tracking-widest opacity-100"> Back </button>
                       
             </Link>

         </div>
  )
}
