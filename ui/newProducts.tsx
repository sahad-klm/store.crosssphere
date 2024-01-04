import { productsData } from '@/lib/products';
import RateOfProduct from '@/ui/rate';
import { Rating } from '@/ui/rating';
import Image from 'next/image';
import React from 'react';

const NewProducts = ({ limit = 1 }: number | any): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border px-4 pb-8 pt-3 shadow-md">
      <h2 className="before:content- relative mb-4 w-full shrink-0 border-b pb-4 font-head text-[24px] text-gray-800 before:absolute before:-bottom-[1px] before:h-[2px] before:w-14 before:bg-gray-300 md:pb-5 md:text-h4">
        New Products
      </h2>
      {productsData.map((item, idx) => (
        <React.Fragment key={item.id}>
          {idx <= limit && (
            <div
              className={`flex h-full w-full grid-flow-col items-center gap-2 xl:grid ${
                idx <= limit - 1 && 'border-b'
              } pb-3`}
            >
              <div className=" w-[80px] items-center justify-center p-2 xl:h-full xl:w-max">
                <Image
                  width={100}
                  height={500}
                  loading="lazy"
                  src={item.picture}
                  className="w-full object-cover xl:w-[100px] xl:object-contain"
                  alt={item.name}
                />
              </div>
              <div className="flex-col items-start justify-start ">
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default NewProducts;
