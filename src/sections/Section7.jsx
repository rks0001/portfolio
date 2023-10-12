import React from 'react'
import ContactForm from '../components/ContactForm'

const Section7 = () => {
  return (
    <div className='dark w-full h-full flex items-center'>
        <div className='w-full md:w-10/12 h-full  mx-auto px-10 py-20 '>
        <div className='text-left md:text-center'>
        <div className="relative font-semibold text-[6vh] md:text-[9vh] leading-none pt-1 text-transparent bg-clip-text bg-cover bg-gradient-to-br from-purple-600 via-indigo-600 to-indigo-800 tracking-normal md:tracking-normal " style={{ backgroundImage: "linear-gradient(135deg, #6355d5 3%, #5429cf 40%, #491ad9 70%)" }}>
  Contact Me
</div>
                <div className='font-normal text-sm pt-2'  style={{ userSelect: 'none' }}>Write a message, I will reply soon</div>
           </div>
           <ContactForm/>
           </div>
    </div>
  )
}

export default Section7