import { fracturedProducts } from "constants/data";
import { Key, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowWidth } from "@react-hook/window-size";
import { motion } from "framer-motion";
type Props = {
  id: Key;
  name: string;
  items: string;
  picture: string;
  bg?: string;
};
export const Products: React.FC | any = ({ swiperRef }: any) => {
  const [isClickedOnThisOne, setIsClickedOnThisOne] = useState<Key>();

  const windowWidth: number = useWindowWidth();

  const swiperPrev: number = Math.round(windowWidth / 132);

  return (
    <div className="flex w-full items-center justify-center">
      <Swiper
        slidesPerView={swiperPrev}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {fracturedProducts?.map((item: Props, ind) => (
          <SwiperSlide
            key={item.id}
            className={` ${ind !== 0 && "lg:mr-[20px] ml-[24px]"} `}
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
              }-100 lg:w-28 w-32 h-48 lg:h-40 flex items-center justify-center flex-col rounded-md py-5 border-[.5px] border-solid border-transparent ${
                isClickedOnThisOne === item.id &&
                " border-emerald-300 shadow-md"
              } hover:border-emerald-300 cursor-pointer hover:shadow-md group/edit transition-all duration-300`}
              onClick={() => setIsClickedOnThisOne(item.id)}
            >
              <img
                src={item.picture}
                alt=""
                className="lg:w-20 w-[118px]  mb-2 object-contain hover:scale-105 transition-all duration-700"
              />
              <div className="flex flex-col items-center">
                <h6 className="font-head text-gray-800 md:text-base text-sm group-hover/edit:text-emerald-500 transition-all divide-teal-300">
                  {item.name}
                </h6>
                <p className="font-body md:text-[14px] text-xs text-gray-700">{item.items}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
