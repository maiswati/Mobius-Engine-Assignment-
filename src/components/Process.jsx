import React from 'react'
import ProcessCard from './ProcessCard'
import heart from '../assets/Heart.png'
import profile from '../assets/Profile 1.png'
import star from '../assets/star].png'
const Process = () => {
  return (
    <div className='p-5 mt-5'>
      <p className='text-[#022183]'>Why Choose Us?</p>
      <div className='flex justify-between items-center lg:flex-row flex-col gap-3'>
        <ProcessCard url={heart} title="Tried, Tested, Trusted" description="Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back."/>
        <ProcessCard url={profile} title="Real People, Real Help" description="A hands-on team that actually cares — guiding you through every twist in your career path."/>
        <ProcessCard url={star} title="Beat the Line" description="We search, shortlist, and apply for you, so your name shows up first — every single day."/>
      </div>
    </div>
  )
}

export default Process
