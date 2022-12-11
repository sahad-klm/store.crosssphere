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
  const [windowWidth, setWindowWidth] = useState<number>(2);

  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', () => {
        if (window.innerWidth > 1100) {
          console.log(window.innerWidth / 130);
          return setWindowWidth(window.innerWidth / 130);
          
        } else if (window.innerWidth > 768) {
          return setWindowWidth(6);
        } else if (window.innerWidth > 640) {
          return setWindowWidth(5);
        } else if (window.innerWidth > 540) {
          return setWindowWidth(4);
        } else if (window.innerWidth < 540) {
          return setWindowWidth(2);
        }
      });
    }
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      <Swiper
        spaceBetween={25}
        slidesPerView={windowWidth}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {fracturedProducts?.map((item: Props, ind) => (
          <SwiperSlide
            key={item.id}
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
              }-100 flex h-auto w-full flex-col items-center justify-center rounded-md border-[.5px] border-solid border-transparent py-5 lg:h-40 lg:w-28 ${
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
