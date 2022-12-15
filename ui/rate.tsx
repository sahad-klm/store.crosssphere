import React from "react";

const RateOfProduct = ({rate, offer = 0}:{rate:number, offer?:number}): JSX.Element => {
  return (
    <p className="flex items-center gap-2 font-head md:text-lg text-base text-emerald-500 flex-wrap">
    ${rate - (rate * offer) / 100}
    {offer && (
      <span className="text-sm text-gray-500 line-through">${rate}</span>
    )}
  </p>
    )
};

export const RateOfProductInProductId = ({rate, offer = 0}:{rate:number, offer?:number}) => {
  return (
    <p className="flex items-center gap-2 font-head md:text-[58px] text-base text-emerald-500 flex-wrap">
    ${rate - (rate * offer) / 100}
    {offer && (

      <div className="flex flex-col ml-3">
        <span className="font-head text-base text-yellow-400">{offer}% Off</span>
      <span className="text-[26px] text-gray-500 line-through">${rate}</span>

      </div>

    )}
  </p>
    )

}


export default RateOfProduct;
