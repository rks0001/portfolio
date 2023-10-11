import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt,FaReact,FaAws} from 'react-icons/fa'
import {DiNodejs} from 'react-icons/di'
import {SiJavascript,SiRedux,SiTypescript,SiApollographql,SiPrisma,SiTailwindcss,SiMongodb,SiMui,SiFirebase} from 'react-icons/si'
import {GrGraphQl} from 'react-icons/gr'
import {TbBrandNextjs} from 'react-icons/tb'
import {BsGit} from 'react-icons/bs'
import SkillIcon from '../components/SkillIcon'

const Section3 = () => {
  return (
    <div className='dark w-full h-full flex items-center ' style={{ userSelect: 'none' }}>
        <div className='w-full md:w-10/12 h-full mx-auto px-10 py-10 md:py-20'>
            <div className='flex flex-col md:flex-row items-center '>
                <div className='md:flex-1 flex-col justify-center mx-auto'>
                <div className="relative font-semibold text-[7vh] md:text-[9vh] leading-none pt-1 text-transparent bg-clip-text bg-cover bg-gradient-to-br from-purple-600 via-indigo-600 to-indigo-800 tracking-normal md:tracking-normal " style={{ backgroundImage: "linear-gradient(135deg, #6355d5 3%, #5429cf 40%, #491ad9 70%)" }}>
  Skills
</div>
                <div className='font-normal text-sm pt-1'>These are my skills and this contains all the technologies
and programming languages that I have learnt until now.
I am constantly learning, therefore I may update
this section more often.</div>
               
                
              
                
                </div>
                <div className='md:flex-1 flex flex-col mx-auto md:px-10' >
                    <div className='flex md:justify-normal justify-evenly flex-wrap py-4 md:py-0'>
                    <SkillIcon icon={<AiFillHtml5 size={48} color='#5429cf' />} hoverText="HTML"/>
                    <SkillIcon icon={<FaCss3Alt size={48} color='#5429cf'/>} hoverText="CSS"/>
                    <SkillIcon icon={<SiJavascript size={48} color='#5429cf'/>} hoverText="Javascript"/>
                    <SkillIcon icon={<SiTypescript size={48} color='#5429cf'/>} hoverText="Typescript"/>
                    <SkillIcon icon={<FaReact size={48} color='#5429cf'/>} hoverText="React"/>
                    <SkillIcon icon={<SiRedux size={48} color='#5429cf'/>} hoverText="Redux"/>
                    <SkillIcon icon={<TbBrandNextjs size={48} color='#5429cf'/>} hoverText="NextJS"/>
                    <SkillIcon icon={<DiNodejs size={48} color='#5429cf'/>} hoverText="NodeJS"/>
                    <SkillIcon icon={<BsGit size={48} color='#5429cf'/>} hoverText="Git"/>
                    
                    <SkillIcon icon={<SiTailwindcss size={48} color='#5429cf'/>} hoverText="Tailwind"/>
                    <SkillIcon icon={<SiMui size={48} color='#5429cf' />}hoverText="MaterialUI"/>
                    <SkillIcon icon={<SiMongodb size={48} color='#5429cf' />}hoverText="MongoDB"/>
                   
                    </div>
                    <div className='text-left font-medium text-sm px-3'>Familiar with -</div>
                    <div className='flex md:justify-normal justify-evenly flex-wrap py-4 md:py-0'>
                    <SkillIcon icon={<GrGraphQl size={48} color='#5429cf'/>} hoverText="GraphQL"/>
                    <SkillIcon icon={<SiApollographql size={48} color='#5429cf'/>} hoverText="Apollo"/>
                    <SkillIcon icon={<SiPrisma size={48} color='#5429cf'/>} hoverText="Prisma"/>
                    <SkillIcon icon={<FaAws size={48} color='#5429cf'/>} hoverText="AWS"/>
                    <SkillIcon icon={<SiFirebase size={48} color='#5429cf'/>} hoverText="Firebase"/>
                    
                   
                    
                    
                    
                   
                   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3