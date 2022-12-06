import { popularProducts } from 'constants/data';
import { Icon } from 'constants/icon';
import React from 'react';

type Props = {
  id: React.Key;
    name: string;
    rating?: number | any;
    tags?: string;
    rate?:  number | any;
    offer?:  number | any;
    picture?: string;
    bacPicture?: string;
}
const EachPopularProduct: any = () => {
  return (
    <div
      className="grid w-full grid-cols-2 justify-center gap-y-10 md:grid-cols-3 lg:grid-cols-4
    "
    >
      {popularProducts?.map((item:Props) => (
        <div
          key={item.id}
          className="relative mx-2 flex max-w-[290px] flex-col overflow-hidden rounded-[18px] border border-gray-300 bg-white hover:border-emerald-300 hover:shadow-xl"
        >
          { item.offer && <span className="absolute top-0 left-0 z-10  flex self-start rounded-br-[18px] bg-red-700 py-1 px-4 font-body text-sm text-white">
            {item.offer}%
          </span>}
          <div
            className={`relative flex h-72 w-full items-center justify-center ${
              item.tags === 'vegetable' || 'organic'
                ? 'bg-gray-100'
                : 'bg-white'
            }`}
          >
            <img src={item.picture} alt="" className="  object-cover" />
            <div className="absolute flex h-9 flex-row items-center justify-center rounded border border-emerald-300 bg-white">
              
              <button className="group/btn1 relative group/etd">
                <Icon className="h-5 fill-emerald-500 transition-all group-hover/btn1:fill-yellow-400" />
                <span className='absolute w-max bg-emerald-500 rounded px-2 py-2 font-body text-xs text-white -right-5 -top-[44px] invisible group-hover/etd:visible transition-all'>Add to wishlist</span>
              </button>
              <span className=" h-9 w-[1px] bg-slate-300" />
              <button className="group/btn1 relative group/etd">
                <Icon className="h-5 fill-emerald-500 transition-all group-hover/btn1:fill-yellow-400" />
                <span className='absolute w-max bg-emerald-500 rounded px-2 py-2 font-body text-xs text-white -right-5 -top-[44px] invisible group-hover/etd:visible transition-all'>Add to campier</span>
              </button>
              <span className=" h-9 w-[1px] bg-slate-300" />
              <button className="group/btn1 relative group/etd">
                <Icon className="h-5 fill-emerald-500 transition-all group-hover/btn1:fill-yellow-400" />
                <span className='absolute w-max bg-emerald-500 rounded px-2 py-2 font-body text-xs text-white -right-5 -top-[44px] invisible group-hover/etd:visible transition-all '>Quick view</span>
              </button>
            </div>
          </div>
          <small className="mx-5 mt-3 flex flex-wrap pb-[6px] font-body text-xs text-gray-400">
            {item.tags}
          </small>
          <h4 className="mx-5 pb-[10px] font-head text-base text-gray-700 transition-all duration-200 hover:text-emerald-500">
            {item.name}
          </h4>
          <span className="mx-5 pb-[10px]">{item.rating}</span>
          <div className="mx-5 mb-5 flex flex-row items-center justify-between">
            <p className="flex items-center gap-2 font-head text-lg text-emerald-500">
              {item.rate - (item?.rate * item?.offer / 100)}
              { item.offer && <span className="text-sm text-gray-500 line-through">
                {item.rate}
              </span>}
            </p>
            <button className="group/btn inline-flex h-8 items-center gap-2 rounded bg-emerald-200 px-3 font-body text-emerald-500 transition-transform duration-500 hover:-translate-y-1 hover:bg-emerald-500 hover:fill-white hover:text-white">
              <Icon className="w-5 fill-emerald-500 group-hover/btn:fill-white" />
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EachPopularProduct;
