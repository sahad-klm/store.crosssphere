import React from 'react';

const RateOfProduct = ({
  rate,
  offer = 0,
}: {
  rate: number;
  offer?: number;
}): JSX.Element => {
  return (
    <p className="flex flex-wrap items-center gap-2 font-head text-base text-emerald-500 md:text-lg">
      ${rate - (rate * offer) / 100}
      {offer && (
        <span className="text-sm text-gray-500 line-through">${rate}</span>
      )}
    </p>
  );
};

export const RateOfProductInProductId = ({
  rate,
  offer = 0,
}: {
  rate: number;
  offer?: number;
}) => {
  return (
    <p className="flex flex-wrap items-center gap-2 font-head text-base text-emerald-500 md:text-[58px]">
      ${rate - (rate * offer) / 100}
      {offer && (
        <div className="ml-3 flex flex-col">
          <span className="font-head text-base text-yellow-400">
            {offer}% Off
          </span>
          <span className="text-[26px] text-gray-500 line-through">
            ${rate}
          </span>
        </div>
      )}
    </p>
  );
};

export default RateOfProduct;
