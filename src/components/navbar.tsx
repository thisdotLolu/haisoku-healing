'use client'
import React, { useState } from 'react'
import Logo from './logo'
import { BsPersonFill } from 'react-icons/bs'
import Link from 'next/link'
import { FaArrowDown, FaBars, FaTimes } from 'react-icons/fa'
import {AnimatePresence, motion} from 'framer-motion'
import { MdArrowOutward } from "react-icons/md";


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
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <>
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

        </div>
        <div
          className="cursor-pointer lg:hidden text-[1.3rem] text-black flex"
          onClick={toggleMenu}
        >
        <button
              className='px-[5px] text-[1rem] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] hover:bg-[#89c2a6] mr-[10px]'
            >
              Connect Wallet
            </button>
         <FaBars
          className=''
          size={30}/>
        </div>

      </div>
    </div>
    <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-white text-black p-5 z-[100000000000000]"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <Logo/>
                <p
                  className="cursor-pointer text-[1.3rem] text-black"
                  onClick={toggleMenu}
                >
                  <FaTimes
                  size={30}
                  />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navItems.map((link, index) => {
                  return (
                    <div 
                    onClick={toggleMenu}
                    className="overflow-hidden flex items-center">
                      <MobileNavLink
                        key={index}
                        title={link.name}
                        href={link.path}
                      />
                      
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}



export default Navbar


const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }:any) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black flex items-center"
    >
      <Link href={href}>{title}</Link>
      <MdArrowOutward
      size={30}
      />
    </motion.div>
  );
};