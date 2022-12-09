import { useRef } from "react";
import { Products } from "./Products";
import SwiperCore from "swiper";
import MainProducts from "./MainProducts";

const FeathersCategory:React.FC = () => {

  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="flex px-4 mt-[50px] w-full overflow-hidden flex-col items-center justify-center">
      <div className="w-full flex justify-between items-center mb-7">
        <h4 className="font-head md:text-[32px] text-[28px] text-gray-800">
          Feathered Categories
        </h4>
        <span className="grid grid-flow-col gap-2">
          <i
            onClick={() => swiperRef.current?.slidePrev()}
            className="lni lni-chevron-left w-7 text-sm  h-7 p-2 bg-slate-200 grid place-content-center rounded-full hover:bg-slate-300 transition"
          />
          <i
            onClick={() => swiperRef.current?.slideNext()}
            className="lni lni-chevron-right w-7 text-sm  h-7 p-2 bg-slate-200 grid place-content-center rounded-full hover:bg-slate-300 transition"
          />
        </span>
      </div>
      <Products swiperRef={swiperRef}/>
      <MainProducts />
    </div>
  );
};

export default FeathersCategory;
