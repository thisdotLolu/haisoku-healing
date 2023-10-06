import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



const Logo = () => {
  return (
    <Link 
    href='/'
    className='h-[full] flex justify-center items-center cursor-pointer'>
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
    </Link>
  )
}

export default Logo;