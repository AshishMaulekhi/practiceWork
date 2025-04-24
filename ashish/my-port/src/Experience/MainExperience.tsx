import React from 'react';
import { ExperienceInfo } from '../About/Info';
import ExpCard from './ExpCard';
import { Timeline } from '@mantine/core';

const MainExperience = () => {
  return (
    <div className='px-16 mx-20 mb-10 font-mono' id='skills'>
      <h1 className='text-4xl  font-bold !text-center text-navyS-200'>
        <span className='text-mintS-500'>04&nbsp;</span>
        Experience
      </h1>
      <Timeline   color='#64FFDA'  active={1} bulletSize={30} lineWidth={2}>
        <ExpCard data={ExperienceInfo} />
      </Timeline>
    </div>
  );
};

export default MainExperience;
