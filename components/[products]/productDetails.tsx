import { useCategoryProductsFind } from '@/lib/helpers';
import CategorySmallBox from '@/ui/categorySmallBox';
import Error from 'next/error';
import { usePathname } from 'next/navigation';
import React from 'react';
import HeadRootNames from './HeadRootNames';
import NewProducts from '../../ui/newProducts';
import OfferBoxInCollection from '@/ui/OfferBoxInCollection';
import { Rating } from '@/ui/rating';
import RateOfProduct, { RateOfProductInProductId } from '@/ui/rate';
import { ArrowNoLine, Love, ShuffleIcon, TickFilledIcon } from '@/lib/icon';
import { ButtonAddToCart } from '@/ui/button';

const ProductDetails = (data: any) => {
  const { product } = data;
  const [cartCount, setCartCount] = React.useState<number>(1);

  console.log(data);

  if (product.length === 0)
    return (
      <Error
        statusCode="seem ann bro"
        title={`sathanam missing ann pinnea va `}
        withDarkMode={true}
      />
    );

  return (
    <div className="relative flex flex-col items-center justify-center max-lg:mt-[100px] ">
      <HeadRootNames product={product} />

      <div className="mt-5 flex w-full flex-col px-4 xl:flex-row">
        {/* products detail */}
        <div className="grid w-full max-lg:grid-row-2  lg:grid-cols-2 mb-8 max-lg:gap-4">
          <div className="grid lg:grid-rows-2 ">
            <div className="flex items-center justify-center bg-gray-100">
              <img
                src={product[0].picture}
                alt=""
                className="lg:w-[96%] object-contain"
              />
            </div>
          </div>
          <div className="ml-5 flex flex-col w-full gap-5">
            <span className='px-4 py-1 bg-pink-200 rounded-md text-pink-600 font-head text-sm  w-max'>sale off</span>
            <h1 className='font-head text-h2 max-w-[90%] leading-[50px] text-gray-700 '>{product[0].name}</h1>
            <Rating rating={product[0].rating} className="mx-0 text-2xl" classNameForStar='text-lg' />
            <RateOfProductInProductId
              rate={product[0].rate}
              offer={product[0].offer}
            />
            <span className="flex flex-col gap-[10px]">
              <p className="inline-flex items-center gap-[10px] text-base text-gray-900">
                <TickFilledIcon className="-m-3 scale-50 fill-lime-700" />
                Pickup avilable al
                <span className="-ml-1 capitalize">
                  shadinte veetinte aduttulla peednn
                </span>
              </p>
              <p className="inline-flex items-center gap-[10px] text-base text-gray-500">
                <TickFilledIcon className="-m-3 scale-50 fill-transparent" />{' '}
                Usually ready in 24 hours{' '}
              </p>
              <p className="inline-flex items-center gap-[10px] text-base text-emerald-500">
                <TickFilledIcon className="-m-3 scale-50 fill-red-500" /> Don't
                check in Other way
              </p>
            </span>
            <h4 className='text-lg text-gray-600 max-w-[90%]'>
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of 
            </h4>
            <div className="flex items-center mt-6">
              <span className="grid h-[50px] w-[100px] grid-flow-col place-content-center items-center justify-between rounded-lg border-[2px] border-emerald-500 ">
                <p className=" ml-7 text-base font-bold text-emerald-500">
                  {cartCount}
                </p>
                <span className="mr-4  ">
                  <ArrowNoLine
                    onClick={() => setCartCount(cartCount + 1)}
                    className="-m-5 -rotate-90 scale-50 cursor-pointer fill-emerald-400"
                  />
                  <ArrowNoLine
                    onClick={() =>
                      setCartCount(cartCount >= 2 ? cartCount - 1 : cartCount)
                    }
                    className="-m-5 rotate-90 scale-50 cursor-pointer fill-emerald-400"
                  />
                </span>
              </span>
              <ButtonAddToCart className="mt-0 w-[158px]" />
              <span className="mr-[10px] grid h-[50px] w-[50px] place-content-center rounded-lg border border-gray-300">
                <Love className="-m-3 scale-50 fill-gray-500" />
              </span>
              <span className="grid h-[50px] w-[50px] place-content-center rounded-lg border border-gray-300">
                <ShuffleIcon className="scale-110 fill-gray-500" />
              </span>
            </div>
            <div className='flex flex-col gap-[5px]'>

            <p className="text-base text-gray-500">
              Vender: <span className="text-emerald-500">Nestly coffrisjn</span>
            </p>
            <p className="text-base text-gray-500">
              Collection:{' '}
              <span className="text-emerald-500">{product[0].category}</span>
            </p>
            <p className="text-base text-gray-500">
              Tags: <span className="text-emerald-500">{product[0].tags}</span>
            </p>
            </div>
          </div>
        </div>

        {/* sidebar */}
        <div className=" lg:flex hidden shrink-0 flex-col gap-5 xl:w-[350px]">
          <CategorySmallBox />
          <NewProducts limit="0" />
          <OfferBoxInCollection />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
