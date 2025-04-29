import React from 'react'

const HeroRightSection = () => {
  return (
    <div>
      <img src="../../src/assets/book.png" alt="book" />
      <div className='rounded-full w-[120px] h-[120px] bg-[#D9D9D94D] bg-opacity-30 backdrop-blur-md -mt-[70px]'>
        <img src="../../src/assets/📖.png"  alt="small book" className='p-4'/>
      </div>
      <p className='text-white p2'>Download Free E-Book</p>
    </div>
  )
}

export default HeroRightSection
