import React from "react";

const RateOfProduct = ({rate, offer = 0}:{rate:number, offer?:number}): JSX.Element => {
  return (
    <p className="flex items-center gap-2 font-head md:text-lg text-base text-emerald-500">
    ${rate - (rate * offer) / 100}
    {offer && (
      <span className="text-sm text-gray-500 line-through">${rate}</span>
    )}
  </p>
    )
};

export default RateOfProduct;
