import React from 'react'

const  About = () => {
  return (
    <div className='mx-auto max-w-[1400px] px-2 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 mt-[100px] lg:mt-[150px]'>
      <div className='relative flex flex-col lg:flex-row lg:flex items-center justify-between'>
      {/* <div className='absolute text-[4.5rem] top-[-50px] left-[400px] font-bold'>ABOUT ME</div> */}
      <div className='flex-[1] m-[20px] parent overflow-hidden rounded-xl'>
        <img
        className='rounded-xl child'
        src='/potrait.jpeg'
        alt='Haisoku'
        />
      </div>

      <div className='flex-[2] m-[20px] relative w-full lg:w-[unset]'>
     
      <div className='flex justify-center items-center my-[20px] '>
        <hr
        className='bg-[#b5d9c7] h-[5px] lg:w-[50px] w-[30px] mr-[10px]'
        />
        <h2
        className='text-[1.5rem] lg:text-[2.5rem] font-extrabold'
        > I'm Steffen L&#252;hmann</h2>
        <hr
        className='bg-[#b5d9c7] h-[5px] lg:w-[50px] w-[30px] ml-[10px]'
        />
        </div>
        <div className='text-[1.3rem] bg-[#b5d9c7] p-[10px] rounded-lg text-center w-full lg:w-[unset] border'>
        I'm a passionate advocate for holistic well-being and a devoted natural therapy healer.My journey into natural healing began from a profound belief in the body's innate ability to heal itself when provided with the right tools and environment. 
        With over 10 years of experience, I've dedicated my life to understanding the intricate connections between mind, body, and spirit.
        My approach to healing is rooted in a deep reverence for nature's wisdom and time-honored therapeutic practices. I believe in embracing a harmonious balance of ancient traditions and modern wellness techniques to facilitate healing on multiple levels.
        </div>
        
      </div>
      </div>

      <div className='text-[1.3rem] bg-[#b5d9c7] p-[10px] rounded-lg my-[50px] text-center'>
      My practice revolves around personalized care, where I work closely with individuals, 
      nurturing them through their unique healing journeys. 
      Whether it's through herbal remedies, energy healing, mindfulness, or therapeutic practices, 
      I aim to create a safe and supportive space for transformation and growth.As a firm believer in ongoing learning and evolution, I am continually exploring new modalities and expanding my knowledge to better serve my clients. 
      </div>

      <div className='lg:flex-row flex flex-col-reverse justify-between items-center mt-[100px] '>

      <div className='flex flex-col lg:w-[45%] w-full'>
      <div className='flex justify-center items-center lg:my-[40px] my-[unset]'>
        <hr
        className='bg-[#b5d9c7] h-[5px] w-[50px] mr-[10px]'
        />
        <h2
        className='lg:text-[2.5rem] text-[1.5rem] font-extrabold'
        > My Commitment</h2>
        <hr
        className='bg-[#b5d9c7] h-[5px] w-[50px] ml-[10px]'
        />
        </div>

        <div className='text-[1.3rem] bg-[#b5d9c7] p-[10px] rounded-lg text-center'>
      My commitment is to empower you on your path to wellness, helping you reconnect with your body's natural rhythms and innate healing capacities.
        Beyond my practice, I am dedicated to sharing knowledge, offering workshops, and fostering a community that celebrates holistic health. 
         My mission is to inspire and guide others toward a life of balance, vitality, and holistic well-being.         I warmly invite you to join me on this transformative journey toward optimal health and inner harmony.
      </div>
      </div>
      

      <div className='lg:w-[45%] w-full mb-[40px] lg:mb-[-40px] overflow-hidden parent rounded-lg'>
        <img
        className='w-full h-[400px] object-cover child'
        src='/haisokuSitting.jpeg'
        alt='Haisoku'
        />
      </div>
      </div>
      
    </div>
  )
}

export default About


// My commitment is to empower you on your path to wellness, helping you reconnect with your body's natural rhythms and innate healing capacities.
//         Beyond my practice, I am dedicated to sharing knowledge, offering workshops, and fostering a community that celebrates holistic health. 
//         My mission is to inspire and guide others toward a life of balance, vitality, and holistic well-being.
//         I warmly invite you to join me on this transformative journey toward optimal health and inner harmony.