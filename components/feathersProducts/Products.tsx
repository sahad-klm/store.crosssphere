'use client';
import { fracturedProducts } from 'constants/data';
import React, { Key, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
type Props = {
  id: Key;
  name: string;
  items: string;
  picture: string;
  bg?: string;
};
export const Products: React.FC | any = ({ swiperRef }: any) => {
  const [isClickedOnThisOne, setIsClickedOnThisOne] = useState<Key>();
  const [windowWidth, setWindowWidth] = useState<number | any>();

  const swiperPrev: any = () => {
    if (windowWidth > 1100) {
      return windowWidth / 130;
    } else if (windowWidth > 768) {
      return 6;
    } else if (windowWidth > 640) {
      return 5;
    } else if (windowWidth > 540) {
      return 4;
    } else if (windowWidth > 440) {
      return 3;
    } else if (windowWidth > 340) {
      return 2;
    } else if (windowWidth < 350) {
      return 1;
    }
  };

  React.useMemo(() => swiperPrev(), [windowWidth]);

  React.useEffect(() => {
    if(typeof window !== undefined ) {

      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
      
      setWindowWidth(window.innerWidth)
      
      return window.removeEventListener('resize',() => setWindowWidth(windowWidth))
    }
  }, []);


  return (
    <div className="flex w-full items-center justify-center">
      <Swiper
        spaceBetween={25}
        slidesPerView={swiperPrev()}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {fracturedProducts?.map((item: Props, ind) => (
          <SwiperSlide
            key={item.id}
            // className={` ${ind !== 0 && 'ml-[20px] lg:mr-[0] '} `}
          >
            <motion.div
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              initial={{ x: 0 }}
              animate={{
                x: -10 * ind,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              className={`bg-${
                item.bg
              }-100 flex h-48 w-full flex-col items-center justify-center rounded-md border-[.5px] border-solid border-transparent py-5 lg:h-40 lg:w-28 ${
                isClickedOnThisOne === item.id &&
                ' border-emerald-300 shadow-md'
              } group/edit cursor-pointer transition-all duration-300 hover:border-emerald-300 hover:shadow-md`}
              onClick={() => setIsClickedOnThisOne(item.id)}
            >
              <img
                src={item.picture}
                alt=""
                className="mb-2 w-[90%]  object-contain transition-all duration-700 hover:scale-105 lg:w-20"
              />
              <div className="flex flex-col items-center">
                <h6 className="divide-teal-300 font-head text-sm text-gray-800 transition-all group-hover/edit:text-emerald-500 md:text-base">
                  {item.name}
                </h6>
                <p className="font-body text-xs text-gray-700 md:text-[14px]">
                  {item.items}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
