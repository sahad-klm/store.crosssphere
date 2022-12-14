
import { popularProducts } from '@/lib/data';
import React from 'react';
import ProductWithTimer from './ProductWithTimer';

const DealsOfTheDay = () => {
  return (
    <div className="mt-[50px] flex w-full flex-col items-center justify-start overflow-hidden  px-4">
      <div className="mb-7 flex w-full items-center justify-between">
        <h4 className="mr-4  font-head md:text-[32px] text-[28px] text-gray-800">
          Deals of the day
        </h4>
        <span className="flex flex-row flex-wrap gap-4 cursor-pointer font-head  md:text-[16px] text-sm text-gray-800">All deals {'>'}</span>
      </div>
      <div
        className="overflow-scroll  md:gap-5 gap-2 grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-1 md:grid-rows-2 grid-rows-1 grid-flow-col w-full" 
      >
        {popularProducts?.map((item, idx) => (
          <React.Fragment key={item.id}>
            {idx <= 3 && <ProductWithTimer  {...item} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


export const DealsOfTheDayInCollection = () => {
  return (
    <div className="mt-[50px] grid w-full flex-col items-center justify-start overflow-hidden">
              <div className="mb-7 flex w-full items-center justify-between">
                <h4 className="mr-4  font-head text-[28px] text-gray-800 md:text-[32px]">
                  Deals of the day
                </h4>
                <span className="flex cursor-pointer flex-row flex-wrap gap-4 font-head  text-sm text-gray-800 md:text-[16px]">
                  All deals {'>'}
                </span>
              </div>
              <div className="grid md:grid-flow-col grid-flow-row w-full gap-5 overflow-scroll lg:grid-rows-1 sm:grid-rows-2 xl:grid-cols-none">
                {popularProducts?.map((item, idx) => (
                  <React.Fragment key={item.id}>
                    {idx <= 3 && <ProductWithTimer {...item} />}
                  </React.Fragment>
                ))}
              </div>
            </div>
  )
};



export default DealsOfTheDay;
