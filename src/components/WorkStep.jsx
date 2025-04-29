import React from 'react'

const WorkStep = (props) => {
  return (
    <div>
      <div className='rounded-full w-[81px] h-[81px] border'>
        <p className='text-center py-3'>{props.number}</p>
      </div>
      <hr className='  <hr className="border border-t-2 border-[#0649E7] my-4" />'/>
      <p className='p2 text-[#0649E7]'>{props.description}</p>
    </div>
  )
}

export default WorkStep
