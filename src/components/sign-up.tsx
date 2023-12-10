'use client'

import Link from 'next/link';
import React, { useContext, useRef, useState } from 'react'
import Logo from './logo';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { AuthContext } from '@/contexts/AuthContext';

const SignUpForm = () => {
    const {progress,user,setUser,setProgress,loading,setLoading}:any = useContext(AuthContext);
    const[email,setEmail]=useState('')
    const[password,setPassword] = useState('')
    const[confirm,setConfirm] = useState('')
    const router = useRouter()

    function SignUp() {
        setLoading(true)
        setProgress(progress + 50)
        setProgress(100)
        createUserWithEmailAndPassword(auth,email,password)
          .then((userCredential)=>{
            console.log(userCredential.user)
            setUser(userCredential.user)
            setLoading(false)
            router.push('/academy');
          
          }).catch((error)=>{
          toast.error('Error creating User')
          console.log(error)
          
          setLoading(false)
          })
        }

        
    
  return (
    <div className='shadow-md md:w-[40vw] md:max-w-[40vw] w-[90vw] border mt-[100px] h-[fit-content] p-[20px] rounded-md flex flex-col justify-center items-center bg-white'>
    <Logo/>
    <h1 className='text-black text-[2rem]'>CREATE ACCOUNT</h1>

    <div className='w-full mt-[20px]'>
        <label className='flex flex-col'>
            <p>E-mail</p>
            <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='w-full shadow-md border p-[10px] mt-[10px]'
            placeholder='your email address'
            />
        </label>

        <label className='flex flex-col mt-[20px]'>
            <p>Password</p>
            <input
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full shadow-md border p-[10px] mt-[10px]'
            placeholder='choose a password'
            />
        </label>

        <label className='flex flex-col mt-[20px]'>
            <p>Confirm Password</p>
            <input
            type='password'
            value={confirm}
            onChange={(e)=>setConfirm(e.target.value)}
            className='w-full shadow-md border p-[10px] mt-[10px]'
            placeholder='retype the chosen password'
            />
        </label>
        {confirm === password ? '':<p className='text-sm text-red-900'>Passwords don't match</p>}
    </div>

    <button
    disabled={email === '' || password==='' || confirm !== password }
    onClick={SignUp}
    className={`border p-[10px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6]`}
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