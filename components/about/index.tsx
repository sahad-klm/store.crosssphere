import HeadRootNames from '@/ui/HeadRootNames';
import Error from 'next/error';
import React, { useState } from 'react';
import OurPerformance from './OurPerformance';
import OurThings from './OurThings';
import OutTeam from './OutTeam';
import SmallIntroduction from './SmallIntroduction';
import TotalCountsOfDetails from './TotalCountsOfDetails';
import WhatWeProvide from './WhatWeProvide';

const About = (): JSX.Element => {
  const [isError, setIsError] = useState<any>();

  if (isError)
    return (
      <Error
        statusCode="seem ann bro"
        title={`sathanam missing ann pinnea va `}
      />
    );
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-lg:mt-[100px] ">
      <HeadRootNames customPath="About" />
      <div className="mx-4  grid lg:mx-[5%] xl:mx-[10%]">
        <SmallIntroduction />
        <WhatWeProvide />
        <OurPerformance />
      </div>
      <div className="mx-4 grid">
        <OurThings />
        <TotalCountsOfDetails />
      </div>
      <div className="mx-4 grid lg:mx-[5%] xl:mx-[10%]">
        <OutTeam />
      </div>
    </div>
  );
};

export default About;
