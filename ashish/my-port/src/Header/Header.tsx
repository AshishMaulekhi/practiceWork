import { IconHexagonLetterC } from "@tabler/icons-react"
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";

const links=["About","Project","Experience","Contact","Resume"];
const navlinks=(col:boolean,clicked:any)=>{
  const handleClick=()=>{
    if(clicked)clicked();
  }
  
  return links.map((link, idx)=>(
    <a key={idx} onClick={handleClick} className={`${col?'flex flex-col items-center':''} text-navyS-100 text-lg font-mono hover:text-mintS-500`} href={`#${link}`}><span className="text-mintS-500">0{idx+1}. </span>{link}</a>
   

     )
  )
}


const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [shadow, setShadow] = useState(false);
    const controlNavbar = () => {
        if(window.scrollY>lastScrollY && window.scrollY>70)setShow(false);
        else setShow(true);
        if(window.scrollY>70)setShadow(true);
        else setShadow(false);
        setLastScrollY(window.scrollY);
    }
  useEffect(()=>{
    window.addEventListener('scroll',controlNavbar);
    return ()=>window.removeEventListener('scroll',controlNavbar);
  })
  return (
    <nav className={`flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-28  px-10  justify-between items-center xs-mx:px-4 xs-mx:h-20 `}>
        
    <IconHexagonLetterC className="z-10" size={isMobile?45:60} color="#64FFDA" stroke={1.25}/>
    <div className="bs:flex gap-8 hidden">
        {navlinks(false, null)}
    </div>
    <SideBar/>
</nav>
  )
}

export default Header
export {navlinks};
