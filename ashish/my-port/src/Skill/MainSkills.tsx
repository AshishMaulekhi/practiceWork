import React from 'react'
import { SkillInfo } from '../About/Info'
import SkillCard from './SkillCard'

const MainSkills = () => {
  return (
    <div className='px-16 my-10 md-mx:px-6 font-mono lg:pt-20 '  id='skills'   >
      <h1 className='text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center  text-navyS-200'>
         <span className='text-mintS-500 '>03&nbsp;</span>
         Skills
      </h1>
      <div className='flex flex-wrap gap-4 justify-around md-mx:justify-between sm-mx:justify-center md-mx:gap-2'>
         {
            SkillInfo.map((skill:any,idx:number)=>(
               <SkillCard key={idx} title={skill.title} skills={skill.skills}  />
            ))
         }
      </div>
    </div>
  )
}

export default MainSkills