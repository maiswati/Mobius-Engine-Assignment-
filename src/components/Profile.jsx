import React from 'react'
import link from '../assets/Shape.png'
const Profile = (props) => {
  return (
    <div className='flex flex-shrink-0 flex-col md:flex-row items-start ml-5'>
      <div className='relative'>
        <img className='rounded-full w-[140px] h-[140px] bg-[#FEFEFE] space-x-6' src={props.s} alt={props.alt} />
        <div className='rounded-full w-[70px] h-[70px] bg-[#D9D9D94D] bg-opacity-30 backdrop-blur-md -mt-5 ml-[80px]'>
            <img src={link}  alt="linkedin" className='p-4'/>
        </div>
      </div>
      <div className=' max-w-4xl ml-5'>
        <p className='p2 text-white'>{props.info}</p>
      </div>
    </div>
  )
}

export default Profile
