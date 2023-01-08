import { productsData } from '@/lib/products';
import { OneProductWithOffer } from '@/ui/OneProductWithOffer';
import React from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const DailyBestSellerInOneLine = ({
  mouseOver,
  setMouseOver,
  slidesPerView,
}: any) => {
  return (
    <>

      {productsData?.map((item) => (
        <OneProductWithOffer
          {...item}
          setMouseOver={setMouseOver}
          mouseOver={mouseOver}
          buttonStyle="add-to-cart"
          classNameForTotal="max-w-[230px] w-max md:h-full h-full"
          classNameForPic="h-[37vh] p-1"
        />
      ))}
    </>
  );
};

export default DailyBestSellerInOneLine;
