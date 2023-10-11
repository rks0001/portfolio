import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {RiTwitterXLine} from 'react-icons/ri'
import { Link } from 'react-router-dom/dist'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth",

    })
  }
  return (
    <div className='dark w-full h-full py-10 text-[#f1f1f1]'>
        <div className='w-10/12 h-full mx-auto flex flex-row'>
            <div className='flex-1 mr-10 '>
            <div className='font-semibold text-lg'>Ranjit Kalita</div>
            <div className='text-xs md:w-8/12 py-1'>Frontend Developer</div>
            <div className='flex flex-row gap-3 pb-4'>
            <a href="https://twitter.com/ranjitkalita5o5" target="_blank" rel="noreferrer"><RiTwitterXLine/></a> 
            <a href="https://www.linkedin.com/in/ranjitkalita/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>  
            <a href="https://github.com/rks0001" target="_blank" rel="noreferrer"><AiFillGithub/></a>  
            </div>
            </div>
            {/* Right */}
            <div className='flex-1'>
            <div className='flex md:flex-row flex-col'>
                <div className='flex-1'>
                <ul>
                   <li className='text-lg font-medium pb-2'>Navigate</li> 
                   
                   <Link to='/aboutme' onClick={() => scrollToTop()}> <li  className='text-sm font-light pb-2'>About Me</li></Link>
                   <Link to='/skills' onClick={() => scrollToTop()}> <li  className='text-sm font-light pb-2 '>Skills</li></Link>
                   <Link to='/experience' onClick={() => scrollToTop()}><li  className='text-sm font-light pb-2'>Experience</li> </Link>
                   <Link to='/projects' onClick={() => scrollToTop()}> <li  className='text-sm font-light pb-2'>Projects</li></Link>
                   <Link to='/certifications' onClick={() => scrollToTop()}> <li  className='text-sm font-light pb-2'>Certifications</li></Link>
                  
                </ul>
                </div>
                <div className='flex-1'>
                <ul>
                    <li className='text-lg font-medium pb-2'>Support</li>
                    <Link to="/contactme" onClick={() => scrollToTop()}><li  className='text-sm font-light pb-2'>Contact Me</li></Link>
                    
                </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer