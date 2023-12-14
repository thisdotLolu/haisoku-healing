import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function AcademyComponent() {
  return (
    <>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 lg:flex lg:flex-row flex-col items-center justify-between mt-[100px]'>
        <div className='relative h-[400px] lg:w-[45%] w-[100%] border'>
          <div className='absolute border-[4px] border-[#b5d9c7] w-[100%] h-[400px] top-[-20px] lg:left-6 left-4 z-10'></div>
          <img
            className='w-full h-full object-cover z-30 relative'
            src='/haisokuFocused.jpeg'
            alt='Haisoku'
          />
        </div>

        <div className='lg:w-[45%] w-[100%] lg:mt-[0px] mt-[40px]'>
          <div className='flex justify-center items-center my-[15px]'>
            <hr
              className='bg-[#b5d9c7] h-[5px] lg:w-[50px] w-[20px] mr-[10px]'
            />
            <h2
              className='lg:text-[2rem] text-[1.3rem] font-extrabold'
            >Hi there, It's Steffen L&#252;hmann</h2>
            <hr
              className='bg-[#b5d9c7] h-[5px] lg:w-[50px] w-[20px] ml-[10px]'
            />
          </div>
          <p className='inline'>
            <FaQuoteLeft
              size={30}
              className='text-[#b5d9c7] inline mb-2 mr-2'
            /> At Remedium Health, we're eagerly preparing to unveil a transformative journey toward holistic wellness and vitality.
            While our courses aren't available just yet, we're diligently curating a wealth of ancient wisdom and modern practices in natural healing.
            From herbal remedies to energy healing, yoga, mindfulness, and more, we're dedicated to empowering you with a diverse array of healing modalities.
            Join our community of wellness enthusiasts and be the first to embark on this holistic adventure.
            Our comprehensive curriculum, led by experienced practitioners, will guide you toward a harmonious, balanced life.
            Stay tuned as we finalize our courses and resources, meticulously crafted to awaken your innate healing abilities.
            Be among the first to dive into our curated offerings and experience the transformative power of natural healing.
            Sign up for updates and be ready to begin your holistic journey with us when our courses launch!
            -Or Schedule a meeting the founder below
            <FaQuoteRight
              className='text-[#b5d9c7] inline mb-2 ml-2'
              size={30}
            />
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button
          className='border p-[10px] lg:mx-[20px] mx-[0px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6]'
        >
          <a
            target='_blank'

            href='https://calendly.com'>
            Schedule A Meeting
          </a>
        </button>
      </div>
    </>
  )
}

export default AcademyComponent;