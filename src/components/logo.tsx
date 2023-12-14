import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



const Logo = () => {
  return (
    <Link 
    href='/'
    className='h-[full] flex justify-center items-center cursor-pointer lg:w-[unset] w-[fit-content]'>
        <h2
        className='lg:text-[1.2rem] text-[1rem]'
        >REMEDIUM</h2>
        <img
             className='lg:w-[50px] lg:h-[50px] w-[20px] h-[20px]'
             alt='Logo'
             src='/LOGOS .png'
        /> 
        <h2
        className='lg:text-[1.2rem] text-[1rem]'
        >HEALTH</h2>
    </Link>
  )
}

export default Logo;