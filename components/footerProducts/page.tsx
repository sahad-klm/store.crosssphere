import { OneProductLeftPicRightDetail } from '@/ui/OneProductWithOffer';
import RateOfProduct from '@/ui/rate';
import { Rating } from '@/ui/rating';
import { popularProducts } from '@/lib/data';
import React from 'react';

const FooterProducts = (): JSX.Element | any => {
  const classNameForHead =
    'relative mr-4 shrink-0 border-b md:pb-5 pb-4 font-head md:text-h4 text-[22px] text-gray-800 before:absolute before:-bottom-[1px] before:h-[2px] before:w-14 before:bg-gray-300 before:content- w-full md:mb-4 mb-3';

  return (
    <section className="mt-[50px] flex w-full flex-col justify-center overflow-hidden px-4  md:items-center">
      <div className="grid md:gap-5 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-start justify-start md:gap-5 gap-4">
          <h4 className={`${classNameForHead}`}>Popular Products</h4>
          <OneProductLeftPicRightDetail
            productsData={popularProducts}
            limitProductShow={4}
          />
        </div>
        <div className="flex flex-col items-start md:gap-5 gap-4 ">
          <h4 className={`${classNameForHead}`}>Trending Products</h4>
          <OneProductLeftPicRightDetail
            productsData={popularProducts}
            limitProductShow={4}
          />
        </div>
        <div className="flex flex-col items-start justify-start md:gap-5 gap-4">
          <h4 className={`${classNameForHead}`}>Recently Added</h4>
          <OneProductLeftPicRightDetail
            productsData={popularProducts}
            limitProductShow={4}
          />
        </div>
        <div className="flex flex-col items-start justify-start md:gap-5 gap-4">
          <h4 className={`${classNameForHead}`}>Top Rated</h4>
          <OneProductLeftPicRightDetail
            productsData={popularProducts}
            limitProductShow={4}
          />
        </div>
      </div>
    </section>
  );
};

export default FooterProducts;
