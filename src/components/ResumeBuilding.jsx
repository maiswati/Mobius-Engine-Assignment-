import React from 'react'
import PriceCard from './PriceCard'

const ResumeBuilding = () => {
    const features1 = [
        '3× 30-min coaching ',
        'Focused on storytelling, not just formatting',
        'Analyst + full application team on Pacific hours',
        'Tailored to your target industry, company, or role',
        'Direct work with our co-founder (ex-Google, JP Morgan)',
        'Executive coaching from UC Berkeley alum with 10+ yrs experience',
        'Resume Rebuild portfolio available upon request',
    ];
    const features2 = [
        '2× 45-min live coaching with our co-founder',
        'Real-time, practical feedback',
        'Build clarity, empathy & executive presence',
        'For senior and leadership roles — technical & non-technical',
    ]
  return (
    <div className='p-5 mt-5'>
      <p className='text-[#0649E7]'>Resume Building & Coaching</p>
      <p className='p2 text-[#0649E7]'>Let’s talk about where you’re headed — and how your resume can get you there. <br /><span className='font-extrabold'>Schedule a call to get started.</span></p>
      <div className='flex items-center justify-center gap-5 mt-5'>
        <PriceCard title="Resume Rebuild" price="$1000" duration="one time" features={features1} description="Crafted for senior to VP-level professionals ready for their next big step."/>
        <PriceCard title="Interview Prep" price="$500" duration="one time" features={features2} description="Two sessions to sharpen your story, confidence, and clarity — fast."/>
      </div>
    </div>
  )
}

export default ResumeBuilding
