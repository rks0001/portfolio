import React from 'react'
import CertiCard from '../components/CertiCard'
import certidata from '../data/certidata'


const Section6 = () => {
  return (
    <div className='dark w-full h-full flex items-center'>
        <div className='w-full md:w-10/12 h-full  mx-auto px-10 py-10 md:py-20'>
        <div className='md:text-center text-left'>
        <div className="relative font-semibold text-[6vh] md:text-[9vh] leading-none pt-1 text-transparent bg-clip-text bg-cover bg-gradient-to-br from-purple-600 via-indigo-600 to-indigo-800 tracking-normal md:tracking-normal " style={{ backgroundImage: "linear-gradient(135deg, #6355d5 3%, #5429cf 40%, #491ad9 70%)" }}>
  Certifications
</div>
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