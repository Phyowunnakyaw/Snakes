import React from 'react'
import first from "../assets/first.avif";
import second from "../assets/second.avif";
import third from "../assets/third.avif"
import { Link } from 'react-router-dom';

export default function SnakesBox() {
  return (
        
         <div className=' space-y-2'>

             <p className="text-white leading-8 text-sm " > သဘာဝတွင်တွေ့ရသော မြွေအချို့ </p>

             <div className=" p-4 grid grid-cols-3 place-items-center ">

                 <img src={ first } alt="" className=" w-36 rounded-md scale-100 transition-all shadow hover:scale-125 hover:shadow-white" />
                 <img src={ second } alt="" className=" w-36 rounded-md scale-100 transition-all shadow hover:scale-125 hover:shadow-white hover:opacity-100" />
                 <img src={ third } alt="" className=" w-36 rounded-md scale-100 transition-all shadow hover:scale-125 hover:shadow-white" />

             </div>

             <Link to='/snakes' >
              
                  <button className=' p-1 px-3 text-base font-normal bg-sec rounded mt-4 hover:tracking-widest '> Snakes </button>

             </Link>

         </div>
  )
}
