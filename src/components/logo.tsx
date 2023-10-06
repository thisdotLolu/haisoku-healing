import Image from 'next/image';
import React from 'react'



const Logo = () => {
  return (
    <div className='h-[full] flex justify-center items-center cursor-pointer'>
        <h2
        className='text-[1.2rem]'
        >HAISOKU</h2>
        <Image
             width={50}
             alt='Logo'
             height={50}
             src='/LOGOS .png'
        /> 
        <h2
        className='text-[1.2rem]'
        >HEALING</h2>
    </div>
  )
}

export default Logo;