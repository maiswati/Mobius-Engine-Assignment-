import React from 'react'
import WorkStep from './WorkStep'

const WorkSection = () => {
  return (
    <div className='p-5'>
      <p className='text-[#0649E7] mb-2'>How we work?</p>
      <div className='flex lg:flex-row flex-col items-center justify-between gap-4'>
        <WorkStep number='1' description='Submit Intake Form'/>
        <WorkStep number='2' description='We do the search and curation for list of jobs'/>
        <WorkStep number='3' description='You approve, we do the tedious part (applying)'/>
        <WorkStep number='4' description='You get the interviews'/>
      </div>
    </div>

  )
}

export default WorkSection
