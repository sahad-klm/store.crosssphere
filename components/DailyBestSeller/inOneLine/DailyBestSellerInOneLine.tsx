import { OneProductWithOffer } from '@/ui/OneProductWithOffer';
import React from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const DailyBestSellerInOneLine = ({
  mouseOver,
  setMouseOver,
  slidesPerView,
  data,
}: any) => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar]}
      spaceBetween={25}
      slidesPerView={slidesPerView}
      navigation
      autoplay={{ delay: 2000 }}
      className="w-full"
    >
      {data?.map((item: any) => (
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
