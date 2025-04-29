import React from 'react'
import arrow from '../assets/→.png'
const ContactUs = () => {
  return (
<div className='p-5 mt-5 bg-[#0649E7] sm:w-[1408px] h-[354px] mx-auto rounded-[35px] flex items-center justify-around sm:flex-row flex-col'>
  
  <p className='text-white text-lg mb-4 md:mb-0'>STILL HAVE DOUBTS?</p>
  
  <h1 className='text-white text-[40px] lg:text-[80px] font-bold mb-4 md:mb-0'>
    Contact us
  </h1>
  
  <div className='relative flex items-center justify-center rounded-full w-[120px] h-[120px] bg-white'>
    <img src={arrow} alt="arrow" className="w-8 h-8" />
  </div>

</div>

  )
}

export default ContactUs
