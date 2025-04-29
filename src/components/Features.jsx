import React from 'react'
import ClientCard from './ClientCard'

const Features = () => {
  return (
    <div className='p-5 mt-5'>
      <p className="text-[#0649E7]">What our clients have to say</p>
      <div className='flex items-center justify-between mt-5'>
        <ClientCard />
        <ClientCard />
        <ClientCard/>
      </div>
      <div className='text-center my-5'>
        <button className='text-[#0649E7] bg-white rounded-5  p-3 mx-3 border-2 border-blue-700 w-[345px] h-[60px] '>More customer testimonials ↗</button>
        <button className="bg-[#0649E7] text-center p-3 rounded-5 text-white p2 w-[200px] h-[60px]">Get Started</button>
      </div>
    </div>
  )
}

export default Features
