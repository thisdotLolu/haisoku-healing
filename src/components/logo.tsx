import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



const Logo = () => {
  return (
    <Link 
    href='/'
    className='h-[full] flex justify-center items-center cursor-pointer md:w-[unset] w-[fit-content]'>
        <h2
        className='md:text-[1.2rem] text-[1rem]'
        >REMEDIUM</h2>
        <img
             className='md:w-[50px] md:h-[50px] w-[40px] h-[40px]'
             alt='Logo'
             src='/LOGOS .png'
        /> 
        <h2
        className='md:text-[1.2rem] text-[1rem]'
        >HEALTH</h2>
    </Link>
  )
}

export default Logo;