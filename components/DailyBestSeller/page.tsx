'use client'

import OneProductWithOffer from '@/ui/OneProductWithOffer';
import TextCategory from '@/ui/TextCategory';
import { dailyBestSellerCategory, popularProducts } from 'constants/data';
import React from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useWindowWidth} from "@react-hook/window-size";
import { ButtonShopNow } from '@/ui/button';


const DailyBestSeller = ():any => {
  const [isSelectedCatN, setIsSelectedCatN] = React.useState(
    dailyBestSellerCategory[0].name,
  );
  const [mouseOver, setMouseOver] = React.useState<string>('')

  const windowWidth: number = useWindowWidth();

  const swiperPrev: number = Math.round(windowWidth / 380);
  
    
  return (
    <div className="mt-[50px] flex w-full flex-col items-start justify-center  overflow-hidden px-4">
      <div className="mb-7 flex w-full items-center justify-between">
        <h4 className="mr-4 shrink-0 font-head text-[32px] text-gray-800">
          Daily best sells
        </h4>
        <span className="flex flex-row flex-wrap gap-4 ">
          {dailyBestSellerCategory?.map((item) => (
            <TextCategory
              key={item.id}
              {...item}
              isSelectedCatN={isSelectedCatN}
              setIsSelectedCatN={setIsSelectedCatN}
            />
          ))}
        </span>
      </div>

      <div className="flex w-full justify-start gap-6">
        <div className="relative z-[1] flex flex-grow-0 flex-col items-start justify-evenly overflow-hidden rounded-[18px] p-10 w-[40%] max-w-[300px]">
          <img
            src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
            width={200}
            className="absolute inset-0 -z-10 h-full w-full object-fill brightness-150 -hue-rotate-18"
          />
          <h1 className="font-head text-h2 leading-10 text-gray-800">
            Bring <br /> Nature into your home
          </h1>
          <ButtonShopNow paddingAndStyle="px-3 py-2" value="Shop Now" />
        </div>
        <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={25}
        slidesPerView={swiperPrev}
        navigation
        autoplay={{ delay: 5000 }}
        >
          {popularProducts?.map((item) => (
            <SwiperSlide key={item.id}>
              <OneProductWithOffer {...item} setMouseOver={setMouseOver} mouseOver={mouseOver} buttonStyle='add-to-cart'/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DailyBestSeller;
