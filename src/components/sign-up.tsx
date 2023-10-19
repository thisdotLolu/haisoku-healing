'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import Logo from './logo';

const SignUpForm = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword] = useState('')
  return (
    <div className='shadow-md md:w-[40vw] md:max-w-[40vw] w-[90vw] border mt-[100px] h-[fit-content] p-[20px] rounded-md flex flex-col justify-center items-center bg-white'>
    <Logo/>
    <h1 className='text-black text-[2rem]'>CREATE ACCOUNT</h1>

    <div className='w-full mt-[20px]'>
        <label className='flex flex-col'>
            <p>E-mail</p>
            <input
            type='text'
            className='w-full shadow-md border p-[10px] mt-[10px]'
            placeholder='your email address'
            />
        </label>

        <label className='flex flex-col mt-[20px]'>
            <p>Password</p>
            <input
            type='text'
            className='w-full shadow-md border p-[10px] mt-[10px]'
            placeholder='choose a password'
            />
        </label>

        <label className='flex flex-col mt-[20px]'>
            <p>Confirm Password</p>
            <input
            type='text'
            className='w-full shadow-md border p-[10px] mt-[10px]'
            placeholder='retype the chosen password'
            />
        </label>
    </div>

    <button
    className='border p-[10px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6]'
    >
        Sign Up
    </button>

    <div className='flex'>
    <p
    className='mr-[5px]'
    >Already have an account?</p>
    <Link
    className='hover:underline'
    href='/sign-in'
    >
        Login
    </Link>
    </div>
    
    
</div>
  )
}

export default SignUpForm;