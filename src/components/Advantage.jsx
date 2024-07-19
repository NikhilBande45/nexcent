import Image from 'next/image'
import React from 'react'

const Advantage = () => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center mx-20 my-10'>
      <h2 className='text-center font-semibold text-2xl dark:text-white'>Caring is the new marketing</h2>
      <p className='text-center text-[#717171] md:w-[550px]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
      <div>
        <div className='flex flex-col lg:flex-row gap-32'>
            <div className='relative'>
                <Image src="/images/advantage_1.png" width={300} height={320}/>
                <div className='flex flex-col gap-3 py-3 bg-[#F5F7FA] absolute z-1 top-40 left-[10%] w-[240px] h-[140px] rounded-md'>
                    <h2 className='text-center'>Creating Streamlined Safeguarding Processes with OneRen</h2>
                    <button>Readmore</button>
                </div>
            </div>

            <div className='relative'>
                <Image src="/images/advantage_3.png" width={300} height={300}/>
                <div className='flex flex-col gap-3 py-3 bg-[#F5F7FA] absolute z-1 top-40 left-[10%] w-[240px] h-[140px] rounded-md'>
                    <h2 className='text-center'>What are your safeguarding responsibilities and how can you manage them?</h2>
                    <button>Readmore</button>
                </div>
            </div>

            <div className='relative'>
                <Image src="/images/advantage_2.png" width={300} height={300}/>
                <div className='flex flex-col gap-3 py-3 bg-[#F5F7FA] absolute z-1 top-40 left-[10%] w-[240px] h-[140px] rounded-md'>
                    <h2 className='text-center '>Revamping the Membership Model with Triathlon in Australia</h2>
                    <button>Readmore</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Advantage

