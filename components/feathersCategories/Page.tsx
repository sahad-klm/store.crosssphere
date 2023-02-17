'use client';
import { useRef } from 'react';
import { Products } from './Products';
import SwiperCore from 'swiper';
import MainProducts from './MainProducts';

const FeathersCategory: React.FC = () => {
  const swiperRef = useRef<SwiperCore | any>();

  return (
    <div className="mt-[50px] flex w-full flex-col items-center justify-center overflow-hidden px-4">
      <div className="mb-10 flex w-full items-center justify-between">
        <h4 className="font-head text-[28px] leading-7 text-gray-800 md:text-[32px]">
          Featured Categories
        </h4>
        <span className="grid grid-flow-col gap-2">
          <i
            onClick={() => swiperRef.current?.slidePrev()}
            className="lni lni-chevron-left grid h-10  w-10 place-content-center rounded-full bg-slate-200 p-2 text-sm font-bold text-gray-800 transition duration-300 hover:bg-emerald-500 hover:text-white"
          />
          <i
            onClick={() => swiperRef.current?.slideNext()}
            className="lni lni-chevron-right grid h-10  w-10 place-content-center rounded-full bg-slate-200 p-2 text-sm font-bold text-gray-800 transition duration-300 hover:bg-emerald-500 hover:text-white"
          />
        </span>
      </div>
      <Products swiperRef={swiperRef} />
      <MainProducts />
    </div>
  );
};

export default FeathersCategory;
