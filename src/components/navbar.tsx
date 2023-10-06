'use client'
import React from 'react'
import Logo from './logo'
import {BsPersonFill} from 'react-icons/bs'
import Link from 'next/link'


const navItems = [
  {
    name:'Home',
    path:'/',
  },
  {
    name:'Philosophy',
    path:'/philosophy'
  },
  {
    name:'Therapy',
    path:'/therapy'
  },
  {
    name:'About Me',
    path:'/about'
  },
  {
    name:'Academy',
    path:'/academy'
  }
] 

const Navbar = () => {
  return (
    <>
        <div className='z-[10000] fixed top-0 left-0 border w-full bg-white mx-auto max-w-[1920px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 flex items-center justify-between h-[70px]'>
          <Logo/>

          <div className='flex items-center justify-end w-[80%]'>
            {
            navItems.map((item,index)=>(
                <Link
                href={`${item.path}`}
                className='text-[1.1rem] capitalize hover:border-b-[#b5d9c7] hover:border-b-4 cursor-pointer transition-all ml-[25px] mr-[25px]'
                key={index}
                >{item.name}</Link>
            ))
            }
          <div className='flex items-center justify-center'>
          <BsPersonFill
          className='mr-[25px] hover:text-[#b5d9c7] cursor-pointer'
          size={30}
          />

          <button
          className='border p-[10px] mx-[20px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6]'
          >
            Connect Wallet
          </button>
          </div>     
          </div>

              
        </div>
    </>

  )
}

export default Navbar