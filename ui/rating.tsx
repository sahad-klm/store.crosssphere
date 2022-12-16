import React from 'react';

export const Rating = ({
  rating,
  className = null,
  classNameForStar,
}: {
  rating?: number;
  className?: any;
  classNameForStar?: string;
}): JSX.Element => {
  return (
    <span className={`mx-5 flex items-center pb-[10px] ${className}`}>
      <i
        className={`lni lni-star-filled text-xs text-yellow-500  ${classNameForStar}`}
      />
      <i
        className={`lni lni-star-filled text-xs text-yellow-500 ${classNameForStar}`}
      />
      <i
        className={`lni lni-star-filled text-xs text-yellow-500 ${classNameForStar}`}
      />
      <i
        className={`lni lni-star-filled text-xs text-yellow-500 ${classNameForStar}`}
      />
      &nbsp;&nbsp;
      {rating && <p className="font-body text-gray-500">({rating})</p>}
    </span>
  );
};
