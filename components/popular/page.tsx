import { OneProductWithOffer } from '@/ui/OneProductWithOffer';
import TextCategory from '@/ui/TextCategory';
import { popularProductCategory, popularProducts } from 'constants/data';
import React from 'react';

type Props = {
  id: React.Key;
  name: string;
  rating?: number | any;
  tags?: string;
  rate?: number | any;
  offer?: number | any;
  picture?: string | any;
  bacPicture?: string | any;
};

const PopularProducts = () => {
  const [isSelectedCatN, setIsSelectedCatN] = React.useState(
    popularProductCategory[0].name,
  );
  const [mouseOver, setMouseOver] = React.useState<any>();

  return (
    <div className="mt-[50px] flex w-full flex-col items-center justify-center overflow-hidden px-4">
      <div className="mb-7 flex w-full items-center justify-between">
        <h4 className="mr-4 shrink-0 font-head text-[32px] text-gray-800">
          Popular Products
        </h4>
        <span className="flex flex-row flex-wrap gap-4 ">
          {popularProductCategory?.map(
            (item: { id: React.Key; name: string }) => (
              <TextCategory
                key={item.id}
                {...item}
                isSelectedCatN={isSelectedCatN}
                setIsSelectedCatN={setIsSelectedCatN}
              />
            ),
          )}
        </span>
      </div>

      <div
        className="grid w-full grid-cols-2 justify-center gap-5 md:grid-cols-3 lg:grid-cols-4
    "
      >
        {popularProducts?.map((item: Props) => (
          <OneProductWithOffer
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            key={item.id}
            {...item}
            buttonStyle="add"
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
