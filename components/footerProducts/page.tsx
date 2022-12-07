import { OneProductLeftPicRightDetail } from '@/ui/OneProductWithOffer';
import RateOfProduct from '@/ui/rate';
import { Rating } from '@/ui/rating';
import { popularProducts } from 'constants/data';
import React from 'react';

const FooterProducts = (): JSX.Element | any => {

  const classNameForHead = (
     'relative mr-4 shrink-0 border-b pb-5 font-head text-h4 text-gray-800 before:absolute before:-bottom-[1px] before:h-[2px] before:w-14 before:bg-gray-300 before:content- w-full mb-4'
  )
    

  return (
    <section className="mt-[50px] mb-96 flex w-full flex-col items-center justify-center overflow-hidden  px-4">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        <div className="flex flex-col items-start justify-start gap-5">
          <h4 className={`${classNameForHead}`}>
            Popular Products
          </h4>
          <OneProductLeftPicRightDetail productsData={popularProducts} limitProductShow={4}/>
        </div>
        <div className="flex flex-col items-start justify-start gap-5">
          <h4 className={`${classNameForHead}`}>
            Trending Products
          </h4>
          <OneProductLeftPicRightDetail productsData={popularProducts} limitProductShow={4}/>
        </div>
        <div className="flex flex-col items-start justify-start gap-5">
          <h4  className={`${classNameForHead}`}>
            Recently Added
          </h4>
          <OneProductLeftPicRightDetail productsData={popularProducts} limitProductShow={4} />
        </div>
        <div className="flex flex-col items-start justify-start gap-5">
          <h4  className={`${classNameForHead}`}>
            Top Rated
          </h4>
          <OneProductLeftPicRightDetail productsData={popularProducts} limitProductShow={4}/>
        </div>
      </div>
    </section>
  );
};

export default FooterProducts;
