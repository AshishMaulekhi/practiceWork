import { Info } from "./Info";

import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "../Resume/ResumeViewer";
import { IconDownload } from "@tabler/icons-react";
import { Particles } from "../magicUi/Particles";
import { NeonGradientCard } from "../magicUi/neon-gradient-card";

const Abouts = () => {
  const [opened, { open, close }] = useDisclosure(false);

  // ✅ Responsive Mantine button size based on screen width
  const btn = useMatches({
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  });

  return (
    <>
      <div
        id="About"
       data-aos="zoom-out-down" data-aos-duration="800" className=" bs:pt-32  flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-12 "
      >
        <Particles
          className="absolute inset-0 z-0"
          quantity={1000}
          ease={80}
          color="#64DDFA"
          vx={1}
          vy={1}
          refresh
        />

        {/* Left Section */}
        <div className="text-navyS-200 ml-16 xs-mx:ml-2 sm-mx:ml-2 bs-mx:ml-2 w-3/5 flex flex-col lg-mx:gap-3 bs-mx:items-center xs-mx:items-center bs:ml-10 bs:w-3/5" id="About">
          <div className="text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">Hi, I am</div>
          <div className="text-mintS-200 my-5 lg-mx:my-2 font-extrabold text-5xl lg-mx:text-4xl sm-mx:text-3xl xs-mx:text-2xl xsm-mx:text-xl">
            {Info.name}
          </div>
          <div className="text-navyS-100 mb-5 lg-mx:mb-2 text-[27px] flex font-semibold overflow-hidden lg-mx:text-2xl sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base">
            I'm a&nbsp;
            <span className="text-mintS-200" id="Resume">
              <Typewriter
                options={{
                  strings: Info.stack,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="md:text-xl mb-5 w-[90%] text-justify lg-mx:text-base font-semibold text-navyS-200 sm-mx:text-sm xs-mx:text-xs">
            {Info.about}
          </div>

          {/* ✅ Responsive Mantine Buttons */}
          <div className="xs-mx:w-[90%] flex gap-5 xs-mx:justify-between">
            <Button
              onClick={open}
              component="a"
              variant="filled"
              color="#64FFDA"
              size={btn}
              className="!text-semibold !w-fit !text-xl !text-navyS-600 xs-mx:!w-[46%]"
              
            >
              Resume
            </Button>

            <Button
              component="a"
              href="./Resumefile.pdf"
              download={`${Info.name}_resume`}
              rightSection={<IconDownload size={20} />}
              variant="outline"
              color="#64FFDA"
              size={btn}
              className="!text-semibold !w-fit !text-xl !text-mintS-500 xs-mx:!w-[46%]"
            >
              Download
            </Button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="z-10 h-fit w-fit flex justify-center items-center rounded-full bs:mr-10">
          <NeonGradientCard className="w-[325px] h-[325px] max-w-sm lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
            <img
              src="./linkedin_profile.jpeg"
              className="rounded-full w-full h-full"
              alt="profile"
            />
          </NeonGradientCard>
        </div>
      </div>

      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default Abouts;
