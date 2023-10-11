import React from 'react'
import ProjectsTab from '../components/ProjectsTab'


const Section5 = () => {
  return (
    <div className=' dark w-full h-full flex items-center'>
        <div className='w-full md:w-10/12 h-full mx-auto md:px-10 py-10 md:py-20'>
        <div className='font-bold text-5xl pt-1 px-10 md:px-0 md:flex md:justify-center'  style={{ userSelect: 'none' }}>Projects</div>
            <div className='flex justify-center'>
        
          
                <div className='font-normal text-sm pt-3 w-full md:w-6/12 px-10'  style={{ userSelect: 'none' }}>These are some of the projects that I've worked on.
I've created some projects that help me understand
more of the technology that I use.</div>
           
              
            </div>
            <ProjectsTab/>
               
        </div>
    </div>
  )
}

export default Section5