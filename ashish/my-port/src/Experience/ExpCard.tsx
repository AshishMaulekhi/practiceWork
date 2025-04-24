import { Timeline } from '@mantine/core';
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
  return (
    <>
      {data.map((item, idx) => (
        <Timeline.Item
          key={idx}
          className='!pt-10'
          bullet={<IconBriefcaseFilled className='!text-navyS-800 ' size={20} />}
        >
          <div className='w-[98%] border border-mintS-500 rounded-xl flex p-2 flex-col gap-1'>
            <div className='flex gap-2 mb-2'>
              <div>
                <img src="" alt="" />
              </div>
              <div className='flex flex-col'>
                <div className='text-navyS-100 font-semibold text-2xl'>{item.role}</div>
                <div className='text-navyS-300 flex gap-2'>
                  {item.company} &#x2022;
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
            <div className='text-navyS-300 text-justify'>{item.desc}</div>
            <div>
               <span className='font-semibold text-lg text-navyS-100'>Skills:</span>
              {item.skills.map((skill, idx) => (
                <span className='text-navyS-200 font-semibold ' key={idx}>&#x2022; {skill} </span>
              ))}
            </div>
          </div>
        </Timeline.Item>
      ))}
      <Timeline.Item         
          bullet={<IconBriefcaseFilled className='!text-navyS-800  ' size={20} />}
        ></Timeline.Item>
    </>
  );
};

export default ExpCard;
