import { Timeline, useMatches } from '@mantine/core';
import { IconBriefcaseFilled } from '@tabler/icons-react';
import React from 'react';

type ExpItem = {
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
};

const ExpCard = ({ data }: { data: ExpItem[] }) => {
  const size=useMatches({
    xs:15,
    md:20,
})

  return (
    <>
      {data.map((item, idx) => (
        <Timeline.Item data-aos="fade-up" data-aos-duration='800'
          key={idx}
          className='!pt-12 !mb-2 sm-mx:!p-1'
          bullet={<IconBriefcaseFilled className='!text-navyS-800 ' size={size} />}
        >
          <div className='w-[98%] border border-mintS-500 shadow-[0_0_10px_0_#64FFDA50]  hover:-translate-y-2 transition transform duration-300 ease-in-out rounded-xl flex p-2 flex-col gap-2 sm-mx:p-2'>
            <div className='flex gap-2 items-center'>
              <div>
                <img className='w-42 h-16 md-mx:w-32' src="/MOLogo.png" alt="profilemango" />
              </div>
              <div className='flex flex-col'>
                <div className='text-navyS-100 font-semibold sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base text-2xl'>{item.role}</div>
                <div className='text-navyS-300 text-lg font-semibold text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs'>
                  {item.company} &#x2022;
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
            <div className="text-navyS-200 leading-6 text-justify md-mx:text-sm xs-mx:text-xs ">{item.desc}</div>
            <div>
               <span className='font-semibold text-lg text-navyS-100'>Skills:</span>
              {item.skills.map((skill, idx) => (
                <span className='text-navyS-200 font-semibold ' key={idx}>&#x2022; {skill} </span>
              ))}
            </div>
          </div>
        </Timeline.Item>
      ))}
      <Timeline.Item   data-aos="fade-up" data-aos-duration='1000'      
          bullet={<IconBriefcaseFilled className='!text-navyS-800  ' size={size} />}
        ></Timeline.Item>
    </>
  );
};

export default ExpCard;
