import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStaffSnake } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function SnakesList() {

     let [ snakes, setsnakes ] = useState( null );
     let [ page, setPage ] = useState( 1 );
     let [ loading, setLoading ] = useState( false );
     let [ error, setError ] = useState( null );
     
     useEffect ( () => {
        fetch( `http://localhost:3000/snakes?_page=${page}&_limit=8` )
       .then( res => {
          if( !res.ok ) {
            throw Error ( 'Something went wrong......' )
       } return res.json();
       } )
       .then( data => {
          setsnakes( data );
          setError( null );
          setLoading( false )
       } )
       .catch( err => {
          setError( err.message )
       } )
     }, [ page ] );


     const next = () => {
         if ( page === 4 ) {
           return;
         } else {
           setPage( page + 1  );
         }
     };
 
     const prev = () => {
       if ( page === 1 ) {
         return;
       } else {
       setPage( page - 1  );
       }
     };

  return (
         
         <div className=' space-y-8 mb-[70px] '>

             { loading && <p> Loading..... </p> }

             <div className='flex justify-between items-center gap-4 mt-3 ' >

                 <button className={ page === 1 ? ('opacity-0') : ( ' flex justify-center items-center gap-2 rounded p-2 bg-sec ' ) } type='button' onClick={ prev }>
                        <FontAwesomeIcon icon={ faArrowLeft } className=' text-base' />
                 </button>
                 <button className={ page === 4 ? ('hidden') : ( ' flex justify-center items-center gap-2 rounded p-2 bg-sec ' ) } onClick={ next } >
                        <FontAwesomeIcon icon={ faArrowRight } className=' text-base' />
                 </button>

             </div>

             { !!snakes &&
             
               <div className= { snakes.length > 2 ? ( 'grid grid-cols-4 gap-4 place-items-center'  )  : ( ' grid grid-cols-1 gap-4 place-content-center place-items-center ' )  } >

                   { snakes.map ( snake => (

                     <Link to={ `/snakes/${snake.id}` } key={ snake.id } >

                        <div className=' bg-bg p-4 space-y-4 rounded opacity-85 '  >

                             <div className=" opacity-100 ">

                                 <img src= { snake.Img } alt="Imgae" className=' w-60 h-36' />

                             </div>

                             <p className=' text-main font-bold opacity-100' > { snake.MMName } </p>

                        </div>

                     </Link>    

                   )  ) }

               </div>

             }

         </div>
  )
}
