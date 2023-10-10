import React from 'react'
import {HiOutlineExternalLink} from 'react-icons/hi'
const CertiCard = ({name,image,description,more}) => {
  return (
    <div className='bg-[#1f1f1f] rounded-lg p-4 w-full md:w-[30%] '>
        <div className='flex'>
            <div className='flex-1'>
            <img className='p-2 rounded-lg' src={image} alt='certi'/>
            </div>
            <div className='flex-1 p-2'>
            
        <div className='font-normal text-sm pt-1'>{description}</div>
        <button className='bg-[#5429cf] px-6 py-1 rounded-lg my-2 ' ><a className='flex items-center gap-2' href={more} target='_blank' rel="noreferrer" >More <HiOutlineExternalLink/></a></button>
            </div>
            
        </div>
        <div className='font-semibold text-base px-2'>{name}</div>
       
       
        
        

    </div>
  )
}

export default CertiCard