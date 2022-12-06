import { popularProducts } from 'constants/data';
import React from 'react';
import ProductWithTimer from './ProductWithTimer';

const DealsOfTheDay = () => {
  return (
    <div className="mt-[50px] flex w-full flex-col items-center justify-center overflow-hidden px-4  mb-96">
      <div className="mb-7 flex w-full items-center justify-between">
        <h4 className="mr-4 shrink-0 font-head text-[32px] text-gray-800">
          Popular Products
        </h4>
        <span className="flex flex-row flex-wrap gap-4 ">
          All deals {'>'}
        </span>
      </div>
      <div className='md:grid flex
      xl:grid-cols-4 md:grid-cols-2 w-full gap-2 grid-cols-4 overflow-auto scroll-m-0'>
      {popularProducts?.map((item, idx) => (
        <>
        {idx + 1 <= 4 && 
          <ProductWithTimer key={item.id} {...item} />
        }
        </>
        ))}
        </div>
    </div>
  );
};

export default DealsOfTheDay;
