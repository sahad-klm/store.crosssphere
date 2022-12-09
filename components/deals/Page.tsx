import { popularProducts } from 'constants/data';
import React from 'react';
import ProductWithTimer from './ProductWithTimer';

const DealsOfTheDay = () => {
  return (
    <div className="mt-[50px] flex w-full flex-col items-center justify-center overflow-hidden  px-4">
      <div className="mb-7 flex w-full items-center justify-between">
        <h4 className="mr-4 shrink-0 font-head md:text-[32px] text-[28px] text-gray-800">
          Popular Products
        </h4>
        <span className="flex flex-row flex-wrap gap-4 cursor-pointer font-head  md:text-[16px] text-sm text-gray-800">All deals {'>'}</span>
      </div>
      <div
        className="flex w-full grid-cols-4 md:gap-5 gap-2 overflow-auto md:grid md:grid-cols-2 xl:grid-cols-4 scrollBar" 
      >
        {popularProducts?.map((item, idx) => (
          <React.Fragment>
            {idx <= 3 && <ProductWithTimer key={item.id} {...item} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
