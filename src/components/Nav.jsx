import React, { useEffect, useState } from 'react'
import Image from 'next/image';
const Nav = () => {

  const [theme , setTheme] = useState("light");
  
  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []);

  // Update the theme when the state changes
  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined") {
      const element = document.documentElement;
      if (theme === "dark") {
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
      } else {
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
      }
    }
  }, [theme]);
  return (
    <>
      <div className=''>
        <div className='flex items-center justify-between mx-4 sm:mx-10 md:mx-20 py-3'>
          <div className='flex gap-1'>
            <Image src="/images/Icon.png" width={50} height={50}></Image>
            <p className='text-[#717171] dark:text-white'>Nexcent</p>
          </div>

          <div className='hidden md:block text-white'>
            <ul className='flex gap-10'>
              <li className='text-[#717171] dark:text-white'>Home</li>
              <li className='text-[#717171] dark:text-white'>Servive</li>
              <li className='text-[#717171] dark:text-white'>Feature</li>
              <li className='text-[#717171] dark:text-white'>Product</li>
              <li className='text-[#717171] dark:text-white'>Testimonial</li>
              <li className='text-[#717171] dark:text-white'>FAQ</li>
            </ul>
          </div>

          <div className='flex gap-5'>
            <button className='text-[#4CAF4F] text-md'>Login</button>
            <button className='w-20 h-10 rounded bg-[#4CAF4F] text-white text-sm'>Sign Up</button>
          </div>

          <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme==="light"?"dark":"light")}
    >
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme==="dark"?"light":"dark")}
    >
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>

        </div>
      </div>
    </>
  )
}

export default Nav

