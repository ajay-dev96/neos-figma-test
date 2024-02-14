import React from 'react'
import UserDetails from './UserDetails'
import OrderAmount from './OrderAmount'
import Steps from './Steps'
import AgreeAndGenerate from './AgreeAndGenerate'

export default function OrderDetails() {
  return (
    <div className='p-2 px-4 md:p-12 md:pt-3 bg-white rounded-2xl flex flex-col gap-2'>
      {/* TO DO - STEPS */}
      <Steps />
      <div className='flex flex-col-reverse md:flex-row gap-2 '>
        <UserDetails />
        <OrderAmount />
      </div>

      <AgreeAndGenerate />

    </div>

  )
}






