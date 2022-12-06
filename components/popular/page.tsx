import { popularProductCategory } from 'constants/data';
import React, { Key } from 'react';
import EachPopularProduct from './EachPopularProduct';

const PopularProducts = () => {
  const [isSelectedCatN, setIsSelectedCatN] = React.useState('All');

  return (
    <div className="mt-[50px] mb-96 flex w-full flex-col items-center justify-center overflow-hidden px-4">
      <div className="mb-7 flex w-full items-center justify-between">
        <h4 className="font-head text-[32px] text-gray-800">
          Feathered Categories
        </h4>
        <span className="grid grid-flow-col gap-4">
          {popularProductCategory?.map((item: { id: Key; name: string }) => (
            <p
              key={item.id}
              className={`font-head ${
                isSelectedCatN === item.name
                  ? 'text-emerald-500'
                  : 'text-gray-800'
              } cursor-pointer transition hover:-translate-y-1 hover:text-emerald-500`}
              onClick={() => setIsSelectedCatN(item.name)}
            >
              {item.name}
            </p>
          ))}
        </span>
      </div>

      <EachPopularProduct />
    </div>
  );
};

export default PopularProducts;
