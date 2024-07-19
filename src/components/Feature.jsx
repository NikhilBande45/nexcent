import React from 'react'
import Image from 'next/image'
const Feature = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between mx-4 md:mx-10 lg:mx-40 '>
        <img src="/images/Frame 35 (1).png" className='md:w-[40%]' ></img>
        <div className='flex flex-col items-start gap-4 w-[50%] md:w-[60%]'>
            <h2 className='font-semibold text-2xl text-center sm:text-start dark:text-white'>The unseen of spending three years at Pixelgrade</h2>
            <p className='text-[#717171] text-center sm:text-start'>When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.</p>
            <button className='mx-auto sm:mx-0 w-32 h-10 rounded bg-[#4CAF4F] text-white text-sm hover:bg-[#388E3B]'>Learn More</button>
        </div>
    </div>
  )
}

export default Feature
