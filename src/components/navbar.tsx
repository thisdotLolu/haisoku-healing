'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Logo from './logo'
import { BsPersonFill } from 'react-icons/bs'
import Link from 'next/link'
import { FaArrowDown, FaBars, FaTimes } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { MdArrowOutward } from "react-icons/md";
import { pairHashpack } from '../helpers/hashconnect'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'
// import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar'
import { AuthContext } from '@/contexts/AuthContext'
import { CgProfile } from "react-icons/cg";

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

  const { progress, user, setUser, setProgress, loading, setLoading }: any = useContext(AuthContext);
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

  const myRef: any = useRef(null);

  const handleClickOutside = (e: any) => {
    if (!myRef.current.contains(e.target)) {
      setShowOptions(false)
    }
  };

  const handleClickInside = () => setShowOptions(true);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });



  return (
    <>
      {loading && <LoadingBar
        color='#b5d9c7'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />}
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
              {user ?
                <div
                  className='flex flex-col relative items-center justify-center'>
                  <CgProfile
                    onClick={() => setShowOptions(!showOptions)}
                    className='mr-[25px] hover:text-[#b5d9c7] cursor-pointer'
                    size={30}
                  />
                  <div
                    className='absolute top-[100%]'
                    ref={myRef}
                    onClick={handleClickInside}
                  >

                    {
                      showOptions && (
                        <div

                          className='w-[150px] h-[fit-content] rounded-md bg-white border py-[5px] px-[2px] flex flex-col items-center justify-center'>
                          <div
                            className='my-[5px] px-[15px] p-[5px] w-[100%]'
                          >
                            <div

                              className='mx-auto w-[100%] block text-start'

                            >Logged In</div>
                          </div>

                          <div
                            className='hover:bg-[rgba(0,0,0,0.1)] my-[5px] px-[15px] p-[5px] w-[100%]'
                          >
                            <div
                              className='block text-start overflow-x-scroll pop-scroll'
                            >{user?.email}</div>
                          </div>
                        </div>
                      )
                    }


                  </div>
                </div>
                :
                <div
                  className='flex flex-col relative items-center justify-center'>
                  <BsPersonFill
                    onClick={() => setShowOptions(!showOptions)}
                    className='mr-[25px] hover:text-[#b5d9c7] cursor-pointer'
                    size={30}
                  />
                  <div
                    className='absolute top-[100%]'
                    ref={myRef}
                    onClick={handleClickInside}
                  >
                    {
                      showOptions && (

                        <div

                          className='w-[150px] h-[fit-content] rounded-md bg-white border py-[5px] px-[2px] flex flex-col items-center justify-center'>
                          <div
                            className='hover:bg-[rgba(0,0,0,0.1)] my-[5px] px-[15px] p-[5px] w-[100%]'
                          >
                            <Link
                              onClick={() => setShowOptions(false)}
                              className='mx-auto w-[100%] block text-start'
                              href='/sign-in'
                            >Login</Link>
                          </div>

                          <div
                            className='hover:bg-[rgba(0,0,0,0.1)] my-[5px] px-[15px] p-[5px] w-[100%]'
                          >
                            <Link
                              onClick={() => setShowOptions(false)}
                              className='block text-start'
                              href='/sign-up'
                            >Sign Up</Link>
                          </div>
                        </div>
                      )
                    }
                  </div>

                </div>
              }

              <button
                onClick={pairHashpack}
                className='border p-[10px] mx-[20px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6]'
              >
                Connect Wallet
              </button>
            </div>
          </div>
          <div
            className="cursor-pointer md:hidden text-[1.3rem] text-black flex"

          >
            <button
              onClick={pairHashpack}
              className='px-[5px] text-[1rem] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] hover:bg-[#89c2a6] mr-[10px]'
            >
              Connect Wallet
            </button>
            <FaBars
              onClick={toggleMenu}
              className=''
              size={30} />
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
                <div
                  onClick={toggleMenu}
                >
                  <Logo />
                </div>

                <div
                  className="flex cursor-pointer text-[1.3rem] text-black"
                >
                  <div className='flex items-center justify-center'>

                  {user ?
                <div
                  className='flex flex-col relative items-center justify-center'>
                  <CgProfile
                    onClick={() => setShowOptions(!showOptions)}
                    className='mr-[25px] hover:text-[#b5d9c7] cursor-pointer'
                    size={30}
                  />
                  <div
                    className='absolute top-[100%]'
                    ref={myRef}
                    onClick={handleClickInside}
                  >

                    {
                      showOptions && (
                        <div

                          className='w-[150px] h-[fit-content] rounded-md bg-white border py-[5px] px-[2px] flex flex-col items-center justify-center'>
                          <div
                            className='my-[5px] px-[15px] p-[5px] w-[100%]'
                          >
                            <div

                              className='mx-auto w-[100%] block text-start'

                            >Logged In</div>
                          </div>

                          <div
                            className='hover:bg-[rgba(0,0,0,0.1)] my-[5px] px-[15px] p-[5px] w-[100%]'
                          >
                            <div
                              className='block text-start overflow-x-scroll pop-scroll'
                            >{user?.email}</div>
                          </div>
                        </div>
                      )
                    }


                  </div>
                </div>
                :
                <div
                  className='flex flex-col relative items-center justify-center'>
                  <BsPersonFill
                    onClick={() => setShowOptions(!showOptions)}
                    className='mr-[25px] hover:text-[#b5d9c7] cursor-pointer'
                    size={30}
                  />
                  <div
                    className='absolute top-[100%]'
                    ref={myRef}
                    onClick={handleClickInside}
                  >
                    {
                      showOptions && (

                        <div

                          className='w-[150px] h-[fit-content] rounded-md bg-white border py-[5px] px-[2px] flex flex-col items-center justify-center'>
                          <div
                            className='hover:bg-[rgba(0,0,0,0.1)] my-[5px] px-[15px] p-[5px] w-[100%]'
                          >
                            <Link
                              onClick={() => setShowOptions(false)}
                              className='mx-auto w-[100%] block text-start'
                              href='/sign-in'
                            >Login</Link>
                          </div>

                          <div
                            className='hover:bg-[rgba(0,0,0,0.1)] my-[5px] px-[15px] p-[5px] w-[100%]'
                          >
                            <Link
                              onClick={() => setShowOptions(false)}
                              className='block text-start'
                              href='/sign-up'
                            >Sign Up</Link>
                          </div>
                        </div>
                      )
                    }
                  </div>

                </div>
              }
                  </div>
                  <FaTimes
                    size={30}
                    onClick={toggleMenu}
                  />
                </div>
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
const MobileNavLink = ({ title, href }: any) => {
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


