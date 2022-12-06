import TextCategory from '@/ui/TextCategory';
import { popularProductCategory } from 'constants/data';
import React, { Key } from 'react';
import EachPopularProduct from './EachPopularProduct';

const PopularProducts = () => {
  const [isSelectedCatN, setIsSelectedCatN] = React.useState(popularProductCategory[0].name);

  return (
    <div className="mt-[50px] flex w-full flex-col items-center justify-center overflow-hidden px-4">
      <div className="mb-7 flex w-full items-center justify-between">
        <h4 className="mr-4 shrink-0 font-head text-[32px] text-gray-800">
          Popular Products
        </h4>
        <span className="flex flex-row flex-wrap gap-4 ">
          {popularProductCategory?.map((item: { id: Key; name: string }) => (
            <TextCategory
              key={item.id}
              {...item}
              isSelectedCatN={isSelectedCatN}
              setIsSelectedCatN={setIsSelectedCatN}
            />
          ))}
        </span>
      </div>

      <EachPopularProduct />
    </div>
  );
};

export default PopularProducts;
