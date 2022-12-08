import { Icon } from 'constants/icon';
import Image from 'next/image';
import React from 'react';
import { ButtonAdd, ButtonAddToCart } from './button';
import RateOfProduct from './rate';
import { Rating } from './rating';

type Props = {
  id?: React.Key;
  name?: string | undefined | any;
  rating?: number | any;
  tags?: string;
  rate?: number | any;
  offer?: number | any;
  picture?: string | any;
  bacPicture?: string | any;
  mouseOver?: any;
  setMouseOver?: any;
  buttonStyle?: any;
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
  buttonStyle,
}: Props): any {
  const addBtn = buttonStyle === 'add';
  const addToCartBtn = buttonStyle === 'add-to-cart';

  return (
    <div className="group/body relative flex max-w-[290px] flex-col overflow-hidden rounded-[18px] border border-gray-300 bg-white hover:border-emerald-300 hover:shadow-xl">
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
      <div
        className={`mx-5 mb-5 flex flex-row items-center ${
          addBtn ? 'justify-between' : 'justify-start'
        }`}
      >
        <RateOfProduct offer={offer} rate={rate} />
        {addBtn && <ButtonAdd />}
      </div>
      {addToCartBtn && (
        <div className="mb-5 flex w-full justify-center">
          <ButtonAddToCart />
        </div>
      )}
    </div>
  );
}

const OneProductLeftPicRightDetail = ({
  productsData,
  limitProductShow = null,
}: any): any => {
  const limitProduct = (): any => {
    if (limitProductShow) return limitProductShow;
    else if (limitProductShow === null) return productsData?.length;
  };
  return (
    <React.Fragment>
      {productsData?.map((item: Props, idx: number) => (
        <React.Fragment>
          {idx + 1 <= limitProduct() && (
            <div
              key={item.id}
              className="fle-row flex items-start justify-center gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`grid px-1 h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-md ${
                  item.tags === 'vegetable' || 'organic'
                    ? 'bg-gray-100'
                    : 'bg-white'
                }`}
              >
                <img src={item.picture} className='object-contain w-full h-full' alt={item.name} />
              </div>
              <div className="justify-star flex h-28 w-full flex-col items-start ">
                <h4 className="font-head text-gray-800 transition duration-200 hover:text-emerald-500">
                  {item.name}
                </h4>

                <Rating
                  rating={item.rating}
                  className="mx-0 mt-1 mb-1 h-5 pb-0"
                />
                <RateOfProduct offer={item.offer} rate={item.rate} />
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export { OneProductWithOffer, OneProductLeftPicRightDetail };
