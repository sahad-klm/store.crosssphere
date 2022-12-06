import { Icon } from 'constants/icon';
import React from 'react';
import {ButtonAdd, ButtonAddToCart} from "./button";


type Props = {
  id: React.Key;
  name: string;
  rating?: number | any;
  tags?: string;
  rate?: number | any;
  offer?: number | any;
  picture?: string | any;
  bacPicture?: string | any;
  mouseOver: any;
  setMouseOver: any;
  buttonStyle?:any
};
function OneProductWithOffer({
  id,
  name,
  rate,
  rating,
  tags,
  offer,
  picture,
  bacPicture,
  mouseOver,
  setMouseOver,
  buttonStyle
}: Props): any {

  const addBtn = buttonStyle === 'add'
  const addToCartBtn = buttonStyle === 'add-to-cart'

  return (
    <div
      className="group/body relative flex max-w-[290px] flex-col overflow-hidden rounded-[18px] border border-gray-300 bg-white hover:border-emerald-300 hover:shadow-xl"
    >
      {offer && (
        <span className="absolute top-0 left-0 z-10  flex self-start rounded-br-[18px] bg-red-700 py-1 px-4 font-body text-sm text-white">
          {offer}%
        </span>
      )}
      <div
        className={`relative flex h-72 w-full items-center justify-center ${
          tags === 'vegetable' || 'organic' ? 'bg-gray-100' : 'bg-white'
        }`}
      >
        <img
          src={bacPicture ? (mouseOver === id ? bacPicture : picture) : picture}
          onMouseOver={() => setMouseOver(id)}
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
        {tags}
      </small>
      <h4 className="mx-5 pb-[10px] font-head text-base text-gray-700 transition-all duration-200 hover:text-emerald-500">
        {name}
      </h4>
      <span className="mx-5 pb-[10px]">
        {/* {item.rating} */}
        <i className="lni lni-star-filled text-xs text-yellow-500" />
        <i className="lni lni-star-filled text-xs text-yellow-500" />
        <i className="lni lni-star-filled text-xs text-yellow-500" />
        <i className="lni lni-star-filled text-xs text-yellow-500" />
      </span>
      <div className={`mx-5 mb-5 flex flex-row items-center ${addBtn ? 'justify-between': 'justify-start'}`}>
        <p className="flex items-center gap-2 font-head text-lg text-emerald-500">
          ${rate - (rate * offer) / 100}
          {offer && (
            <span className="text-sm text-gray-500 line-through">${rate}</span>
          )}
        </p>
        {addBtn &&
          <ButtonAdd />
        }
      </div>
      {addToCartBtn && 
      <div className="flex w-full justify-center mb-5">

      <ButtonAddToCart />
      </div>
      }
    </div>
  );
}

export default OneProductWithOffer;
