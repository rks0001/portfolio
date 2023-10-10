import React from 'react'

import ExperienceCard from '../components/ExperienceCard'


const Section4 = () => {
  return (
    <div className='dark w-full h-full flex items-center'>
        <div className='w-full md:w-10/12 h-full mx-auto px-10 py-10 md:py-20 '>
            <div className='flex justify-center '>
              <div className='text-center'>
              <div className='font-bold text-5xl'>Experience</div>
            <div className='font-normal text-sm pt-2'>These are my experiences</div>
            <ExperienceCard role='Software Development Intern (March 23 - Aug 23)' company='AID 24x7(Medicine Delivery Service)' url='https://aid24x7.in/' urlname='https://aid24x7.in/' desc1='Worked on design and code of the website from scratch.' desc2='Build all frontend components using React' />
            
            <ExperienceCard role='Software Development Intern (April 22 - July 22)' company='Wealthisle Future Pvt Ltd.'  desc1='Worked on design and code of the website.' desc2='Quickly learned new framework and technology to execute team and company goals.' desc3='Added Web3 functionality to the website.'  />
            
              </div>
            
             </div>
        </div>
    </div>
  )
}

export default Section4