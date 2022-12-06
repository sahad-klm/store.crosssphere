import { fracturedMainProduct } from "constants/data";
import { motion } from "framer-motion";

const MainProducts: React.FC | any = () => {
  return (
    <div className="grid w-full mx-4 mt-10  grid-cols-3 justify-between">
      {fracturedMainProduct?.map((item ) => (
        <motion.div
        whileInView='show'
        initial={{x:-40}}
        viewport={{once: false}}
        animate={{
          x : 0,
        }}
          key={item.id}
          className={`bg-${item.bg}-100 flex relative p-10 rounded-md flex-col justify-start w-[94%] max-w-lg group/edit`}
        >
          <img
            src={item.picture}
            alt=""
            className="max-w-[50%] w-full max-h-[100%] object-contain absolute right-0 bottom-0 z-0"
          />
          <h4 className="font-head text-h4 max-w-[250px] z-[1] capitalize group-hover/edit:-translate-y-1 duration-500 transition-all">
            {item.title}
          </h4>
          <button className="w-max px-3 py-3 mt-4 bg-emerald-500 text-white font-body text-xs rounded z-[1] gap-4 flex items-center hover:bg-yellow-500 hover:gap-5 transition-all">
            Shop Now <i className="lni lni-arrow-right"></i>
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default MainProducts;
