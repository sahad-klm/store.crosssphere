import { popularProducts } from 'constants/data';
import { Icon } from 'constants/icon';
import React from 'react';

const EachPopularProduct: any = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full gap-y-10 justify-center
    ">
      {popularProducts?.map((item) => (
        <div
          key={item.id}
          className="relative flex max-w-[290px] flex-col overflow-hidden rounded-[18px] border border-gray-300 bg-white hover:border-emerald-300 hover:shadow-xl mx-2"
        >
          <span className="absolute top-0 left-0 z-10  flex self-start rounded-br-[18px] bg-red-700 py-1 px-4 font-body text-sm text-white">
            {item.offer}
          </span>
          <div
            className={`flex h-72 w-full items-center justify-center ${
              item.tags === 'vegetable' || 'organic'
                ? 'bg-gray-100'
                : 'bg-white'
            }`}
          >
            <img src={item.picture} alt="" className="  object-cover" />
          </div>
          <small className="mx-5 mt-3 flex flex-wrap pb-[6px] font-body text-xs text-gray-400">
            {item.tags}
          </small>
          <h4 className="mx-5 pb-[10px] font-head text-gray-700 hover:text-emerald-500 transition-all duration-200 text-base">{item.name}</h4>
          <span className="mx-5 pb-[10px]">{item.rating}</span>
          <div className="mx-5 mb-5 flex flex-row items-center justify-between">
            <p className="flex items-center gap-2 font-head text-lg text-emerald-500">
              {item.rate}
              <span className="text-sm text-gray-500 line-through">
                {item.rate}
              </span>
            </p>
            <button className="inline-flex h-8 items-center gap-2 rounded bg-emerald-200 px-3 font-body text-emerald-500 hover:bg-emerald-500 hover:text-white hover:fill-white group/btn hover:-translate-y-1 transition-transform duration-500">
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
