import React from 'react'
import Image from 'next/image'
const Design = () => {
  return (
    <div className='flex flex-col gap-y-6 md:flex-row items-center justify-between mx-4 md:mx-10 lg:mx-40 '>
        <img src="/images/pana.png" className='md:w-[40%]'></img>
        <div className='flex flex-col items-start gap-4 w-[50%] md:w-[60%]'>
            <h2 className='font-semibold text-2xl text-center '>How to design your site footer like we did</h2>
            <p className='text-[#717171] text-center sm:text-start'>One event calendar shared across National, Regional and Club events to simplify your event experience. Allowing you to create waiting lists, share data capture, issue credential for course completion, apply smart purchasing rules and much more.</p>
            <button className='mx-auto sm:mx-0 w-32 h-10 rounded bg-[#4CAF4F] text-white text-sm'>Learn More</button>
        </div>
        
    </div>
  )
}

export default Design
