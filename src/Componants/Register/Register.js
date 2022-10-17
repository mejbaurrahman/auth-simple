import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { app } from '../../Auth/Firebase.init';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const auth = getAuth(app);

export default function Register() {

  const [email , setEmail]= useState('');
  const [user , setUser]= useState({});
  const [name , setName]= useState('');
  const [password , setPassword]= useState('');
  

  const handleCreateUser =(e)=>{
    e.preventDefault();
    console.log('Creating ...')
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in 
      console.log('success');
      const user = result.user;
      alert('created successfully');
      const newUser = {...user, displayName: name};
      setUser(newUser);
      
      console.log(newUser);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
  
      const errorMessage = error.message;
      console.error(errorMessage)
      // ..
    });
  
  }
  const handleEmail = (event) =>{
    const email = event.target.value;
    setEmail(email);
  }
  const handlePassword = (event) =>{
    const password = event.target.value;

    setPassword(password)
}

const handleName = (event)=>{
  const name = event.target.value;
  console.log(name);
  setName(name)
}


return (
    <div className='container'>
        <div className='mt-5 border md:w-1/2 mx-auto border-2 border-black p-6 rounded'>
        <h3 className='text-3xl text-center my-3'>Register</h3>
        <form onSubmit={handleCreateUser}>
            <label className='text-xl font-light mr-2'>Name: </label>
            <input onChange={handleName} type="text" name="name" placeholder='name' className='px-3 py-2 border  border-black rounded' /><br />
            <label className='text-xl font-light mr-2'>Email: </label>
            <input onChange={handleEmail} type="email" required name="email"  placeholder='email' className='px-3 py-2 my-2 border border-black rounded' /><br />
            <label className='text-xl font-light mr-2'>password: </label>
            <input onChange={handlePassword} type="password" name="password" required placeholder='password' className='px-3 py-2 mb-2 border border-black rounded' /><br />
            

            <button type="submit" className='bg-black text-white px-4 py-2 rounded hover:bg-slate-700'>Register</button>

            
        </form>

        <p>Already Register <Link to='/login' className='underline text-blue-500'>Login</Link></p>
       
    
    </div>
    </div>
  )
}
