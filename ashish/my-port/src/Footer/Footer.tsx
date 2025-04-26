
import { Info, socialLinks } from '../About/Info'
const Footer = () => {
  // md-mx:flex  gap-8 sm-mx:gap-6 hidden

  const socialIcons=socialLinks.map((socialLink, index)=>{
    return <a   key={index} href={`${socialLink.link}`} target="_blank "  className="text-navyS-200 font-mono text-lg  hover:text-mintS-500 hover:scale-105 transition transform duration-300 ease-in-out">
    <socialLink.icon stroke={1.5}  size={25} />
</a>
})

  return (
    <div className='mx-36 mt-20   font-mono flex flex-col gap-2 items-center'>
      <div className='text-3xl  md-mx:text-2xl  font-semibold text-center text-mintS-500'>{Info.name}</div>
      <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcons}</div>
      <div  className="text-navyS-200 text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center" >Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span>  </div>
    </div>
  )
}

export default Footer