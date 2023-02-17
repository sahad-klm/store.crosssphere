'use client';
import React from 'react';
import ProductsInOneLine from './inOneLine/productsInOneLine';

export const Products: any = ({ swiperRef }: any) => {
  return (
    <>
      <div className=" hidden w-full items-center justify-center xl:flex ">
        <ProductsInOneLine swiperRef={swiperRef} slidesPerView={9} />
      </div>

      <div className="lapHide w-full items-center justify-center">
        <ProductsInOneLine swiperRef={swiperRef} slidesPerView={7} />
      </div>
      <div className="tabHide w-full items-center justify-center">
        <ProductsInOneLine swiperRef={swiperRef} slidesPerView={4} />
      </div>

      <div className="mobileHide w-full items-center justify-center">
        <ProductsInOneLine swiperRef={swiperRef} slidesPerView={3} />
      </div>
      <div className="flex w-full items-center justify-center sm:hidden ">
        <ProductsInOneLine swiperRef={swiperRef} slidesPerView={2} />
      </div>
    </>
  );
};
