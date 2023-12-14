import React from 'react'
import Logo from './logo';

const Footer = () => {
  return (
    <div className='mx-auto max-w-[1920px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 lg:flex lg:flex-row flex flex-col items-start justify-between mt-[150px]'>
      <div className='flex flex-col'>
        <h3 className='text-[1.2rem] font-extrabold mb-[10px]'>Quick Links</h3>
        <p>Home</p>
        <p>Philosophy</p>
        <p>Therapy</p>
        <p>About</p>
      </div>

      <div>
        <h3 className='text-[1.2rem] font-extrabold mb-[10px] lg:mt-[0px] mt-[30px]'>User</h3>
        <p>Profile</p>
        <p>Login</p>
        <p>Register</p>
      </div>

      <div className='lg:mt-[0px] mt-[20px]'>
        <img
        src='/academyLogo.png'
        className='w-[200px]'
        />
      </div>
      <div className='flex flex-col justify-center items-center lg:mt-[0px] my-[20px]'>
      <div className='h-[full] flex justify-center items-center cursor-pointer'>
        <h2
        className='text-[1.4rem]'
        >REMEDIUM</h2>
        <img
        className='h-[50px] w-[50px]'
             alt='Logo'
             src='/LOGOS .png'
        /> 
        <h2
        className='text-[1.4rem]'
        >HEALTH</h2>
    </div>
       <p className='text-sm'>TRANSFORMING HEALTH</p>
      </div>

      <div className=''>
        <p>NATÜRLICHE URSACHENMEDIZIN</p>
        <p>Naturheilzentrum Kempten</p>
        <p>Rathausstraße 5</p>
        <p>87435 Kempten steffen@qi-medizin.de 01515 / 2464945</p>
      </div>
    </div>
  )
}

export default Footer;