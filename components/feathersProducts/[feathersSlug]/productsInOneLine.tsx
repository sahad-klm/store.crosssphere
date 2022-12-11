'use client';
import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { motion } from 'framer-motion';
import { fracturedProducts } from 'constants/data';

type Props = {
  id: React.Key;
  name: string;
  items: string;
  picture: string;
  bg?: string;
};

const ProductsInOneLine = ({ swiperRef, slidesPerView }: any): JSX.Element => {
  const [isClickedOnThisOne, setIsClickedOnThisOne] =
    React.useState<React.Key>();

  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={slidesPerView}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {fracturedProducts?.map((item: Props, ind) => (
        <SwiperSlide key={item.id}>
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
            }-100 flex h-auto w-full shrink-0 flex-col items-center justify-center rounded-md border-[.5px] 
              border-solid 
              border-transparent py-5 lg:h-40 lg:w-28 ${
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
  );
};

export default ProductsInOneLine;
