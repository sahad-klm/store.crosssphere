import { feathersInTotals } from 'constants/data';
import React from 'react';
import Top from './Top';

const Feathers = (): JSX.Element => {
  return (
    <section className="mt-[50px] mb-96 flex w-full flex-col items-center justify-center overflow-hidden  px-4">
      <Top />
      <div className='grid lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-[50px] w-full sm:grid-cols-2'>
        {feathersInTotals?.map((item) => (
          <div key={item.id} className='flex bg-gray-200 rounded-xl items-center justify-start p-4 gap-6'>
            <img src={item.icon} alt="" className=' w-16 h-16 object-contain'/>
            <div>
              <h4 className='font-head text-[18px] text-gray-800'>{item.title}</h4>
              <p className='font-body text-gray-600 mt-[2px]'>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feathers;
