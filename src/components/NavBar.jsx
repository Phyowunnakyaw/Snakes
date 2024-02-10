import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStaffSnake } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

  return (
         
         <div className=" p-6 max-w-6xl mx-auto border border-t-0 border-x-0 border-b-red-100 ">

            <NavLink className=' font-ubuntu flex justify-center items-center gap-2 active:text-red-500 '>

                 <FontAwesomeIcon icon= { faStaffSnake } className=' text-3xl text-sec' />

                 <h1 className=' text-2xl text-white'> Snakes </h1>

            </NavLink>

         </div>   
  )
}
