import { productsData } from '@/lib/products';
import { OneProductLeftPicRightDetail } from '@/ui/OneProductWithOffer';
import React from 'react';

const FooterProducts = (): JSX.Element | any => {
  const classNameForHead =
    'relative mr-4 shrink-0 border-b md:pb-5 pb-4 font-head md:text-h4 text-[22px] text-gray-800 before:absolute before:-bottom-[1px] before:h-[2px] before:w-14 before:bg-gray-300 before:content- w-full md:mb-4 mb-3';

  const popular = productsData.filter(
    (item) => item.partOf === 'popular' && item,
  );
  const tranding = productsData.filter(
    (item) => item.partOf === 'trending' && item,
  );
  const top_rated = productsData.filter(
    (item) => item.partOf === 'top-rated' && item,
  );
  const recent = [...productsData].sort((a) => (a.id >= 103 ? 1 : -1));

  return (
    <section className="mt-[50px] flex w-full flex-col justify-center overflow-hidden px-4  pb-10 md:items-center">
      <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
        <div className="flex flex-col items-start justify-start gap-4 md:gap-5">
          <h4 className={`${classNameForHead}`}>Popular Products</h4>
          <OneProductLeftPicRightDetail
            productsData={popular}
            limitProductShow={3}
          />
        </div>
        <div className="flex flex-col items-start gap-4 md:gap-5 ">
          <h4 className={`${classNameForHead}`}>Trending Products</h4>
          <OneProductLeftPicRightDetail
            productsData={tranding}
            limitProductShow={3}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-4 md:gap-5">
          <h4 className={`${classNameForHead}`}>Recently Added</h4>
          <OneProductLeftPicRightDetail
            productsData={recent}
            limitProductShow={3}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-4 md:gap-5">
          <h4 className={`${classNameForHead}`}>Top Rated</h4>
          <OneProductLeftPicRightDetail
            productsData={top_rated}
            limitProductShow={3}
          />
        </div>
      </div>
    </section>
  );
};

export default FooterProducts;
