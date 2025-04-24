import React from 'react'
import { SkillInfo } from '../About/Info'
import SkillCard from './SkillCard'

const MainSkills = () => {
  return (
    <div className='px-16  mx-20 mb-5 font-mono   ' id='skills'   >
      <h1 className='text-4xl mb-5 font-bold !text-center text-navyS-200'>
         <span className='text-mintS-500 '>03&nbsp;</span>
         Skills
      </h1>
      <div className='flex flex-wrap gap-4'>
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