import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectInfo } from '../About/Info'

const MainProject = () => {
  return (
    <div className='px-16 mx-20 my-5  font-mono'>
      <h1 className='items-center text-navyS-200 text-center font-semibold text-4xl mb-5'><span className='text-mintS-500'>02&nbsp;</span> Projects</h1>
      <div className='flex flex-wrap gap-5'>
         {
            ProjectInfo.map((project:any,idx:number)=>(
               <ProjectCard key={idx}  title={project.title} desc={project.desc} image={project.image} live={project.live} link={project.link} technologies={project.technologies}  />
            ))
         }
      </div>
    
    </div>
    
  )
}

export default MainProject