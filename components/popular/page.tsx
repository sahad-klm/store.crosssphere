import { popularProductCategory } from "constants/data";
import React, { Key } from "react";
import EachPopularProduct from "./EachPopularProduct";

const PopularProducts = () => {
  const [isSelectedCatN, setIsSelectedCatN] = React.useState("All");

  return (
    <div className="flex px-4 mt-[50px] w-full overflow-hidden flex-col items-center justify-center mb-96">
      <div className="w-full flex justify-between items-center mb-7">
        <h4 className="font-head text-h5 text-gray-800">
          Feathered Categories
        </h4>
        <span className="grid grid-flow-col gap-4">
          {popularProductCategory?.map((item: { id: Key; name: string }) => (
            <p
              key={item.id}
              className={`font-head ${
                isSelectedCatN === item.name
                  ? "text-emerald-500"
                  : "text-gray-800"
              } transition cursor-pointer hover:-translate-y-1 hover:text-emerald-500`}
              onClick={() => setIsSelectedCatN(item.name)}
            >
              {item.name}
            </p>
          ))}
        </span>
      </div>

      <EachPopularProduct />
    </div>
  );
};

export default PopularProducts;
