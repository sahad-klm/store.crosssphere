import { Icon } from 'constants/icon';
import { useWindowWidth } from '@react-hook/window-size';

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
  classNameForPic?: any;
  classNameForTotal?: any

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
  classNameForPic,
  classNameForTotal
}: Props): any {
  const addBtn = buttonStyle === 'add';
  const addToCartBtn = buttonStyle === 'add-to-cart';

  const windowWidth = useWindowWidth()

  return (
    <div className={`group/body relative flex max-w-[290px] flex-col overflow-hidden rounded-[18px] border border-gray-300 bg-white hover:border-emerald-300 hover:shadow-xl shrink-0 ${
      classNameForTotal}`}>
      {offer && (
        <span className="absolute top-0 left-0 z-10  flex self-start rounded-br-[18px] bg-red-700 py-1 px-5 font-body text-sm text-white">
          {offer}%
        </span>
      )}
      <div
        className={`relative flex md:h-72 h-[769px]  w-full items-center justify-center ${
          tags === 'vegetable' || 'organic' ? 'bg-gray-100' : 'bg-white'
        } ${classNameForPic}`}
      >
        <img
          src={bacPicture ? (mouseOver === id && windowWidth > 768 ? bacPicture : picture) : picture}
          onMouseOver={() => setMouseOver(id)}
          onMouseLeave={() => setMouseOver('')}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="invisible absolute flex h-9 flex-row items-center justify-center rounded border border-emerald-300 bg-white md:group-hover/body:visible">
          <button className="group/btn1 group/etd relative">
            <Icon className="h-5 fill-emerald-500  group-hover/btn1:fill-yellow-400 group-hover/btn1:-translate-y-1 duration-300" />
            <span className="invisible absolute -right-5 -top-[44px] w-max rounded bg-emerald-500 px-2 py-2 font-body md:text-xs text-[10px] text-white transition-all group-hover/etd:visible">
              Add to wishlist
            </span>
          </button>
          <span className=" h-9 w-[1px] bg-slate-300" />
          <button className="group/btn1 group/etd relative">
            <Icon className="h-5 fill-emerald-500  group-hover/btn1:fill-yellow-400 group-hover/btn1:-translate-y-1 duration-300" />
            <span className="invisible absolute -right-5 -top-[44px] w-max rounded bg-emerald-500 px-2 py-2 font-body md:text-xs text-[10px] text-white transition-all group-hover/etd:visible">
              Add to campier
            </span>
          </button>
          <span className=" h-9 w-[1px] bg-slate-300" />
          <button className="group/btn1 group/etd relative">
            <Icon className="h-5 fill-emerald-500  group-hover/btn1:fill-yellow-400 group-hover/btn1:-translate-y-1 duration-300" />
            <span className="invisible absolute -right-5 -top-[44px] w-max rounded bg-emerald-500 px-2 py-2 font-body md:text-xs text-[10px] text-white transition-all group-hover/etd:visible ">
              Quick view
            </span>
          </button>
        </div>
      </div>
      <small className="mx-5 mt-3 flex flex-wrap md:pb-[6px] pb-[4px] font-body md:text-xs text-[10px] text-gray-400">
        {tags}
      </small>
      <h4 className="mx-5 md:pb-[10px] pb-[8px] font-head md:text-base text-sm text-gray-700 transition-all duration-200 hover:text-emerald-500">
        {name}
      </h4>
      <span className="mx-5 md:pb-[10px] pb-[8px]">
        {/* {item.rating} */}
        <i className="lni lni-star-filled text-xs text-yellow-500" />
        <i className="lni lni-star-filled text-xs text-yellow-500" />
        <i className="lni lni-star-filled text-xs text-yellow-500" />
        <i className="lni lni-star-filled text-xs text-yellow-500" />
      </span>
      <div
        className={`mx-5 md:mb-5 mb-4 flex flex-row items-center ${
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
  const windowWidth = useWindowWidth();

  const limitProduct = (): any => {
    if (windowWidth < 768) return 3 
    else if (limitProductShow) return limitProductShow;
    else if (limitProductShow === null) return productsData?.length;
  };

  return (
    <React.Fragment>
      {productsData?.map((item: Props, idx: number) => (
        <React.Fragment>
          {idx + 1 <= limitProduct() && (
            <div
              key={item.id}
              className="fle-row flex w-full items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={` h-full flex-[40%] items-center justify-center overflow-hidden rounded-md md:p-[3%] p-2 ${
                  item.tags === 'vegetable' || 'organic'
                    ? 'bg-gray-100'
                    : 'bg-white'
                }`}
              >
                <img
                  src={item.picture}
                  className="h-full w-full object-contain"
                  alt={item.name}
                />
              </div>
              <div className="justify-star flex w-full flex-[60%] flex-col items-start md:h-28">
                <h4 className="font-head md:text-[16px] text-[14px] text-gray-800 transition duration-200 hover:text-emerald-500">
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
