'use client';
import { popularProducts } from 'constants/data';
import { Icon } from 'constants/icon';
import Image from 'next/image';
import React from 'react';

type Props = {
  id: React.Key;
  name: string;
  rating?: number | any;
  tags?: string;
  rate?: number | any;
  offer?: number | any;
  picture?: string | any;
  bacPicture?: string | any;
};
const EachPopularProduct: any = () => {
  const [mouseOver, setMouseOver] = React.useState<any>();

  return (
    <div
      className="grid w-full grid-cols-2 justify-center gap-y-10 md:grid-cols-3 lg:grid-cols-4
    "
    >
      {popularProducts?.map((item: Props) => (
        <div
          key={item.id}
          className="group/body relative mx-2 flex max-w-[290px] flex-col overflow-hidden rounded-[18px] border border-gray-300 bg-white hover:border-emerald-300 hover:shadow-xl"
        >
          {item.offer && (
            <span className="absolute top-0 left-0 z-10  flex self-start rounded-br-[18px] bg-red-700 py-1 px-4 font-body text-sm text-white">
              {item.offer}%
            </span>
          )}
          <div
            className={`relative flex h-72 w-full items-center justify-center ${
              item.tags === 'vegetable' || 'organic'
                ? 'bg-gray-100'
                : 'bg-white'
            }`}
          >
            <img
              src={
                item.bacPicture
                  ? mouseOver === item.id
                    ? item.bacPicture
                    : item.picture
                  : item.picture
              }
              onMouseOver={() => setMouseOver(item.id)}
              onMouseLeave={() => setMouseOver('')}
              alt=""
              className="w-full object-cover"
            />

            <div className="invisible absolute flex h-9 flex-row items-center justify-center rounded border border-emerald-300 bg-white group-hover/body:visible">
              <button className="group/btn1 group/etd relative">
                <Icon className="h-5 fill-emerald-500  group-hover/btn1:fill-yellow-400" />
                <span className="invisible absolute -right-5 -top-[44px] w-max rounded bg-emerald-500 px-2 py-2 font-body text-xs text-white transition-all group-hover/etd:visible">
                  Add to wishlist
                </span>
              </button>
              <span className=" h-9 w-[1px] bg-slate-300" />
              <button className="group/btn1 group/etd relative">
                <Icon className="h-5 fill-emerald-500  group-hover/btn1:fill-yellow-400" />
                <span className="invisible absolute -right-5 -top-[44px] w-max rounded bg-emerald-500 px-2 py-2 font-body text-xs text-white transition-all group-hover/etd:visible">
                  Add to campier
                </span>
              </button>
              <span className=" h-9 w-[1px] bg-slate-300" />
              <button className="group/btn1 group/etd relative">
                <Icon className="h-5 fill-emerald-500  group-hover/btn1:fill-yellow-400" />
                <span className="invisible absolute -right-5 -top-[44px] w-max rounded bg-emerald-500 px-2 py-2 font-body text-xs text-white transition-all group-hover/etd:visible ">
                  Quick view
                </span>
              </button>
            </div>
          </div>
          <small className="mx-5 mt-3 flex flex-wrap pb-[6px] font-body text-xs text-gray-400">
            {item.tags}
          </small>
          <h4 className="mx-5 pb-[10px] font-head text-base text-gray-700 transition-all duration-200 hover:text-emerald-500">
            {item.name}
          </h4>
          <span className="mx-5 pb-[10px]">
            {/* {item.rating} */}
            <i className="lni lni-star-filled text-xs text-yellow-500" />
            <i className="lni lni-star-filled text-xs text-yellow-500" />
            <i className="lni lni-star-filled text-xs text-yellow-500" />
            <i className="lni lni-star-filled text-xs text-yellow-500" />
          </span>
          <div className="mx-5 mb-5 flex flex-row items-center justify-between">
            <p className="flex items-center gap-2 font-head text-lg text-emerald-500">
              {item.rate - (item?.rate * item?.offer) / 100}
              {item.offer && (
                <span className="text-sm text-gray-500 line-through">
                  {item.rate}
                </span>
              )}
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
