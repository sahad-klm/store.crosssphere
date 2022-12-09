'use client';

import { OneProductWithOffer } from '@/ui/OneProductWithOffer';
import TextCategory, { TextCategoryMob } from '@/ui/TextCategory';
import { dailyBestSellerCategory, popularProducts } from 'constants/data';
import React from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowWidth } from '@react-hook/window-size';
import { ButtonShopNow } from '@/ui/button';

const DailyBestSeller = (): any => {
  const [isSelectedCatN, setIsSelectedCatN] = React.useState(
    dailyBestSellerCategory[0].name,
  );
  const [toggleOn, setToggleOn] = React.useState<boolean | undefined>(false);

  const [mouseOver, setMouseOver] = React.useState<string>('');

  const windowWidth: number = useWindowWidth();

  const swiperPrev: number | any = () => {
    if (windowWidth <= 768) return 1;
    else if (windowWidth > 768) return Math.round((windowWidth - 400) / 300);
  };

  return (
    <div className="z-1 relative mt-[50px] flex w-full flex-col  items-start justify-center overflow-hidden px-4">
      <div className="mb-7 flex w-full items-center justify-between">
        <h4 className="mr-4 shrink-0 font-head text-[32px] text-gray-800">
          Daily best sells
        </h4>
        <span className="flex flex-row flex-wrap gap-4 ">
          {windowWidth > 768 ? (
            dailyBestSellerCategory?.map((item) => (
              <TextCategory
                key={item.id}
                {...item}
                isSelectedCatN={isSelectedCatN}
                setIsSelectedCatN={setIsSelectedCatN}
              />
            ))
          ) : (
            <>
              <p
                onClick={() => setToggleOn(!toggleOn)}
                className="cursor-pointer font-head leading-3 text-gray-800"
              >
                {isSelectedCatN}{' '}
                <i className="fa-solid fa-chevron-down relative ml-2 text-gray-800 duration-700" />
              </p>
              {toggleOn && (
                <TextCategoryMob
                  setToggleOn={setToggleOn}
                  list={dailyBestSellerCategory}
                  isSelectedCatN={isSelectedCatN}
                  setIsSelectedCatN={setIsSelectedCatN}
                />
              )}
            </>
          )}
        </span>
      </div>

      <div className="flex w-full flex-col justify-start gap-6 md:flex-row">
        <div className="relative z-[1] flex h-[70vh] w-full min-w-[40%] flex-grow-0 flex-col  items-start gap-12 overflow-hidden rounded-[18px] p-12 md:h-auto md:min-w-[280px] md:max-w-[300px] md:justify-evenly">
          <img
            src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
            width={200}
            className="-hue-rotate-18 absolute inset-0 -z-10 h-full w-full object-fill brightness-150"
          />
          <h1 className="font-head text-h2 leading-10 text-gray-800">
            Bring <br className="hidden md:block" /> Nature into your home
          </h1>
          <ButtonShopNow paddingAndStyle="px-3 py-2" value="Shop Now" />
        </div>
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={25}
          slidesPerView={swiperPrev()}
          navigation
          autoplay={{ delay: 5000 }}
          className="w-full"
        >
          {popularProducts?.map((item) => (
            <SwiperSlide key={item.id}>
              <OneProductWithOffer
                {...item}
                setMouseOver={setMouseOver}
                mouseOver={mouseOver}
                buttonStyle="add-to-cart"
                classNameForTotal="max-w-full h-[80vh]"
                classNameForPic='h-[30vh]'

              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DailyBestSeller;
