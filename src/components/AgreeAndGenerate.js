import React from 'react'

export default function AgreeAndGenerate() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className='flex flex-1 items-center my-3 md:my-0 '>
        <input
          type="checkbox"
          className="mr-2 form-checkbox h-5 w-5 text-indigo-600"
        />
        <label htmlFor="agreeCheckbox" className="text-gray-700 font-light">
          By ticking this box, you are confirming that you have read, understood, and agreed to our <span className='underline text-blue-500'>Terms of Service</span> .
        </label>
      </div>
      <div className='flex flex-1 items-center my-4 justify-center '>
        <button
          className="bg-[#FD7C7C]  text-white w-[220px] h-[54px] focus:outline-none focus:shadow-outline rounded-xl"
        >
          Generate Contract
        </button>
      </div>

    </div>
  )
}