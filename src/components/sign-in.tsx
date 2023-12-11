'use client'
import React, { useContext, useState } from 'react'
import Logo from './logo';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const SignInForm = () => {
    const {progress,user,setUser,setProgress,loading,setLoading}:any = useContext(AuthContext);
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const router = useRouter()


    function SignIn() {
        setLoading(true)
        setProgress(progress + 50)
        setProgress(100)
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
          console.log(userCredential)
          setUser(userCredential.user)
          setLoading(false);
          router.push('/academy');
        })
      .catch((error)=>{
        setLoading(false)
        toast.error(error)
        })
        setLoading(false)
      }

      
  return (
        <div className='shadow-md md:w-[40vw] md:max-w-[40vw] w-[90vw] border mt-[100px] h-[fit-content] p-[20px] rounded-md flex flex-col justify-center items-center bg-white'>
            <Logo/>
            <h1 className='text-black text-[2rem]'>LOGIN</h1>

            <div className='w-full mt-[20px]'>
                <label className='flex flex-col'>
                    <p>E-mail</p>
                    <input
                    value={email}
                    type='email'
                    onChange={(e)=>setEmail(e.target.value)}
                    className='w-full shadow-md border p-[10px] mt-[10px]'
                    placeholder='your registered email address'
                    />
                </label>

                <label className='flex flex-col mt-[20px]'>
                    <p>Password</p>
                    <input
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type='password'
                    className='w-full shadow-md border p-[10px] mt-[10px]'
                    placeholder='your registered email address'
                    />
                </label>
            </div>

            <button
            onClick={SignIn}
            className='border p-[10px] bg-[#93C8AE] rounded-lg text-white border-[#b5d9c7] my-[20px] px-[20px] hover:bg-[#89c2a6]'
            >
                Log In
            </button>

            <div className='flex'>
            <p
            className='mr-[5px]'
            >You don't have an account?</p>
            <Link 
            className='hover:underline'
            href='/sign-up'
            >
                Join Now
            </Link>
            </div>
            
            
        </div>
  )
}

export default SignInForm;