import React from 'react'
import arrow from '../assets/→.png'
const ContactUs = () => {
  return (
    <div className='p-5 mt-5 bg-[#0649E7] w-[1408px] h-[354px] mx-auto rounded-[35px] flex items-center justify-around'>
      <p className='text-white'>STILL HAVE DOUBTS?</p>
      <h1 className='text-white'>Contact us</h1>
      <div className='w-[110px] h-[110px] rounded-full bg-white p-5'>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  )
}

export default ContactUs
