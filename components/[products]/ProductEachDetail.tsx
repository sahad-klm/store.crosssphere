import { ArrowNoLine, Love, ShuffleIcon, TickFilledIcon } from '@/lib/icon';
import { ButtonAddToCart } from '@/ui/button';
import { RateOfProductInProductId } from '@/ui/rate';
import { Rating } from '@/ui/rating';
import React from 'react';

const ProductEachDetail = (product: any) => {
  const [cartCount, setCartCount] = React.useState<number>(1);
  return (
    <div className="ml-5 flex w-full flex-col gap-5 ">
      <span className="w-max rounded-md bg-emerald-200 px-4 py-1 font-head text-sm  text-[#00539f]">
        sale on
      </span>
      <h1 className="max-w-[90%] font-head text-h2 leading-[50px] text-gray-700 ">
        {product[0].name}
      </h1>
      <Rating
        rating={product[0].rating}
        className="mx-0 text-2xl"
        classNameForStar="text-lg"
      />
      {/* <RateOfProductInProductId
        rate={product[0].rate}
        offer={product[0].offer}
      /> */}
      <span className="flex flex-col gap-[10px]">
        <p className="inline-flex items-center gap-[10px] text-base text-gray-900">
          <TickFilledIcon className="-m-3 scale-50 fill-[#00539f]" />
          Air and Sea
          <span className="-ml-1 capitalize">Shipment</span>
        </p>
        <p className="inline-flex items-center gap-[10px] text-base text-gray-500">
          <TickFilledIcon className="-m-3 scale-50 fill-transparent" /> Depend
          on product{' '}
        </p>
        <p className="inline-flex items-center gap-[10px] text-base text-[#5E665D]">
          <TickFilledIcon className="-m-3 scale-50 fill-red-500" />
        </p>
      </span>
      <h4 className="max-w-[90%] text-lg text-gray-600">
        {product[0].smallDetail}
      </h4>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <span className="grid h-[50px] w-[100px] grid-flow-col place-content-center items-center justify-between rounded-lg border-[2px] border-emerald-500 ">
          <p className=" ml-7 text-base font-bold text-[#5E665D]">
            {cartCount}
          </p>
          <span className="mr-4  ">
            <ArrowNoLine
              onClick={() => setCartCount(cartCount + 1)}
              className="-m-5 -rotate-90 scale-50 cursor-pointer fill-[#0073c2]"
            />
            <ArrowNoLine
              onClick={() =>
                setCartCount(cartCount >= 2 ? cartCount - 1 : cartCount)
              }
              className="-m-5 rotate-90 scale-50 cursor-pointer fill-[#0073c2]"
            />
          </span>
        </span>
        <ButtonAddToCart className="mx-0 mt-0 w-[158px]" />
        <div className="flex gap-3">
          <span className=" grid h-[50px] w-[50px] place-content-center rounded-lg border border-gray-300">
            <Love className="-m-3 scale-50 fill-gray-500" />
          </span>
          <span className="grid h-[50px] w-[50px] place-content-center rounded-lg border border-gray-300">
            <ShuffleIcon className="scale-110 fill-gray-500" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[5px]">
        <p className="text-base text-gray-500">
          Vender: <span className="text-[#5E665D]">Aldan International</span>
        </p>
        <p className="text-base text-gray-500">
          Collection:{' '}
          <span className="text-[#5E665D]">{product[0].category}</span>
        </p>
        <p className="text-base text-gray-500">
          Tags: <span className="text-[#5E665D]">{product[0].tags}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductEachDetail;
