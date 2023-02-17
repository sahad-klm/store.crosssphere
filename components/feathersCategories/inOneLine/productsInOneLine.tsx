'use client';
import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowseAllCategories } from '@/lib/data';
import Link from 'next/link';
import { fadeAnim, itemAnim } from '@/lib/motion';
import Image from 'next/image';

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
      className="h-full"
    >
      {BrowseAllCategories?.map((item: any) => (
        <SwiperSlide key={item.id} className="">
          <div
            // variants={itemAnim}
            className={`bg-[${
              item.bg
            }] flex h-full w-full shrink-0 flex-col items-center justify-center rounded-md border-[.5px] 
             border-solid 
              border-transparent p-5  lg:w-full  ${
                isClickedOnThisOne === item.id &&
                ' border-emerald-300 shadow-md'
              } group/edit cursor-pointer transition-all duration-300 hover:border-emerald-300 hover:shadow-md`}
            onClick={() => setIsClickedOnThisOne(item.id)}
          >
            <Link aria-label="Read more" href={`/collections/${item.slug}`}>
              <Image
                width={1440}
                height={100}
                loading="lazy"
                src={item.picture}
                alt=""
                className="mb-2 h-[100px] w-[100%]  object-contain transition-all duration-700 hover:scale-110 lg:w-20"
              />
            </Link>
            <div className="flex flex-col items-center justify-center">
              <Link aria-label="Read more" href={`/collections/${item.slug}`}>
                <h6 className="divide-teal-300 text-center  font-head text-sm text-gray-800 transition-all group-hover/edit:text-emerald-500 md:text-base">
                  {item.name}
                </h6>
              </Link>
              <p className="font-body text-xs text-gray-700 md:text-[14px]">
                {item.items} items
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsInOneLine;
