import { Icon } from 'constants/icon';

const ButtonShopNow = ({ paddingAndStyle, value }: any): any => {
  return (
    <button
      className={`z-[1] mt-4 flex w-max items-center gap-4 rounded-md bg-emerald-500  font-body text-xs text-white transition-all hover:gap-5 hover:bg-yellow-500 ${paddingAndStyle}`}
    >
      {value}
      <i className="lni lni-arrow-right"></i>
    </button>
  );
};
const ButtonAddToCart = ({ className }: any): any => {
  return (
    <button
      className={`group/btn z-[1] mt-4 flex w-full mx-[10px] h-12 justify-center items-center gap-4 rounded-md  bg-emerald-500 px-3 font-body text-xs text-white transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-500 ${className}`}
    >
      <Icon className="w-5 fill-white" />
      Add to cart
    </button>
  );
};

const ButtonAdd = (): any => (
  <button className="group/btn inline-flex h-8 items-center gap-2 rounded-md bg-emerald-200 px-3 font-body text-emerald-500 transition-transform duration-500 hover:-translate-y-1 hover:bg-emerald-500 hover:fill-white hover:text-white">
    <Icon className="w-5 fill-emerald-500 group-hover/btn:fill-white" />
    Add
  </button>
);

export { ButtonAdd, ButtonShopNow, ButtonAddToCart };
