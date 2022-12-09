import { Icon } from 'constants/icon';
import React from 'react';
import { ButtonAdd, ButtonAddToCart } from '@/ui/button';
import { Rating } from '@/ui/rating';
import RateOfProduct from '@/ui/rate';

type Props = {
  id: React.Key;
  name: string;
  rating?: number | any;
  tags?: string;
  rate?: number | any;
  offer?: number | any;
  picture?: string | any;
};
function ProductWithTimer({
  id,
  name,
  rate,
  rating,
  tags,
  offer,
  picture,
}: Props): any {
  return (
    <div className="group/body relative flex min-w-[310px] flex-1 flex-col overflow-hidden rounded-[18px] pb-10 md:min-w-full lg:max-w-[310px]">
      <div className="relative -z-[1] mb-[20%] flex h-[310px] max-w-full overflow-hidden rounded-[18px]">
        <img src={picture} alt="" className="min-h-full w-full object-cover" />
      </div>
      <div className="absolute bottom-4 flex w-full flex-col items-center justify-center transition-transform duration-300 group-hover/body:-translate-y-1">
        <div className="mb-3 flex w-full flex-row items-center justify-center gap-1 rounded">
          <div className="flex w-12 flex-col items-center justify-center rounded-md bg-white p-3">
            <p className="font-head text-xl leading-6 text-emerald-500">55</p>
            <p className="text-body text-base text-gray-700">Days</p>
          </div>
          <div className="flex w-12 flex-col items-center justify-center rounded-md bg-white p-3">
            <p className="font-head text-xl leading-6 text-emerald-500">55</p>
            <p className="text-body text-base text-gray-700">Hours</p>
          </div>
          <div className="flex w-12 flex-col items-center justify-center rounded-md bg-white p-3">
            <p className="font-head text-xl leading-6 text-emerald-500">55</p>
            <p className="text-body text-base text-gray-700">Mins</p>
          </div>
          <div className="flex w-12 flex-col items-center justify-center rounded-md bg-white p-3">
            <p className="font-head text-xl leading-6 text-emerald-500">55</p>
            <p className="text-body text-base text-gray-700">Secs</p>
          </div>
        </div>
        <div className="mx-7 rounded-[18px] bg-white shadow-lg">
          <small className="mx-5 mt-3 flex flex-wrap pb-[6px] font-body text-xs text-gray-400">
            {tags}
          </small>
          <h4 className="mx-5 pb-[10px] font-head text-base text-gray-700 transition-all duration-200 hover:text-emerald-500">
            {name}
          </h4>
          <Rating rating={rating} />
          <div
            className="mx-5 mb-5 flex flex-row items-center justify-between 
         "
          >
            <RateOfProduct rate={rate} offer={offer}/>
            <ButtonAdd />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductWithTimer;
