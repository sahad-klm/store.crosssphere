import { ButtonShopNow } from "@/ui/button";
import { fracturedMainProduct } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const MainProducts: React.FC | any = () => {
  return (
    <div className="sm:grid w-full mx-4 mt-[44px]  gap-5 lg:grid-cols-3 flex flex-col sm:grid-cols-2 justify-between">
      {fracturedMainProduct?.map((item ) => (
        <motion.div
        whileInView='show'
        initial={{x:-40}}
        viewport={{once: false}}
        animate={{
          x : 0,
        }}
          key={item.id}
          className={`bg-${item.bg}-100 flex relative p-10 rounded-md flex-col justify-start w-full sm:max-w-lg group/edit`}
        >
          <Image width={1000} height={1000} loading='lazy'
            src={item.picture}
            alt=""
            className="max-w-[50%] w-full max-h-[100%] object-contain absolute right-0 bottom-0 z-0"
          />
          <h4 className="font-head md:text-h4 text-[22px] text-gray-800 max-w-[250px] z-[1] capitalize group-hover/edit:-translate-y-1 duration-500 transition-all">
            {item.title}
          </h4>
          <ButtonShopNow  paddingAndStyle='px-3 py-3' value='Shop Now' />
        </motion.div>
      ))}
    </div>
  );
};

export default MainProducts;
