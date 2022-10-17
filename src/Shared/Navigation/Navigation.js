import React, { useState } from 'react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export default function Navigation({setOpen, open}) {

    
  return (
   <div className='bg-black relative py-3'>
     <div className='container '>
    <div className='flex md:flex-row flex-col'>
    <div className='flex-none font-bold text-white text-4xl'>
     <div className='flex'>
     <Bars3CenterLeftIcon onClick={()=>setOpen(!open)} className='w-8 mx-3 md:hidden hover:cursor-pointer'></Bars3CenterLeftIcon><div> MAMA_JOHN</div>
     </div>
    </div>
    <div className='font-thin text-white text-xl flex-auto '>
    <nav>
        <ul className={`md:flex  md:justify-end md:items-center md:flex-row bg-black  w-full flex-col justify-start items-start md:static absolute duration-500 ease-in ${open? 'top-14 left-0':'left-0 top-[-140px]'}`}>
            <li className='list-none px-3 py-2 hover:bg-gray-800 rounded'>
                <Link to='/'>Home</Link>
            </li>
            <li className='list-none px-3 py-2 hover:bg-gray-800 rounded'>
                <Link to='/login'>Login</Link>
            </li>
            <li className='list-none px-3 py-2 hover:bg-gray-800 rounded'>
                <Link to='/register'>Register</Link>
            </li>
        </ul>
    </nav>
    </div>
    </div>
        
    </div>
   </div>
  )
}
