'use client';
import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowseAllCategories, fracturedProducts } from '@/lib/data';
import Link from 'next/link';
import { fadeAnim } from 'utils/motion';

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
      <AnimatePresence mode="wait">
        {BrowseAllCategories?.map((item: any) => (
          <SwiperSlide key={item.id}>
            <motion.div
              initial="hide"
              animate="show"
              exit="hide"
              variants={fadeAnim}
              className={`bg-[${
                item.bg
              }] flex h-auto w-full shrink-0 flex-col items-center justify-center rounded-md border-[.5px] 
             border-solid 
              border-transparent p-5  lg:w-full ${
                isClickedOnThisOne === item.id &&
                ' border-emerald-300 shadow-md'
              } group/edit cursor-pointer transition-all duration-300 hover:border-emerald-300 hover:shadow-md`}
              onClick={() => setIsClickedOnThisOne(item.id)}
            >
              <Link href={`/collections/${item.slug}`}>

              <img
                src={item.picture}
                alt=""
                className="mb-2 max-h-[100px] w-[90%]  object-contain transition-all duration-700 hover:scale-105 lg:w-20"
                />
                </Link>
              <div className="flex flex-col items-center justify-center">
                <Link href={`/collections/${item.slug}`}>
                  <h6 className="divide-teal-300 text-center  font-head text-sm text-gray-800 transition-all group-hover/edit:text-emerald-500 md:text-base">
                    {item.name}
                  </h6>
                </Link>
                <p className="font-body text-xs text-gray-700 md:text-[14px]">
                  {item.items} items
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </AnimatePresence>
    </Swiper>
  );
};

export default ProductsInOneLine;
