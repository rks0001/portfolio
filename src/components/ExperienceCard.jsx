import React from 'react'

import {BsLink45Deg} from 'react-icons/bs'
const ExperienceCard = (props) => {
  return (
    <div className='bg-[#1f1f1f] px-4 md:px-10 py-6 rounded-lg my-4 text-left'>
        <div className='md:items-center gap-1  bg-[#5429cf] text-white p-3 rounded-md my-2 font-medium text-lg md:text-xl'><div className="flex">{props.role}</div> <div className="text-sm">{props.time}</div> </div>
        <div className='text-white text-base px-3'>{props.company}</div>
        {props.urlname && ( <a href={props.url} target='_blank' rel="noreferrer" className='flex items-center gap-2 text-white text-sm'><BsLink45Deg/>{props.urlname}</a>)}
       
        <div className='text-sm p-3'>
            <ul >
              {props.desc1 && ( <li>- {props.desc1}</li>)}
              {props.desc2 && ( <li>- {props.desc2}</li>)}
              {props.desc3 && ( <li>- {props.desc3}</li>)}
              
            </ul>
            
            </div>
    </div>
  )
}

export default ExperienceCard