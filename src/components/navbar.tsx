'use client'
import React, { useState } from 'react'
import Logo from './logo'
import { BsPersonFill } from 'react-icons/bs'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'



const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Philosophy',
    path: '/philosophy'
  },
  {
    name: 'Therapy',
    path: '/therapy'
  },
  {
    name: 'About Me',
    path: '/about'
  },
  {
    name: 'Academy',
    path: '/academy'
  }
]

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <div className='z-[10000000] w-full bg-white fixed left-0 top-0'>
      <div className=' w-full bg-white mx-auto max-w-[1400px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 flex items-center justify-between h-[70px]'>
        <Logo />

        <div className='hidden items-center justify-end w-[80%] md:flex'>
          {
            navItems.map((item, index) => (
              <Link
                href={`${item.path}`}
                className='text-[1.1rem] capitalize hover:border-b-[#b5d9c7] hover:border-b-4 cursor-pointer transition-all ml-[25px] mr-[25px]'
                key={index}
              >{item.name}</Link>
            ))
          }
          <div className='flex items-center justify-center'>

            <div className='flex flex-col relative items-center justify-center'>
              <BsPersonFill
                onClick={() => setShowOptions(!showOptions)}
                className='mr-[25px] hover:text-[#b5d9c7] cursor-pointer'
                size={30}
              />

              

                {
                  showOptions && (
                    
                    <div 
                    onBlur={()=>setShowOptions(false)}
                    className='w-[150px] h-[fit-content] rounded-md bg-white border absolute top-[100%] py-[5px] px-[2px] flex flex-col items-center justify-center'>
                      <div
                        className='hover:bg-[rgba(0,0,0,0.1)] my-[5px] px-[15px] p-[5px] w-[100%]'
                      >
                        <Link
                          onClick={()=>setShowOptions(false)}
                          className='mx-auto w-[100%] block text-start'
                          href='/sign-in'
                        >Login</Link>
                      </div>

                      <div
                        className='hover:bg-[rgba(0,0,0,0.1)] my-[5px] px-[15px] p-[5px] w-[100%]'
                      >
                        <Link
                        onClick={()=>setShowOptions(false)}
                          className='block text-start'
                          href='/sign-up'
                        >Sign Up</Link>
                      </div>
                      </div>
                    
                  )
                }



              
            </div>



            <button
              className='border p-[10px] mx-[20px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6]'
            >
              Connect Wallet
            </button>
          </div>

          {/* <FaBars
          className=''
          size={25}
          /> */}

          <div className=''>
          </div>
        </div>


      </div>
    </div>

  )
}

export default Navbar