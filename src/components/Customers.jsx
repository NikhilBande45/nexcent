import React from 'react'
import Image from 'next/image'

const Customers = () => {
  return (

    <div className='bg-[#F5F7FA]'>
      <div className='flex flex-col py-6 lg:flex-row items-center justify-center gap-8 mx-20'>
          <img src="/images/customer.png" width={400} height={400} />
          <div className='flex flex-col gap-y-2 items-start'>
              <p className='text-[#717171]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
              <h2 className='text-[#4CAF4F]'>Tim Smith</h2>
              <p className='text-[#717171]'>British Dragon Boat Racing Association</p>
              <div className='grid grid-cols-6 gap-14'>
                  <Image src="/images/client_1.png" width={50} height={50}/>
                  <Image src="/images/client_2.png" width={50} height={50}/>
                  <Image src="/images/client_3.png" width={50} height={50}/>
                  <Image src="/images/client_4.png" width={50} height={50}/>
                  <Image src="/images/client_5.png" width={50} height={50}/>
                  <Image src="/images/client_6.png" width={50} height={50}/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Customers
