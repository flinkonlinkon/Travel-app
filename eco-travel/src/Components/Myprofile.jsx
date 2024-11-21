import React, { useContext } from 'react'
import { Apicon } from './ContextPro'
import Navbar from './Navbar'

export default function Myprofile() {
  let {user} = useContext(Apicon)
  console.log(user);
  
  return (
    <>
    <Navbar></Navbar>
    <div>
      <div><img src={user.img} alt="" /></div>
      <p className='text-xl  font-bold font-custom'>Name:{user.displayName}</p>
      <p className='text-xl  font-bold font-custom'>Email:{user.email}</p>
      <p className='text-xl  font-bold font-custom'>Email Verify: {user.emailVerified ? 'not verify' : "verify"}</p>

    </div>

    </>
  )
}
