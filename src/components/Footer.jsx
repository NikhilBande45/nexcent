import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-[#263238] text-[#F5F7FA] md:px-36 md:py-8 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6' >
        <div className='flex flex-col items-center justify-center md:items-start md:justify-start gap-y-4 w-3/10 '>
            <div className='flex gap-3'>
                <Image src="/images/Icon.png" width={30} height={30} />
                <h2 className='font-semibold text-2xl'>Nexcent</h2>
            </div>

            <div className='text-sm text-[#F5F7FA]'>
                <p>Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
            </div>
            

            <div className='flex gap-2'>
                <Image src="/images/instgram.png" width={30} height={30}></Image>
                <Image src="/images/twitter.png" width={30} height={30}></Image>
                <Image src="/images/dribble.png" width={30} height={30}></Image>
                <Image src="/images/youtube.png" width={30} height={30}></Image>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center md:items-start md:justify-start gap-3 w-2/10 '>
            <h2 className='font-semibold text-md'>Company</h2>
            <ul className='flex flex-col gap-1 text-sm text-[#F5F7FA]'>
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testinomials</li>
            </ul>
        </div>

        <div className='flex flex-col items-center justify-center md:items-start md:justify-start gap-3 w-2/10 '>
            <h2 className='font-semibold text-md'>Support</h2>
            <ul className='flex flex-col gap-1 text-sm text-[#F5F7FA]'>
                <li className='text-[#F5F7FA]'>Help Center</li>
                <li>Terms of servive</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
            </ul>
        </div>

        <div className='flex flex-col items-center justify-center md:items-start md:justify-start gap-3 w-3/10 '>
            <h2 className='font-semibold text-md'>Stay up to date</h2>
            <input type='text' placeholder='Your email address' className='bg-[#D9DBE1] rounded-sm text-sm p-1  outline-none text-black' />
        </div>
    </div>
  )
}

export default Footer
