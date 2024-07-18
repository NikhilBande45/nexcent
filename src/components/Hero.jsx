import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
        <div className='py-20 mx-20'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-20'>
                <div className='flex flex-col items-start gap-3 '>
                    <div className='font-semibold text-4xl max-w-sm'>Lessons and insights <span className='text-[#4CAF4F]'>from 8 years</span></div>
                    <p className='text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
                    <button className='w-20 h-10 rounded bg-[#4CAF4F] text-white text-sm'>Register</button>
                </div>

                <div>
                    <Image src="/images/Hero.png" width={300} height={300}></Image>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Hero
