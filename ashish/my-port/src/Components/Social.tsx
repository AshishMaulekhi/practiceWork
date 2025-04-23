import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from '@tabler/icons-react'


const Social = () => {
   const socialLinks=[
      {
         link:"https://github.com/ashishmaulekhi",
         icon:IconBrandGithub
      },
      {
         link:"https://linkedin/ashishmaulekhi",
         icon:IconBrandLinkedin
      },
      {
         link:"https://instagram.com/ashishmaulekhi",
         icon:IconBrandInstagram
      },
      {
         link:"https://leetcode.com/u/dex_41",
         icon:IconBrandLeetcode
      }
   ]
   
   const socialIcons=()=>(
      
      socialLinks.map((link,idx)=>(
         <a key={idx} href={`${link.link}`} target="_blank " className='text-navyS-200 text-lg hover:text-mintS-500 hover:translate-x-1 -rotate-90 transition easy-in-out duration-300 '>
            {<link.icon stroke={2.0}/>}
         </a>
      ))
   )
   return (
      <div className=' ml-10 flex items-center gap-5 fixed bottom-32 -left-44 rotate-90 '>
         {socialIcons()}
        <hr  className='w-[200px] rounded-full'/>
      </div>
    )
}

export default Social