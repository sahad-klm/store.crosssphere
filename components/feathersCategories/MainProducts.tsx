import { ButtonShopNow } from '@/ui/button';
import { fracturedMainProduct } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MainProducts: React.FC | any = () => {
  return (
    <div className="mx-4 mt-[44px] flex h-full min-h-[246px]  w-full flex-col justify-between gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
      {fracturedMainProduct?.map((item) => (
        <motion.div
          whileInView="show"
          initial={{ x: -40 }}
          viewport={{ once: false }}
          animate={{
            x: 0,
          }}
          key={item.id}
          className={`bg-${item.bg}-100 group/edit relative flex w-full flex-col justify-start rounded-lg p-10 sm:max-w-lg`}
        >
          <Image
            width={1000}
            height={1000}
            loading="lazy"
            src={item.picture}
            layout="responsive"
            alt=""
            className="absolute right-0 bottom-0 z-0 max-h-[100%] w-full max-w-[50%] object-contain"
          />
          <h4 className="z-[1] max-w-[250px] font-head text-[22px] capitalize text-[#253d4e] transition-all duration-500 group-hover/edit:-translate-y-1 md:text-h4">
            {item.title}
          </h4>
          <ButtonShopNow paddingAndStyle="px-3 py-3" value="Shop Now" />
        </motion.div>
      ))}
    </div>
  );
};

export default MainProducts;
