'use client'

import React from 'react'
import Textsection from './textsection'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



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
        <div className='mx-auto max-w-[1920px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 flex items-center justify-between mt-[150px]'>
            <div className='h-[100%] w-[45%]'>
                <h2 className='text-[2.5rem] text-black my-[20px]'>
                    <span className='underline-curve'></span>
                    Welcome to Haisoku Healing - Your Path to Natural Healing
                </h2>

                <p className='text-[1.1rem] my-[20px]'>
                    At Haisoku Healing, we believe in the power of nature to heal, nurture, and rejuvenate. Our mission is to guide you on your journey to optimal health and well-being through natural and holistic approaches. Whether you're seeking relief from a specific ailment or simply want to enhance your overall vitality, our experienced team is here to support you every step of the way.
                </p>

                <div className='w-full'>
                <button
                className='border p-[10px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6]'
                >
                Get Started    
                </button>
                <button
                className='border p-[10px] mx-[20px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6]'
                >
                Schedule A Meeting
                </button>
                </div>
            </div>

            <div className='border h-[70vh] w-[45%]'>
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
                            <div key={index} className='h-[70vh] w-[100%] relative max-[600px]:w-[100%] m-auto'
                            >
                                {/* <div className=''> */}

                                <img
                                    className='absolute top-[0px] left-[0px] h-[100%] w-[100%] object-cover rounded-md'
                                    src={`${slide}`}
                                />
                                {/* </div> */}
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