import React, { useState } from 'react'
import { auth, googleProvider } from '../config/Firebase';
import { createUserWithEmailAndPassword ,signInWithPopup ,signOut} from 'firebase/auth';

export default function Auth() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const signIn = async()=>{
    try{
      await createUserWithEmailAndPassword(auth,email,password);
    }catch(err){
      console.error(err);
    }
  }
    console.log(auth?.currentUser?.email);
  const signGoogle = async()=>{
    try {
      await signInWithPopup(auth,googleProvider);
    }catch(err){
      console.error(err);
    }
  }
  
  const sign_Out = async()=>{
    try{
      await signOut(auth);
    }catch(err){
      console.error(err)
    }
  }
  return (
    <div className='form'>
        <h3>Please Sign In</h3>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' required />
        <input type="Password" onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' required />
        <button onClick={signIn}>Sign In</button>
        <button onClick={signGoogle}>Sign In with Google</button>
        <button onClick={sign_Out}>Log Out</button>
        
    </div>
  )
}
