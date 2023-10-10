import React from 'react'
import dev from '../images/dev.svg'
import {LuFileDown} from 'react-icons/lu'
import {AiFillGithub} from 'react-icons/ai'

const Section2 = () => {
  return (
    <div className='dark w-full h-full flex items-center'>
        <div className='w-full md:w-10/12 h-full mx-auto px-10 py-10 md:py-20'>
            <div className='flex flex-col md:flex-row items-center '>

            <div className='hidden  flex-1 md:flex items-center justify-center mx-auto px-10' style={{ userSelect: 'none' }}>
                    <img  className='w-120 h-120' src={dev} alt="logo1"/>
                </div>
                <div className='flex flex-col md:flex-row items-center '>
                  <div>
                  <div className='font-bold text-5xl pt-1' style={{ userSelect: 'none' }}>About Me</div>
                <div className='font-medium text-sm pt-1' style={{ userSelect: 'none' }}>My name is Ranjit Kalita, I'm 22 years old, I am a CSE Graduate
from Tezpur University. I like to use various technologies to build
exciting projects.<br/><br/>
I've started Web Development in 2020 and since then I've learned
a lot of new things and acquired a decent amount of skills and
I am still learning.<br/><br/>
Currently I am trying to learn more about Blockchain and Web3.</div>
               
               <div className='flex gap-4'>
               <button className='bg-[#5429cf] py-3 px-6 rounded-md my-3 text-lg font-medium flex items-center gap-2'>Github<AiFillGithub/></button>
               <button className='bg-[#5429cf] py-3 px-6 rounded-md my-3 text-lg font-medium flex items-center gap-2'>Resume<LuFileDown/></button>
               </div>
            
                
                  </div>
               
                
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Section2