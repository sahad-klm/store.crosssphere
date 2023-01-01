import { popularProducts } from '@/lib/data';
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
    <Swiper
      modules={[Navigation, Scrollbar]}
      spaceBetween={25}
      slidesPerView={slidesPerView}
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
            classNameForTotal="max-w-full md:h-full h-full"
            classNameForPic="h-[37vh] p-1"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DailyBestSellerInOneLine;
