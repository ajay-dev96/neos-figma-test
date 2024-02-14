import React from 'react'
import amountImage from '../assets/totalAmount.png'
export default function OrderAmount() {
  return (
    <div className='flex-1  flex flex-col items-center'>
      <img alt='' className='h-auto w-[75%] object-contain self-center ' src={amountImage}/>
      <p className='text-3xl font-semibold'>Price to Pay: €3,600.00</p>
    </div>
  )
}

