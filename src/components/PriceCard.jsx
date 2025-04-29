import React from 'react'
import check from '../assets/correct.png'
const PriceCard = (props) => {
  const features = props.features;
  return (
    <div className='w-[398px] h-[760px] rounded-[35px] border-2 border-[#0649E7] p-3'>
      <p className=' text-[#0649e7]'>{props.title}</p>
      <p className='p2 text-[#0649E7]'>{props.description}</p>
      <p className='text-[#0649E7]'>{props.price}<span className='text-sm'>/{props.duration}</span></p>
      <hr />
      {
        features.map((feature)=>{
          return (
            <div key={props.title} className='flex items-start gap-3'>
              <img src={check} alt="check" />
              <p className='p2'>{feature}</p>
            </div>
          )
        })
      }
      <button className="bg-[#0649E7] text-center p-3 rounded-5 text-white p2 w-[200px] h-[60px] ">Get Started→</button>
      </div>
  )
}

export default PriceCard
