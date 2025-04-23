import { IconHexagonLetterC } from "@tabler/icons-react"
import SideBar from "./SideBar";
import { Link} from "react-router-dom";


const links=["About","Work","Experience","Contact","Resume"];
const navlinks=(col:boolean)=>(
   links.map((link, idx)=>(
     <Link to={`/${link}`} key={idx}>
        <div className=  {`${col?'flex flex-col items-center ':''}  text-light-300 hover:text-mintS-500`}><span className="text-mintS-500">0.{idx+1} </span>{link}</div>
    </Link>)
  )
)


const Header = () => {
  return (
    <nav className="flex   justify-between bg-navyS-800 h-[15vh] items-center w-full  ">
      <div className="text-btcolor-500 !z-10 md:ml-5">
        <Link to='/'>
          <IconHexagonLetterC   size={48} color='#69FFD6' stroke={1.5}/>
        </Link>
      </div>
      <div className="  justify-evenly gap-16 mr-5  md:flex hidden">
         {navlinks(false)}
      </div>
      
      <SideBar/>
    </nav>
  )
}

export default Header
export {navlinks};
