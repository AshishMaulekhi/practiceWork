import React from 'react';
import { ExperienceInfo } from '../About/Info';
import ExpCard from './ExpCard';
import { Timeline, useMatches } from '@mantine/core';

const MainExperience = () => {
  const size=useMatches({
    xs:15,
    md:20,
})
const dot=useMatches({
    xs:25,
    md:30,
})

  return (
    <div className='px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono' id='Experience'>
      <h1 className='text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10  font-bold text-center  text-navyS-200'>
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
