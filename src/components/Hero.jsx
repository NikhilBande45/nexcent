import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles


const Hero = () => {
  return (
    <>
        

<div className='flex justify-center py-10 bg-[#F5F7FA] dark:bg-[#1C1C1C] '> {/* Center the carousel container */}
            <Carousel className='w-full max-w-4xl' showThumbs={false} showStatus={false} showArrows={false}>
                <div className='flex flex-col lg:flex-row items-center gap-6'>
                    <div className='flex flex-col items-center sm:items-start justify-center sm:justify-start gap-3'>
                        <div className='text-center sm:text-start font-semibold text-4xl'>
                            <div className='dark:text-white'>Lessons and insights</div>
                            <div className='text-[#4CAF4F]'>from 8 years</div>
                        </div>
                        <p className='text-[#717171] text-center md:text-start'>
                            Where to grow your business as a photographer: site or social media?
                        </p>
                        <button className='w-20 h-10 rounded bg-[#4CAF4F] text-white text-sm hover:bg-[#388E3B]'>
                            Register
                        </button>
                    </div>
                    <div className='w-full max-w-sm'>
                        <Image
                            src="/images/Hero.png"
                            alt="Image 1"
                            width={500}
                            height={300}
                            layout='responsive'
                            objectFit='cover'
                            className='rounded'
                        />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-6'>
                    <div className='flex flex-col items-center sm:items-start justify-center sm:justify-start gap-3'>
                       
                        <div className='font-semibold text-4xl text-center sm:text-start'>
                            <div className='dark:text-white'>Lessons and insights</div>
                            <div className='text-[#4CAF4F]'>from 8 years</div>
                        </div>
                       
                        <p className='text-[#717171] text-center md:text-start'>
                            Where to grow your business as a photographer: site or social media?
                        </p>
                        <button className='w-20 h-10 rounded bg-[#4CAF4F] text-white text-sm hover:bg-[#388E3B]'>
                            Register
                        </button>
                    </div>
                    <div className='w-full max-w-sm'>
                        <Image
                            src="/images/Frame 35 (1).png"
                            alt="Image 1"
                            width={500}
                            height={300}
                            layout='responsive'
                            objectFit='cover'
                            className='rounded'
                        />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-6'>
                    <div className='flex flex-col items-center sm:items-start justify-center sm:justify-start gap-3'>
                        
                        <div className='font-semibold text-4xl text-center sm:text-start'>
                            <div className='text-white'>Lessons and insights</div>
                            <div className='text-[#4CAF4F]'>from 8 years</div>
                        </div>
                        
                        <p className='text-[#717171] text-center md:text-start'>
                            Where to grow your business as a photographer: site or social media?
                        </p>
                        <button className='w-20 h-10 rounded bg-[#4CAF4F] text-white text-sm hover:bg-[#388E3B]'>
                            Register
                        </button>
                    </div>
                    <div className='w-full max-w-sm'>
                        <Image
                            src="/images/pana.png"
                            alt="Image 1"
                            width={500}
                            height={300}
                            layout='responsive'
                            objectFit='cover'
                            className='rounded'
                        />
                    </div>
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero
