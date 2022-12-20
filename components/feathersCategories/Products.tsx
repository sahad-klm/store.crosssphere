'use client';
import React from 'react';
import ProductsInOneLine from './inOneLine/productsInOneLine';

export const Products: any = ({ swiperRef }: any) => {
  return (
    <>
      <div className=" w-full items-center justify-center xl:flex hidden">
        <ProductsInOneLine swiperRef={swiperRef} slidesPerView={8} />
      </div>

      <div className="w-full items-center justify-center lapHide">
        <ProductsInOneLine swiperRef={swiperRef} slidesPerView={7} />
      </div>
      <div className="w-full items-center justify-center tabHide">
        <ProductsInOneLine swiperRef={swiperRef} slidesPerView={4} />
      </div>

      <div className="w-full items-center justify-center mobileHide">
        <ProductsInOneLine swiperRef={swiperRef} slidesPerView={3} />
      </div>
      <div className="flex w-full items-center justify-center sm:hidden ">
        <ProductsInOneLine swiperRef={swiperRef} slidesPerView={2} />
      </div>
    </>
  );
};
