import React from "react";

export const Rating = ({rating, className = null}:number | any):JSX.Element => {
  return (
    <span className={`mx-5 flex items-center pb-[10px] ${className}`}>
    <i className="lni lni-star-filled text-xs text-yellow-500" />
    <i className="lni lni-star-filled text-xs text-yellow-500" />
    <i className="lni lni-star-filled text-xs text-yellow-500" />
    <i className="lni lni-star-filled text-xs text-yellow-500" />
    &nbsp;&nbsp;<p className="font-body text-gray-500">({rating})</p>
  </span>
    )
};

