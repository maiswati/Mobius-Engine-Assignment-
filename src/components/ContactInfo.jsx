import React from 'react'
import icon from '../assets/‭iconBlueColro.png'
import link from '../assets/linkedin.png'
const ContactInfo = () => {
  return (
    <div className='p-5 mt-5'>
      <div>
        <img src={icon} alt="icon" />
        <hr />
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between gap-5'>
            <div>
                <p className='p2 text-[#0649E7] underline'>Address</p>
                <p className='p2 text-[#0649E7]'>1875 Mission St Ste 103 #450 <br />
                San Francisco, CA 94103</p>
            </div>
            <div>
                <p className='p2 text-[#0649E7] underline'>Email</p>
                <p className='p2 text-[#0649E7]'>finance@mobiusengine.ai</p> 
            </div>
            <div>
                <p className='p2 text-[#0649E7] underline'>Telephone</p>
                <p className='p2 text-[#0649E7]'>650-889-6026</p>
            </div>
        </div>
        <div>
            <p className='p2 underline text-[#0649E7]'>Socials</p>
            <div className='flex justify-between items-center gap-1'>
                <div className='w-[44px] h-[44px] rounded-full bg-white border p-3'>
                    <img src={link} alt="link" />
                </div>
                <div className='w-[44px] h-[44px] rounded-full bg-white border p-3'>
                    <img src={link} alt="link" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
