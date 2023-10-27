import React from 'react';
import { GoLink } from 'react-icons/go';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({ name, image, description, tool1, tool2, tool3, linkone, linktwo, tool4 }) => {
  return (
    <div className='bg-[#1f1f1f] rounded-md px-4 py-2 w-full md:w-[30%] flex flex-col' style={{ userSelect: 'none' }}>
      <div className='font-bold text-lg pt-3'>{name}</div>
      <div style={{ userSelect: 'none' }}>
        <img className="p-1" src={image} alt="proimage" />
      </div>
      <div className='flex flex-wrap gap-1 pt-2' style={{ userSelect: 'none' }}>
        {tool1 && (
          <div className='bg-[#121212] px-3 py-1 rounded-lg text-xs flex items-center'>{tool1}</div>
        )}
        {tool2 && (
          <div className='bg-[#121212] px-3 py-1 rounded-lg text-xs flex items-center'>{tool2}</div>
        )}
        {tool3 && (
          <div className='bg-[#121212] px-3 py-1 rounded-lg text-xs flex items-center'>{tool3}</div>
        )}
        {tool4 && (
          <div className='bg-[#121212] px-3 py-1 rounded-lg text-xs flex items-center'>{tool4}</div>
        )}
      </div>
      <p className='text-xs py-2' style={{ userSelect: 'none' }}>
        {description}
      </p>
      <div className='mt-auto'>
        <div className='flex justify-between py-3'>
          <div className='flex gap-4'>
          <a
            className="bg-[#5429cf] px-4 py-1 rounded-md text-sm font-medium flex gap-2 items-center"
            href={linkone}
            target='_blank'
            rel='noreferrer'
          >
            <GoLink size={16} color='white' /> Website
          </a>
          <a
            className="bg-[#5429cf] px-4 py-1 rounded-md text-sm font-medium flex gap-2 items-center"
            href={linktwo}
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub size={16} color='white' /> Github
          </a>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
