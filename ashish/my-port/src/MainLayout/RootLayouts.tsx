import React from 'react'
import Mail from '../Components/Mail'
import Social from '../Components/Social'
import Abouts from '../About/Abouts'
import MainProject from '../Projects/MainProject'
import MainSkills from '../Skill/MainSkills'
import MainExperience from '../Experience/MainExperience'

const RootLayouts = () => {
  return (
    <div>
      <Abouts/>
      <Mail/>
      <Social/>
      <MainProject/>
      <MainSkills/>
      <MainExperience/>

    </div>
  )
}

export default RootLayouts
