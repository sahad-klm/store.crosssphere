import { feathersInTotals } from 'constants/data';
import React from 'react';
import { Bottom } from './Bottom';
import Top from './Top';

const Feathers = (): JSX.Element => {
  return (
    <section className="mt-[50px] flex w-full flex-col items-center justify-center overflow-hidden  px-4">
      <Top />
      <Bottom />
    </section>
  );
};

export default Feathers;
