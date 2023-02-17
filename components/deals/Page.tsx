import { productsData } from '@/lib/products';
import { dealOftheDayProdutsData } from '@/lib/productsInDeferentCategory';
import React from 'react';
import ProductWithTimer from './ProductWithTimer';

const DealsOfTheDay = () => {
  return (
    <div className="mt-[50px] flex w-full flex-col items-center justify-start overflow-hidden  px-4">
      <div className="mb-7 flex w-full items-center justify-between">
        <h4 className="mr-4  font-head text-[28px] text-gray-800 md:text-[32px]">
          Deals of the day
        </h4>
        <span className="flex cursor-pointer flex-row flex-wrap gap-4 font-head  text-sm text-gray-800 md:text-[16px]">
          All deals {'>'}
        </span>
      </div>
      <div className="grid  w-full grid-flow-col grid-rows-1 gap-2 overflow-x-scroll md:grid-cols-2 md:grid-rows-2 md:gap-5 xl:grid-cols-4 xl:grid-rows-1">
        {dealOftheDayProdutsData?.map((item) => (
          <ProductWithTimer key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export const DealsOfTheDayInCollection = () => {
  return (
    <div className="mt-[50px] grid w-full flex-col items-center justify-start overflow-hidden">
      <div className="mb-10 flex w-full items-center justify-between">
        <h4 className="mr-4  font-head text-[28px] text-gray-800 md:text-[32px]">
          Deals of the day
        </h4>
        <span className="flex cursor-pointer flex-row flex-wrap gap-4 font-head  text-sm text-gray-800 md:text-[16px]">
          All deals {'>'}
        </span>
      </div>
      <div className="grid w-full grid-flow-row gap-5 overflow-scroll sm:grid-rows-2 md:grid-flow-col lg:grid-rows-1 xl:grid-cols-none">
        {productsData?.map((item, idx) => (
          <React.Fragment key={item.id}>
            {idx <= 3 && <ProductWithTimer {...item} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
