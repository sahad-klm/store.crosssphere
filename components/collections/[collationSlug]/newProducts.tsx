import { popularProducts } from '@/lib/data';
import RateOfProduct from '@/ui/rate';
import { Rating } from '@/ui/rating';
import React from 'react';

const NewProducts = () => {
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll rounded-xl border px-4 pb-8 pt-3 shadow-md">
      <h2 className="before:content- relative mb-4 w-full shrink-0 border-b pb-4 font-head text-[24px] text-gray-800 before:absolute before:-bottom-[1px] before:h-[2px] before:w-14 before:bg-gray-300 md:pb-5 md:text-h4">
        New Products
      </h2>
      {popularProducts.map((item, idx) => (
        <>
          {idx <= 1 && (
            <div
              className={`xl:grid h-full xl:w-min w-full grid-flow-col gap-2 flex items-center ${
                idx - 1 && 'border-b'
              } pb-3`}
            >
              <div className=" xl:h-full xl:w-max w-[80px] items-center justify-center p-2">
                <img
                  src={item.picture}
                  className="xl:w-[100px] xl:object-contain object-cover w-full"
                  alt={item.name}
                />
              </div>
              <div className="flex-col items-start justify-start">
                <h4 className="font-head text-xl text-emerald-500 ">
                  {item.name}
                </h4>

                <Rating
                  rating={item.rating}
                  className="mx-0 mt-1 mb-1 h-5 pb-0"
                />
                <RateOfProduct offer={item.offer} rate={item.rate} />
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default NewProducts;