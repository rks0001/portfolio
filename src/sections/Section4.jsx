import React from 'react'

import ExperienceCard from '../components/ExperienceCard'


const Section4 = () => {
  return (
    <div className='dark w-full h-full flex items-center'>
        <div className='w-full md:w-10/12 h-full mx-auto px-10 py-10 md:py-20 '>
            <div className='flex justify-center '>
              <div className='md:text-center text-left'>
              <div className="relative font-semibold text-[7vh] md:text-[9vh] leading-none pt-1 text-transparent bg-clip-text bg-cover bg-gradient-to-br from-purple-600 via-indigo-600 to-indigo-800 tracking-normal md:tracking-normal " style={{ backgroundImage: "linear-gradient(135deg, #6355d5 3%, #5429cf 40%, #491ad9 70%)" }}>
  Experience
</div>
            <div className='font-normal text-sm pt-2' style={{ userSelect: 'none' }}>These are my experiences</div>
            <ExperienceCard role='Software Development Intern' time="(March 23 - Aug 23)" company='AID 24x7(Medicine Delivery Service)' url='https://aid24x7.in/' urlname='https://aid24x7.in/' desc1='Worked on design and code of the website from scratch.' desc2='Build all frontend components using React' />
            
            <ExperienceCard role='Software Development Intern' time='(April 22 - July 22)' company='Wealthisle Future Pvt Ltd.'  desc1='Worked on design and code of the website.' desc2='Quickly learned new framework and technology to execute team and company goals.' desc3='Added Web3 functionality to the website.'  />
            
              </div>
            
             </div>
        </div>
    </div>
  )
}

export default Section4