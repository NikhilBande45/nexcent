import React from 'react'
import Image from 'next/image'
const Community = () => {
  return (
    <div className='mx-20 flex flex-col gap-2 items-center justify-center mt-10'>
      <h2 className='text-2xl max-w-sm text-center font-semibold dark:text-white'>Manage your entire community in a single system</h2>
      <p className='text-[#717171]'>Who is Nextcent suitable for?</p>
      <div className='flex flex-col gap-y-4 items-center justify-center md:flex-row md:gap-32'>
        <div className='flex flex-col gap-1 items-center justify-center max-w-[320px] '>

            <Image src="/images/community_1.png" width={60} height={60}/>
            <h2 className='text-xl font-semibold w-[100px] dark:text-white'>Membership Organisations</h2>
            <p className='text-[#717171] text-center'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        <div className='flex flex-col gap-1 items-center justify-center max-w-[320p]'>
            <Image src="/images/community_2.png" width={60} height={60} />
            <h2 className='text-xl text-center font-semibold w-[100px] dark:text-white'>National Associations</h2>
            <p className='text-[#717171] text-center'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        <div className='flex flex-col gap-1 items-center justify-center p-5  max-w-[320px]'>
            <Image src="/images/community_3.png" width={60} height={60} />
            <h2 className='text-xl text-center font-semibold w-[120px] dark:text-white'>Clubs And Groups</h2>
            <p className='text-[#717171] text-center'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </div>
  )
}

export default Community
