import React from 'react'

const  About = () => {
  return (
    <div className='mx-auto max-w-[1920px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 flex items-center justify-between mt-[150px]'>
      <div className='flex-[1] m-[20px]'>
        <img
        className='rounded-xl'
        src='/potrait.jpeg'
        alt='Haisoku'
        />
      </div>

      <div className='flex-[2] m-[20px]'>
      <div className='flex justify-center items-center'>
        <hr
        className='bg-[#b5d9c7] h-[5px] w-[50px] mr-[10px]'
        />
        <h2
        className='text-[2.5rem] font-extrabold'
        >Hi there I'm Steffen L&#252;hmann</h2>
        <hr
        className='bg-[#b5d9c7] h-[5px] w-[50px] ml-[10px]'
        />
        </div>
        <p className='text-[1.2rem] font-bold'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro eius rem, minima, optio quos repellendus facilis voluptatibus harum corporis illo repellat dolore recusandae reprehenderit nemo ratione aut exercitationem voluptate aliquam quam! Ex aspernatur, eligendi voluptatum itaque harum natus, cupiditate facilis quia eum voluptatem pariatur quisquam eaque reiciendis. Modi, omnis nemo in excepturi voluptates atque labore odio.
        </p>
        
      </div>
    </div>
  )
}

export default About