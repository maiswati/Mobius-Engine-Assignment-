import React from 'react'
import PriceCard from './PriceCard'
import plans from '../data'
import PriceFlier from './PriceFlier'
import ResumeBuilding from './ResumeBuilding'
const PricingSection = () => {
  return (
    <div className='p-5 mt-5'>
      <p className='text-[#0649E7]'>Job Application Service Plans</p>
      <div className='flex justify-between items-center mt-5 pt-5 lg:flex-row flex-col gap-3'>
        {
          plans.map((plan)=> {
            return (
              <PriceCard title={plan.title} price={plan.price} features={plan.features} duration={plan.duration}/>
            )
          })
        }
      </div>
      <PriceFlier/>
      <br /><br />
      <hr />
      <ResumeBuilding/>
    </div>
  )
}

export default PricingSection
