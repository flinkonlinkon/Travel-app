import React, { useContext } from 'react'
import { Apicon } from './ContextPro'
import Navbar from './Navbar'

export default function Myprofile() {
  let {user} = useContext(Apicon)
  return (
    <>
    <Navbar></Navbar>
    <div>
      <div><img src={user.img} alt="" /></div>
      <p className='text-xl  font-bold font-custom'>Name:{user.displayName}</p>

    </div>

    </>
  )
}
