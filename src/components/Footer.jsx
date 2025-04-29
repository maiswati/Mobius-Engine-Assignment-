import React from 'react'

const Footer = () => {
  return (
    <div className='p-5 mt-5 bg-[#0649E7] h-[70px] flex justify-between items-center'>
      <div>
        <p className='text-white p2'>© 2023 Mobiusservices LLC</p>
      </div>
      <div className='flex justify-between items-center gap-3'>
        <p className='text-white p2'>Terms & Conditions</p>
        <p className='text-white p2'>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
