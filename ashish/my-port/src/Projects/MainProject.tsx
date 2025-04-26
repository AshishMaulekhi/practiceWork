import ProjectCard from './ProjectCard'
import { ProjectInfo } from '../About/Info'

const MainProject = () => {
  return (
    <div className='px-16 my-10 font-mono md-mx:px-6 'id='Project'>
      <h1 className='text-4xl sm-mx:text-3xl xs-mx:text-2xl text-center mb-10 font-bold text-navyS-200'>
        <span className='text-mintS-500'>02.&nbsp;</span> Projects
      </h1>
      <div className='flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2'>
        {
          ProjectInfo.map((project: any, index: number) => (
            <ProjectCard
              key={index}
              title={project.title}
              desc={project.desc}
              image={project.image}
              live={project.live}
              link={project.link}
              github={project.github}
              technologies={project.technologies}
            />
          ))
        }
      </div>
    </div>
  )
}

export default MainProject;
