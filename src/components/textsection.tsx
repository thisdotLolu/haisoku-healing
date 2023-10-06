import React from 'react'

type textProps ={
    header:string;
    subheader:string
}

const Textsection = ({header,subheader}:textProps) => {
  return (
    <div className='h-[fit-content]'>
        <h2 className='bold-text text-[2.3rem] text-black'>
           {header} 
        </h2>

        <p className=''>
            {subheader}
        </p>
    </div>
  )
}

export default Textsection