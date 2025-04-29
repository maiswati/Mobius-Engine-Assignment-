import React from 'react'

const ProcessCard = (props) => {
  return (
    <div className='w-[315px] h-[300px] rounded-[35px] border-2 border-[#022183] p-4'>
       <img className='w-[40px]' src={props.url} alt={props.name} />
       <div className='mt-2'>
           <p className='text-[#022183] text-lg font-extrabold'>{props.title}</p>
           <p className='p2 text-[#022183]'>{props.description}</p>
       </div>
    </div>
  )
}

export default ProcessCard
