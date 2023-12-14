import React from 'react'

const SectionThree = () => {
  return (
    <div className='mx-auto max-w-[1400px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 lg:flex lg:flex-row flex flex-col items-center justify-between mt-[100px] rounded-md'>
     <div className='lg:w-[45%] w-[100%]'>
     <h1
     className='text-[2.5rem]'
     >
      <span className='underline-curve'></span>
      Your path to holistic wellness begins here.</h1>  
      
      <p
      className='text-[1.2rem] mt-[25px]'
      >Join us as we embark on a journey of natural healing and personal growth. Together, we'll unlock the secrets of nature's medicine cabinet and empower you to live your healthiest, most vibrant life.Ready to get started? Explore our services, read our blog, and reach out to us with any questions. Nature is waiting to share its healing embrace with you.</p>

      <button
      className='border p-[10px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6]'>
        Join Academy
      </button>
     </div>

     <img
     src='/bg-section3.jpeg'
     className='lg:w-[45%] rounded-lg w-[100%]'
     />
      
    </div>
  )
}

export default SectionThree