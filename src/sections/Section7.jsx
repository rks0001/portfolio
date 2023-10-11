import React from 'react'
import ContactForm from '../components/ContactForm'

const Section7 = () => {
  return (
    <div className='dark w-full h-full flex items-center'>
        <div className='w-full md:w-10/12 h-full  mx-auto px-10 py-20 '>
        <div className='text-left md:text-center'>
           <div className='font-bold text-5xl pt-1'  style={{ userSelect: 'none' }}>Contact Me</div>
                <div className='font-normal text-sm pt-2'  style={{ userSelect: 'none' }}>Write a message, I will reply soon</div>
           </div>
           <ContactForm/>
           </div>
    </div>
  )
}

export default Section7