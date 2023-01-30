import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { motion } from 'framer-motion';
import { textVariant } from '@/lib/motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Key } from 'react';
import { homeComponentBig } from '@/lib/data';
import { PaperPlaneIcon } from '@/lib/icon';
import Image from 'next/image';

const HomeComponent = (): any => {


  return (
    <div className="h-ofHome relative z-10 flex items-center justify-center overflow-hidden px-4 md:h-[590px]  md:pt-7">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        style={{ width: '100%', height: '100%' }}
      >
        {homeComponentBig.map(
          (item: {
            id: Key;
            title: string;
            picture: any;
            subtitle: string;
          }) => (
            <SwiperSlide
              key={item.id}
              style={{ width: '100%', height: '100%' }}
            >

              {/*  not in mobile  okay ithil ijj vallatum kalikkan nikkanda. i am the best coder */}
              <div className="relative z-auto md:grid hidden h-full content-center overflow-hidden rounded-3xl pl-20">
                <Image fill loading='eager' blurDataURL={item.picture}
                  className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                  src={item.picture}
                  alt="wallpaper"
                />
                <motion.h1
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  variants={textVariant(0.2, 0.5)}
                  className="max-w-[780px] font-body font-bold leading-none text-gray-800 text-7xl"
                >
                  {item.title}
                </motion.h1>
                <motion.h6
                  variants={textVariant(0.5, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="mt-5 font-body leading-9 text-gray-500 text-h4"
                >
                  {item.subtitle}
                </motion.h6>
                <motion.form
                  variants={textVariant(0.5, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="relative mt-7 flex h-16 flex-row  items-center overflow-hidden rounded-full bg-white sm:mt-10 w-[450px]"
                >
                  <PaperPlaneIcon className=" h-4 fill-gray-500 ml-6 mr-4" />
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="h-full font-body text-sm tracking-wide text-gray-700 outline-none"
                  />
                  <button name='button' className="absolute -right-1 h-full rounded-full bg-emerald-500 px-5 font-body  text-sm tracking-wider text-white outline-none transition hover:bg-emerald-600 sm:px-10">
                    Subscribe
                  </button>
                </motion.form>
              </div>


              {/* ith mobile no animation no  algram okay ithul onnum onnum punnakkum indakkan nikkanda */}


              <div className="relative z-auto grid md:hidden h-full content-center overflow-hidden rounded-3xl p-10">
                <Image fill loading='eager' blurDataURL={item.picture}
                  className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                  src={item.picture}
                  alt="wallpaper"
                />
                <h1

                  className="max-w-[780px] font-body text-[42px] font-bold leading-10 text-gray-800"
                >
                  {item.title}
                </h1>
                <h6

                  className="mt-5 font-body text-h6 leading-9 text-gray-500"
                >
                  {item.subtitle}
                </h6>
                <form

                  className="relative mt-7 flex h-16 w-[279px] flex-row  items-center overflow-hidden rounded-full bg-white "
                >
                  <PaperPlaneIcon className="ml-2 mr-2 h-4 fill-gray-500 " />
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="h-full font-body text-sm tracking-wide text-gray-700 outline-none"
                  />
                  <button name='button' className="absolute -right-1 h-full rounded-full bg-emerald-500 px-5 font-body  text-sm tracking-wider text-white outline-none transition hover:bg-emerald-600 ">
                    Subscribe
                  </button>
                </form>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
};

export default HomeComponent;
