import React from 'react'

import {BiLeaf} from 'react-icons/bi'
import {SiMinds} from 'react-icons/si'
import {FaNutritionix} from 'react-icons/fa'
import {SlEnergy} from 'react-icons/sl'
import {AiOutlineGlobal} from 'react-icons/ai'


const SectionTwo = () => {
  return (
    <div className='mx-auto max-w-[1400px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 flex flex-col items-center justify-between mt-[100px]'>
        
    <div className='flex justify-center  items-center mb-[30px]'>
    <hr
    className='bg-[#b5d9c7] h-[5px] w-[50px] mr-[10px]'
    />
    <h1
    className='md:text-[2.5rem] text-[2rem]'
    >Our Services</h1>
    <hr
    className='bg-[#b5d9c7] h-[5px] w-[50px] ml-[10px]'
    />
    </div>


    <div className='md:flex md:flex-wrap flex flex-col md:flex-row justify-center items-center rounded-xl h-[fit-content] md:w-[fit-content] w-[100%]'>
        <div className='w-[100%] rounded-lg bg-[#b5d9c7] md:w-[30%] m-[10px] h-[320px] flex flex-col justify-between items-center p-[20px]'>
          <BiLeaf
          size={50}
          />
          <h3
          className='text-[1.5rem] my-[5px] font-bold'
          >Herbal Healing</h3>
          <p
          className='text-center text-[1.1rem] font-extralight h-[70%]'
          >Unearth the therapeutic potential of plants with our expertly crafted herbal remedies. We source the finest organic herbs to create blends that support your well-being</p>  
        </div>
        <div className='w-[100%] rounded-lg bg-[#b5d9c7] md:w-[30%] m-[10px] h-[320px] flex flex-col justify-between items-center p-[20px]'>
          <SiMinds
          size={50}
          />
          <h3
          className='text-[1.5rem] my-[5px] font-bold'
          >Mindful Practices</h3>
          <p
          className='text-center text-[1.1rem] font-extralight h-[70%]'
          >Discover mindfulness and meditation techniques that help you find inner balance and tranquility.</p>  
        </div>
        <div className='w-[100%] rounded-lg bg-[#b5d9c7] md:w-[30%] m-[10px] h-[320px] flex flex-col justify-between items-center p-[20px]'>
          <FaNutritionix
          size={50}
          />
          <h3
          className='text-[1.5rem] my-[5px] font-bold'
          >Nutrition Guidance</h3>
          <p
          className='text-center text-[1.1rem] font-extralight h-[70%]'
          >
          Learn how to nourish your body with whole, natural foods that promote health and vitality.</p>  
        </div>
        <div className='w-[100%] rounded-lg bg-[#b5d9c7] md:w-[30%] m-[10px] h-[320px] flex flex-col justify-between items-center p-[20px]'>
          <SlEnergy
          size={50}
          />
          <h3
          className='text-[1.5rem] my-[5px] font-bold'
          >Energy Healing</h3>
          <p
          className='text-center text-[1.1rem] font-extralight h-[70%]'
          >Experience the rejuvenating power of energy healing modalities, promoting harmony in mind, body, and spirit.</p>  
        </div>
        <div className='w-[100%] rounded-lg bg-[#b5d9c7] md:w-[30%] m-[10px] h-[320px] flex flex-col justify-between items-center p-[20px]'>
          <AiOutlineGlobal
          size={50}
          />
          <h3
          className='text-[1.5rem] my-[5px] font-bold'
          >Holistic Lifestyle</h3>
          <p
          className='text-center text-[1.1rem] font-extralight h-[70%]'
          >Embrace a holistic lifestyle that fosters wellness in every aspect of your life, from your home environment to your daily routines.</p>  
        </div>
    </div>
</div>
  )
}

export default SectionTwo;