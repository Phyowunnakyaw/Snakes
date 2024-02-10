import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function SnakesDetail() {

    let { id } = useParams();
    let { data : snakes , loading, error } = useFetch( `http://localhost:3000/snakes/${id}` )

  return (
         
         <div className=' relative p-6 max-w-6xl mx-auto space-y-6 font-ubuntu'>

             { snakes && 
             
             <div className= " flex py-20 "> 
            
                 <div className=" w-[30%] pb-[82px] space-y-4 ">

                     <div className=" inline-block  p-2 bg-bg">
                         <img src= { `/img/${snakes.id}.jpg` } alt="image" className=' w-60 h-36' />
                     </div>

                     <h3 className=' text-white font-bold ' > { snakes.MMName } </h3>
                     <h3 className=' text-sec font-bold' > { snakes.EngName } </h3>
 
                     <div className=" ">

                         <div className=' mb-4 inline-flex font-semibold p-2 bg-bg rounded-md opacity-100'> { snakes.IsPoison === 'Yes' ?
                             ( <p className=' text-red-500' > အဆိပ်ရှိ </p> ) : 
                             ( <p className=' text-blue-500'> အဆိပ်မရှိ </p> ) } 
                         </div>

                         <br/>

                         <div className=' inline-block font-semibold p-2 bg-bg rounded-md opacity-100'> { snakes.IsDanger === 'Yes' ?
                             ( <p className=' text-red-500' > အန္တရယ်ရှိ </p> ) : 
                             ( <p className=' text-blue-500'> အန္တရယ်မရှိ </p> ) } 
                         </div>

                     </div>  

                 </div>

                 <div className=" w-[70%] bg-bg p-8 pb-12 rounded-md opacity-85 ">

                     <p className='text-black leading-8 text-base font-semibold opacity-100'> { snakes.Detail } </p>

                 </div>
            
             </div>
              
             }

             <Link to='/snakes' className=" absolute right-6 bottom-6 "> 
                      
                  <button className=" p-1 px-3 text-base font-normal bg-sec rounded mt-4 hover:tracking-widest opacity-100"> Back </button>
                     
             </Link>



         </div>
  )
}
