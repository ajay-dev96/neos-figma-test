import React from 'react'
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <div className='flex justify-between py-16 align-middle'>
      <img alt="" src={logo} className=' max-h-[40px] object-contain'/>
      <div className='flex gap-3'>
        <button className=' text-white font-bold px-5 h-10 rounded-lg'>FAQs</button>
        <button className='bg-white font-bold px-5 h-10 rounded-lg'>English</button>
      </div>
    </div>
  )
}
