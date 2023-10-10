import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsdata from '../data/projectsdata';
import nextjsprojects from '../data/nextjsprojects';
import web3projects from '../data/web3projects';

const ProjectsTab = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }

    return (
        <div className="px-10">
            <div className="flex gap-5 py-3 ">
                <div
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer ${activeTab === 1 ? 'border-b-2 border-white bg-[#1f1f1f]' : ''} p-2 rounded-lg`}
                    style={{ userSelect: 'none' }} 
                >
                    React
                </div>
                <div
                    onClick={() => handleTabClick(2)}
                    className={`cursor-pointer ${activeTab === 2 ? 'border-b-2 border-white bg-[#1f1f1f]' : ''} p-2 rounded-lg`}
                    style={{ userSelect: 'none' }} 
                >
                    NextJS
                </div>
                <div
                    onClick={() => handleTabClick(3)}
                    className={`cursor-pointer ${activeTab === 3 ? 'border-b-2 border-white bg-[#1f1f1f]' : ''} p-2 rounded-lg`}
                    style={{ userSelect: 'none' }} 
                >
                    Web3
                </div>
            </div>
            {activeTab === 1 && <div className='flex flex-wrap justify-evenly  transition ease-in-out '>{projectsdata.map((project)=>(<ProjectCard key={project.id}  name={project.name} image={project.image} description={project.description} tool1={project.tool1} tool2={project.tool2} tool3={project.tool3} linkone={project.linkone} linktwo={project.linktwo}/>))}</div>}
            
            {/* Tab2  */}
            {activeTab === 2 && <div className='flex flex-wrap justify-evenly  transition ease-in-out'>{nextjsprojects.map((project)=>(<ProjectCard key={project.id}  name={project.name} image={project.image} description={project.description} tool1={project.tool1} tool2={project.tool2} tool3={project.tool3} linkone={project.linkone} linktwo={project.linktwo}/>))}</div>}
            {/* Tab 3 */}
            {activeTab === 3 && <div className='flex flex-wrap justify-evenly  transition ease-in-out'>{web3projects.map((project)=>(<ProjectCard key={project.id}  name={project.name} image={project.image} description={project.description} tool1={project.tool1} tool2={project.tool2} tool3={project.tool3} linkone={project.linkone} linktwo={project.linktwo}/>))}</div>}
        </div>
    )
}

export default ProjectsTab;
