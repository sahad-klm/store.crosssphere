import { Icon } from '@/lib/icon';
import Link from 'next/link';

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
  classNameForTotal?: any;
  categorySlug?:string
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
  classNameForTotal,
  categorySlug
}: Props): any {
  const addBtn = buttonStyle === 'add';
  const addToCartBtn = buttonStyle === 'add-to-cart';
  const [windowWidth, setWindowWidth] = React.useState<number| any>();
  

  React.useEffect(() => {
    if(typeof window !== undefined ) {

      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
      
      setWindowWidth(window.innerWidth)
      
      return window.removeEventListener('resize',() => setWindowWidth(windowWidth))
    }
  }, []);

  return (
    <div
      className={`group/body relative flex max-w-[290px] shrink-0 flex-col overflow-hidden rounded-[18px] border border-gray-300 bg-white hover:border-emerald-300 hover:shadow-xl ${classNameForTotal}`}
    >
      {offer && (
        <span className="absolute top-0 left-0 z-10  flex self-start rounded-br-[18px] bg-red-700 py-1 px-5 font-body text-sm text-white">
          {offer}%
        </span>
      )}
      <div
        className={`relative flex h-[769px] w-full  items-center justify-center md:h-72 ${
          tags === 'vegetable' || 'organic' ? 'bg-gray-100' : 'bg-white'
        } ${classNameForPic}`}
      >
        <Link href={`/${categorySlug}/${id}`}>
        <img
          src={
            bacPicture
            ? mouseOver === id && windowWidth > 768
            ? bacPicture
            : picture
            : picture
          }
          onMouseOver={() => setMouseOver(id)}
          onMouseLeave={() => setMouseOver('')}
          alt=""
          className="h-full w-full object-contain"
          />
          </Link>

        <div className="invisible absolute flex h-9 flex-row items-center justify-center rounded border border-emerald-300 bg-white md:group-hover/body:visible">
          <button className="group/btn1 group/etd relative outline-none border-none">
            <Icon className="h-5 fill-emerald-500  duration-300 group-hover/btn1:-translate-y-1 group-hover/btn1:fill-yellow-400" />
            <span className="invisible absolute -right-5 -top-[44px] w-max rounded bg-emerald-500 px-2 py-2 font-body text-[10px] text-white transition-all group-hover/etd:visible md:text-xs">
              Add to wishlist
            </span>
          </button>
          <span className=" h-9 w-[1px] bg-slate-300" />
          <button className="group/btn1 group/etd relative outline-none border-none">
            <Icon className="h-5 fill-emerald-500  duration-300 group-hover/btn1:-translate-y-1 group-hover/btn1:fill-yellow-400" />
            <span className="invisible absolute -right-5 -top-[44px] w-max rounded bg-emerald-500 px-2 py-2 font-body text-[10px] text-white transition-all group-hover/etd:visible md:text-xs">
              Add to campier
            </span>
          </button>
          <span className=" h-9 w-[1px] bg-slate-300" />
          <button className="group/btn1 group/etd relative">
            <Icon className="h-5 fill-emerald-500  duration-300 group-hover/btn1:-translate-y-1 outline-none border-none group-hover/btn1:fill-yellow-400" />
            <span className="invisible absolute -right-5 -top-[44px] w-max rounded bg-emerald-500 px-2 py-2 font-body text-[10px] text-white transition-all group-hover/etd:visible md:text-xs ">
              Quick view
            </span>
          </button>
        </div>
      </div>
      <small className="mx-5 mt-3 flex flex-wrap pb-[4px] font-body text-[10px] text-gray-400 md:pb-[6px] md:text-xs">
        {tags}
      </small>
      <Link href={`/${categorySlug}/${id}`}>
      <h4 className="mx-5 pb-[8px] font-head text-sm text-gray-700 transition-all duration-200 hover:text-emerald-500 md:pb-[10px] md:text-base">
        {name}
      </h4>
      </Link>
      <span className="mx-5 pb-[8px] md:pb-[10px]">
        {/* {item.rating} */}
        <i className="lni lni-star-filled text-xs text-yellow-500" />
        <i className="lni lni-star-filled text-xs text-yellow-500" />
        <i className="lni lni-star-filled text-xs text-yellow-500" />
        <i className="lni lni-star-filled text-xs text-yellow-500" />
      </span>
      <div
        className={`mx-5 mb-4 flex flex-row flex-wrap items-center md:mb-5 ${
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
  const [windowWidth, setWindowWidth] = React.useState<any>();
  



  const limitProduct = (): any => {
    if (windowWidth > 768) return 3;
    else if (limitProductShow) return limitProductShow;
    else if (limitProductShow === null) return productsData?.length;
  };


  React.useEffect(() => {
    if(typeof window !== undefined ) {

      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
      
      setWindowWidth(window.innerWidth)
      
      return window.removeEventListener('resize',() => setWindowWidth(windowWidth))
    }
  }, []);

  return (
    <React.Fragment>
      {productsData?.map((item: Props, idx: number) => (
        <React.Fragment key={item.id}>
          {idx + 1 <= limitProduct() && (
            <div className="fle-row flex w-full items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1">
              <div
                className={` h-full flex-[40%] items-center justify-center overflow-hidden rounded-md p-2 md:p-[3%] ${
                  item.tags === 'vegetable' || 'organic'
                    ? 'bg-gray-100'
                    : 'bg-white'
                }`}
              >
                <Link href={`/${item.categorySlug}/${item.id}`}>

                <img
                  src={item.picture}
                  className="h-full w-full object-contain"
                  alt={item.name}
                  />
                  </Link>
              </div>
              <div className="justify-star flex w-full flex-[60%] flex-col items-start md:h-28">
                <h4 className="font-head text-[14px] text-gray-800 transition duration-200 hover:text-emerald-500 md:text-[16px]">
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
