import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {GoogleAuthProvider,FacebookAuthProvider,sendPasswordResetEmail, signInWithPopup, GithubAuthProvider,signInWithEmailAndPassword} from 'firebase/auth'
import {getAuth, signOut} from 'firebase/auth'
import { app } from '../../Auth/Firebase.init';
import { TextContext } from '../../Pages/Home/Home';

const auth = getAuth(app);
export default function Login() {
  // const [user, setUser] = useState({});
  const user = useContext(TextContext);
  const setUser = user.setUser;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const providerGoogle = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
  const providerGithub = new GithubAuthProvider();
  

  console.log(user);
  const logOut = ()=>{
      signOut(auth)
      .then(()=> {
         setUser({})
      }).catch((error)=>{
        console.log(error.message)
        setUser({})
      })    
  }
  const handleLoginWithGoogle = ()=>{
    signInWithPopup(auth, providerGoogle)
    .then((result) => {
       console.log('success');
      // setUser(result.user);
    }).catch((error)=>{
      console.error(error.message);
    })
  }
  const handleLoginWithFacebook = ()=>{
    signInWithPopup(auth, providerFacebook)
    .then((result) => {
      console.log('success');
      const user = result.user;
      setUser(user);
    }).catch((error)=>{
      console.error(error.message);
    })
  }
  const handleLoginWithGithub = ()=>{
    signInWithPopup(auth, providerGithub)
    .then((result) => {
      console.log('success');
      const user = result.user;
      setUser(user);
    }).catch((error)=>{
      console.error(error.message);
    })
  }
  const handleLoginWithTwitter = ()=>{

  }

  const handleEmail = (event) =>{
        const email = event.target.value;
        setEmail(email);
  }
  const handlePassword = (event) =>{
        const password = event.target.value;
    
        setPassword(password);
  }

  const handleLogin =(e)=>{
  e.preventDefault();
  console.log(email, password);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    alert('success');
    const user = userCredential.user;
    setUser(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.error(error);
    const errorMessage = error.message;
  });

  }

  const passwordRecover =()=>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    alert('Mail send to your email', email);
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  return (
    <div className='container'>
        <div className='mt-5 border md:w-1/2 mx-auto border-2 border-black p-6 rounded'>
        <h3 className='text-3xl text-center my-3'>Login</h3>
        <form onSubmit={handleLogin} action="">
            <label className='text-xl font-light mr-2'>Email: </label>
            <input onChange={handleEmail} type="email" required name="email" id="" placeholder='email' className='px-3 py-2 my-2 border border-black rounded' /><br />
            <label className='text-xl font-light mr-2'>password: </label>
            <input onChange={handlePassword} type="password" name="password" id="" required placeholder='password' className='px-3 py-2 mb-2 border border-black rounded' /><br />
            

            <button type="submit" className='bg-black text-white px-4 py-2 rounded hover:bg-slate-700'>Login</button>
        </form>
        <p>New User <Link to='/register' className='underline text-blue-500'>Register</Link></p>
        <p>Forget Password <button onClick={passwordRecover} className='px-3 py-2 mt-2 bg-black text-white'>Recover Password</button></p>
        <button onClick={handleLoginWithFacebook} className='inline-block mx-4 my-2 p-2 border border-black rounded hover:font-semibold'><FontAwesomeIcon icon={faFacebook} /></button>
        <button onClick={handleLoginWithGoogle} className='inline-block mx-4 my-2 p-2 border border-black rounded hover:font-semibold'><FontAwesomeIcon icon={faGoogle} /></button>
        <button onClick={handleLoginWithGithub} className='inline-block mx-4 my-2 p-2 border border-black rounded hover:font-semibold'><FontAwesomeIcon icon={faGithub} /></button>
        <button onClick={handleLoginWithTwitter} className='inline-block mx-4 my-2 p-2 border border-black rounded hover:font-semibold'><FontAwesomeIcon icon={faTwitter} /></button>
        <button onClick={logOut} className='inline-block mx-4 my-2 p-2 border border-black rounded hover:font-semibold'>Logout</button>

    </div>
    </div>
  )
}
