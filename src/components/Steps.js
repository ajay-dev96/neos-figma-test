import React from 'react'

export default function Steps({data}) {

  return (
    <div className="flex justify-between items-center mt-5 self-center w-[100%] md:w-[55%] my-5">
    {/* Step 1 */}
    <div className="flex flex-col md:flex-row items-center">
      <div className="rounded-full bg-[#FD7C7C] text-white w-8 h-8 flex items-center justify-center font-bold mx-0 my-2 md:mx-2 md:my-0">
        1
      </div>
      <div className="ml-1">
        <h3 className="text-xs font-semibold">Receive Offer</h3>
      </div>
    </div>
    {/* Line 1 */}
    <div className="flex-1 h-[2px] bg-[#FD7C7C] mx-1"></div>
    {/* Step 2 */}
    <div className="flex flex-col md:flex-row  items-center">
      <div className="rounded-full bg-[#FD7C7C] text-white w-8 h-8 flex items-center justify-center font-bold mx-0 my-2 md:mx-2 md:my-0">
        2
      </div>
      <div className="ml-1">
        <h3 className="text-xs font-semibold">Sign Contract</h3>
      </div>
    </div>
    {/* Line 2 */}
    <div className="flex-1 h-[2px] bg-gray-300 mx-1"></div>
    {/* Step 3 */}
    <div className="flex flex-col md:flex-row items-center">
      <div className="rounded-full bg-gray-300 text-black w-8 h-8 flex items-center justify-center font-bold mx-0 my-2 md:mx-2 md:my-0">
        3
      </div>
      <div className="ml-1">
        <h3 className="text-xs font-semibold">Enjoy Solar</h3>
      </div>
    </div>
  </div>  
  )
}


/**
 * {
 *  name,
 *  completed
 * }
 * */ 