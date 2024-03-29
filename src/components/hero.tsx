'use client'

import React from 'react'
import Textsection from './textsection'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineSchedule } from "react-icons/ai"



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 2000 },
        items: 1
    },
    laptop: {
        breakpoint: { max: 2000, min: 1300 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1300, min: 950 },
        items: 1
    },
    tab: {
        breakpoint: { max: 950, min: 600 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};

const slides = [
    '/slide1.jpeg',
    '/slide2.jpeg',
    '/slide3.jpeg',
    '/slide4.jpeg',
]

const Hero = () => {
    return (
        <div className='mx-auto max-w-[1400px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 lg:flex lg:flex-row flex-col items-center justify-between mt-[100px]'>
            <div className='h-[100%] lg:w-[45%] w-[100%]'>
                <h2 className='text-[2.5rem] text-black my-[20px]'>
                    <span className='underline-curve'></span>
                    Welcome to Remedium Health - Your Path to Natural Healing
                </h2>

                <p className='text-[1.1rem] my-[20px]'>
                    At Remedium Health, we believe in the power of nature to heal, nurture, and rejuvenate. Our mission is to guide you on your journey to optimal health and well-being through natural and holistic approaches. Whether you're seeking relief from a specific ailment or simply want to enhance your overall vitality, our experienced team is here to support you every step of the way.
                </p>

                <div className='w-full lg:flex lg:flex-row flex flex-col justify-center items-center lg:justify-start'>
                <button
                className='border p-[10px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] mb-[50px] lg:mb-[0px] lg:px-[20px] hover:bg-[#89c2a6] w-[200px] lg:w-[unset]'
                >
                Get Started    
                </button>

                <button
                className='border p-[10px] lg:mx-[20px] mx-[0px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6] hidden lg:block'
                >
                <a 
                target='_blank'
               
                href='https://calendly.com'>
                Schedule A Meeting
                </a>
                </button>
                
                <a href='https://calendly.com'
                target='_blank'
                >
                <AiOutlineSchedule 
                className='border bg-[#93C8AE] rounded-[250px] w-[70px] h-[70px] text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6] z-[100000000000] fixed bottom-2 right-2 lg:hidden flex justify-center items-center'
                size={40}
                />
                </a>
                
                
                </div>
            </div>

            <div className='lg:h-[70vh] h-[40vh] lg:w-[45%] mt-[10px] lg:mt-[0px]'>
                <div className='bg-[#93C8AE] p-[20px] rounded-lg'>
                <Carousel
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    transitionDuration={500}
                    ssr={true}
                    responsive={responsive}
                    className='h-[100%] w-[100%]'
                >

                    {
                        slides.map((slide, index) => (
                            <div key={index} className='lg:h-[70vh] h-[40vh] w-[100%] relative max-[600px]:w-[100%] m-auto'
                            >
                                <img
                                    className='absolute top-[0px] left-[0px] h-[100%] w-[100%] object-cover rounded-md'
                                    src={`${slide}`}
                                />
                            </div>
                        ))
                    }
                </Carousel>
                </div>
            </div>
    </div>
  )
}

export default Hero;