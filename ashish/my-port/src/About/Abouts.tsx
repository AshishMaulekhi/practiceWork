import { use, useEffect, useState } from "react"
import { Info } from "./Info"
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import TRUNKS from "vanta/src/vanta.trunk"
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { toUSVString } from "util";

const Abouts = () => {

  const [dots, setdots] = useState<any>(null)
  const[trunk,settrunk] = useState<any>(null)
  useEffect(() => {
    if (!dots) {
      setdots(DOTS({
        el: "#bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xA4FFE7,
          color2: 0xbb814e,
          backgroundColor: 0x112240,
          
          size:2.80,
          spacing: 20.00,
          showLines: false 
      }))
    }
    if(!trunk){
      settrunk(TRUNKS({
          el:"#I_trunk",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xA4FFE7,
          backgroundColor:  0x112240,
          spacing: 0.00,
          chaos: 4.00
      }))
    }
    return () => {
      if (dots) dots.destroy()
      if(trunk) trunk.destroy()
    }
  }, [dots,trunk])

  return (
    <div id="bg" className="overflow-hidden flex justify-around items-center font-mono px-16 h-[80vh]">
       <div className="text-navyS-200 ml-16 w-3/5 flex flex-col">
        <div className="text-3xl mt-5">Hi, I am</div>
        <div className="text-mintS-200 my-5 ntext-extrabold text-5xl">{Info.name}</div>
        <div className="text-navyS-100 mb-5 text-4xl flex font-semibold overflow-hidden"> I'm a&nbsp;<span className="text-mintS-200"><Typewriter
          options={{
            strings: Info.stack,
            autoStart: true,
            loop: true,
          }}
        /></span></div>
        <div className="md:text-lg mb-5 w-[90%] text-justify font-semibold text-navyS-200">{Info.about}</div>
        <div className="flex gap-5">
        <Button component="a" href="https://drive.google.com/file/d/10bPLJYgpqTtW1CveorPjqqdNjDwvoL6I/view?usp=sharing" target="_black " variant="filled" color="#64FFDA" size="lg" className="!text-semibold !w-fit !text-xl !text-navyS-600 " 
        > Resume
        </Button>

        <Button variant="filled" color="#64FFDA" size="lg" className="!text-semibold !w-fit !text-xl !text-navyS-600 " onClick={(event) => event.preventDefault()}
        >Download 
        </Button>


        </div>
        
      </div> {/* left section */}
       <div className="h-[50vh] w-[25vw] flex justify-center rounded-full overflow-hidden" id="I_trunk">
        <img  src="./linkedin_profile.jpeg" className="rounded-full" alt="profile" />
      </div> {/* right section */}
    </div>
  )
}

export default Abouts