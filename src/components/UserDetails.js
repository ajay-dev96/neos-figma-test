import React from 'react'

export default function UserDetails() {
  return (
    <div className='flex-1 '>
      <h1 className='my-5 text-lg md:mt-0 md:text-3xl font-semibold'>Your Details</h1>
      {/* Details */}
      <div className=' border md:mt-8 p-5 rounded-2xl'>
        <TwoColumnContainer
          heading1={"First Name"}
          heading2={"Last Name"}
          data1={"Cameron"}
          data2={"Williamson"}
        />
        <Divider />
        <TwoColumnContainer
          heading1={"Email Address"}
          heading2={"Phone Number"}
          data1={"cameron@gmail.com"}
          data2={"(406)) 555-0120"}
        />
        <Divider />
        <DetailContainer
          heading={"CUPS"}
          data={"C000000000000000213P"}
          single={true}
        />
        <Divider />
        <DetailContainer
          heading={"Address"}
          data={"2972 Westheimer Rd"}
          single={true}
        />
        <Divider />
        <TwoColumnContainer
          heading1={"Postcode"}
          heading2={"City"}
          data1={"984 493"}
          data2={"New York City, NY"}
        />
        {/* <DetailContainer heading={"First Name"} data={"Cameron"}/> */}
      </div>
    </div>
  )
}

function TwoColumnContainer({ heading1, data1, heading2, data2 }) {
  return (
    <div className='flex flex-col md:flex-row justify-between'>
      <DetailContainer heading={heading1} data={data1} />
      <div className='h-[0.5px] bg-gray-200 my-3 md:hidden' />
      <DetailContainer heading={heading2} data={data2} />
    </div>
  )
}

function DetailContainer({ heading, data, single }) {
  return (
    <div className={!single && 'flex-1'}>
      <p className='font-semibold'>{heading}</p>
      <p className='font-light text-gray-600'>{data}</p>
    </div>
  )
}

function Divider() {
  return <div className='h-[0.5px] bg-gray-200 my-3' />
}