'use client';
import { OneProductWithOffer } from '@/ui/OneProductWithOffer';
import { TextCategory, TextCategoryMob } from '@/ui/TextCategory';
import { popularProductCategory } from '@/lib/data';
import React from 'react';
import { productsData } from '@/lib/products';
import { popularProductsData } from '@/lib/productsInDeferentCategory';

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

const PopularProducts = (): any => {
  const [isSelectedCatN, setIsSelectedCatN] = React.useState<any>(
    popularProductCategory[0].name,
  );
  const [mouseOver, setMouseOver] = React.useState<any>();
  const [toggleOn, setToggleOn] = React.useState<boolean | any>(false);
  const [isproductData, setIsProductData] =
    React.useState<any[]>(popularProductsData);
  console.log(isSelectedCatN);

  React.useEffect(() => {
    if (isSelectedCatN === 'All') return setIsProductData(popularProductsData);
    else
      return setIsProductData(
        productsData?.filter(
          (item) => item.category === isSelectedCatN && item,
        ),
      );
  }, [isSelectedCatN]);

  return (
    <div className="mt-[50px] flex w-full flex-col items-center justify-center overflow-hidden px-4">
      <div className="mb-10 flex w-full items-center justify-between">
        <h4 className="mr-4  font-head text-[28px] text-gray-800 md:text-[32px]">
          Popular Products
        </h4>
        <div>
          <div className="hidden flex-row flex-wrap gap-4 md:flex">
            {popularProductCategory?.map(
              (item: { id: React.Key | any; name: any }) => (
                <TextCategory
                  key={item.id}
                  {...item}
                  isSelectedCatN={isSelectedCatN}
                  setIsSelectedCatN={setIsSelectedCatN}
                />
              ),
            )}
          </div>
          <div className="flex md:hidden">
            <p
              onClick={() => setToggleOn(!toggleOn)}
              className="cursor-pointer font-head  text-xl leading-3 text-gray-800"
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

      <div className="flex w-full flex-row justify-start gap-5 overflow-x-scroll md:grid md:grid-cols-3 md:flex-wrap  md:overflow-visible lg:grid-cols-5">
        {isproductData?.map((item: Props, idx: React.Key) => (
          <React.Fragment key={item.id}>
            {idx <= 6 && (
              <OneProductWithOffer
                mouseOver={mouseOver}
                setMouseOver={setMouseOver}
                key={item.id}
                {...item}
                buttonStyle="add"
                classNameForTotal="w-full md:h-auto h-min mx-auto "
                classNameForPic="p-2"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
