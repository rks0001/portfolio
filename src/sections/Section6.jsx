import React from 'react'
import CertiCard from '../components/CertiCard'
import certidata from '../data/certidata'


const Section6 = () => {
  return (
    <div className='dark w-full h-full flex items-center'>
        <div className='w-full md:w-10/12 h-full  mx-auto px-10 py-10 md:py-20'>
        <div className='text-center'>
           <div className='font-bold text-3xl md:text-5xl pt-1'  style={{ userSelect: 'none' }}>Certifications</div>
                <div className='font-normal text-sm pt-2'  style={{ userSelect: 'none' }}>These are some of the certifications for courses I've completed.</div>
           </div>
            


<div className='flex flex-wrap justify-center gap-4 pt-6'>
            {certidata.map((cert)=>(<CertiCard key={cert.id} name={cert.name} image={cert.image} description={cert.description} more={cert.more} />))}
            </div>

          
  

           
         
            
       
               
        </div>
    </div>
  )
}

export default Section6