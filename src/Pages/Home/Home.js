import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Shared/Navigation/Navigation'

export const TextContext = createContext();
export default function Home() {
  const [open, setOpen]=useState(false);
  const [user, setUser] = useState({})
  // setUserC('Ambiya');
  const value = {user, setUser};
  
  return (
      <TextContext.Provider value={value}>
         <div>
        <Navigation setOpen={setOpen} open={open}></Navigation>
        <div className=''>
        <Outlet></Outlet>
        </div>
        <div>
          {user.email}
        </div>
    </div>
      </TextContext.Provider>  
      
        
  )
}
