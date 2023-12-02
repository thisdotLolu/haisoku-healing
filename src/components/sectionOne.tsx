import React from 'react'

const SectionOne = () => {
  return (
    <div className='mx-auto  max-w-[1400px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 flex flex-col items-center justify-between mt-[150px]'> 
        <div className='flex justify-center items-center'>
        <hr
        className='bg-[#b5d9c7] h-[5px] w-[50px] mr-[10px]'
        />
        <h1
        className='md:text-[2.5rem] text-[2rem]'
        >Our Approach</h1>
        <hr
        className='bg-[#b5d9c7] h-[5px] w-[50px] ml-[10px]'
        />
        </div>
        
        <p
        className='text-[1.2rem] mx-auto text-center mt-[20px] bg-[#b5d9c7] p-[20px] rounded-xl'
        >We understand that true well-being extends beyond the physical body. It encompasses the mind, spirit, and the world around us. Our holistic approach to healing embraces the interconnectedness of all aspects of your life.
        Explore the bountiful remedies that nature offers. From herbal medicines to time-honored traditions, we bring you the wisdom of generations. Nature provides us with powerful tools to enhance our health and vitality.
        </p>
    </div>
  )
}

export default SectionOne