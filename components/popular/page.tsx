'use client';
import { OneProductWithOffer } from '@/ui/OneProductWithOffer';
import { TextCategory, TextCategoryMob } from '@/ui/TextCategory';
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

const PopularProducts = ():any => {
  const [isSelectedCatN, setIsSelectedCatN] = React.useState<any>(
    popularProductCategory[0].name,
  );
  const [mouseOver, setMouseOver] = React.useState<any>();
  const [toggleOn, setToggleOn] = React.useState<boolean | any>(false);


  return (
    <div className="mt-[50px] flex w-full flex-col items-center justify-center overflow-hidden px-4">
      <div className="mb-7 flex w-full items-center justify-between">
        <h4 className="mr-4 shrink-0 font-head text-[28px] text-gray-800 md:text-[32px]">
          Popular Products
        </h4>
        <div>
          <div className='md:flex hidden flex-row flex-wrap gap-4'>
          {popularProductCategory?.map((item: { id: React.Key|any; name: any }) => (
            <TextCategory
            key={item.id}
            {...item}
            isSelectedCatN={isSelectedCatN}
            setIsSelectedCatN={setIsSelectedCatN}
            />
            ))}
            </div>
            <div  className='md:hidden flex'>
            <p
              onClick={() => setToggleOn(!toggleOn)}
              className="cursor-pointer font-head  leading-3 text-gray-800 text-xl"
              >
              {isSelectedCatN}
              <i className="fa-solid fa-chevron-down relative ml-2 text-gray-800 duration-700" />
            </p>
            {toggleOn && (
              <TextCategoryMob
              setToggleOn={setToggleOn}
              list={popularProductCategory}
              isSelectedCatN={isSelectedCatN}
              setIsSelectedCatN={setIsSelectedCatN}
              />
              )}
              </div>
        </div>
      </div>

      <div
        className="flex w-full flex-row gap-5 overflow-x-scroll md:overflow-visible md:grid md:grid-cols-3 md:justify-center lg:grid-cols-5 
    "
      >
        {popularProducts?.map((item: Props) => (
          <OneProductWithOffer
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            key={item.id}
            {...item}
            buttonStyle="add"
            classNameForPic="p-4"
            classNameForTotal='w-[245px]'
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
