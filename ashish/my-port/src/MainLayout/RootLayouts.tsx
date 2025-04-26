import React, { useEffect, useState } from 'react'
import Mail from '../Components/Mail'
import Social from '../Components/Social'
import Abouts from '../About/Abouts'
import MainProject from '../Projects/MainProject'
import MainSkills from '../Skill/MainSkills'
import MainExperience from '../Experience/MainExperience'
import Contacts from '../Contact/Contacts'
import LoaderIcons from '../Loader/LoaderIcons'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const RootLayouts = () => {
  const[loading,setloading]=useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setloading(false)
    },2500)
  }, [])
  
  return (
    <div className="min-h-[100vh] bg-navyS-800 font-['Poppins']" >
      {
        loading!==true?<>
      <Header/>
      <Abouts/>
      <MainProject/>
      <MainSkills/>
      <MainExperience/>
      <Contacts/>
      <Mail/>
      <Social/>
      <Footer/>

        </>:<LoaderIcons/>
      }
      
   

    </div>
  )
}

export default RootLayouts
