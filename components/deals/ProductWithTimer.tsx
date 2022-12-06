import { Icon } from 'constants/icon';
import React from 'react';
import { ButtonAdd, ButtonAddToCart } from '@/ui/button';

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
    <div className="group/body relative flex md:min-w-full min-w-[310px] lg:max-w-[310px] flex-1 flex-col overflow-hidden rounded-[18px] pb-10">
      <div className="relative -z-[1] mb-[20%] flex h-[310px] max-w-full overflow-hidden rounded-[18px]">
        <img src={picture} alt="" className="min-h-full w-full" />
      </div>
      <div className="absolute bottom-4 flex w-full flex-col justify-center items-center group-hover/body:-translate-y-1 transition-transform duration-300">
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
        <div className='bg-white mx-7 rounded-[18px] shadow-lg'>
          <small className="mx-5 mt-3 flex flex-wrap pb-[6px] font-body text-xs text-gray-400">
            {tags}
          </small>
          <h4 className="mx-5 pb-[10px] font-head text-base text-gray-700 transition-all duration-200 hover:text-emerald-500">
            {name}
          </h4>
          <span className="mx-5 pb-[10px] flex items-center">
            <i className="lni lni-star-filled text-xs text-yellow-500" />
            <i className="lni lni-star-filled text-xs text-yellow-500" />
            <i className="lni lni-star-filled text-xs text-yellow-500" />
            <i className="lni lni-star-filled text-xs text-yellow-500" />&nbsp;&nbsp;<p className='font-body text-gray-500'>({rating})</p>
          </span>
          <div
            className="mx-5 mb-5 flex flex-row items-center justify-between 
         "
          >
            <p className="flex items-center gap-2 font-head text-lg text-emerald-500">
              ${rate - (rate * offer) / 100}
              {offer && (
                <span className="text-sm text-gray-500 line-through">
                  ${rate}
                </span>
              )}
            </p>
            <ButtonAdd />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductWithTimer;
