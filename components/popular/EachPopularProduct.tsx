import {  popularProducts } from "constants/data";
import { Icon } from "constants/icon";
import React from "react";

const EachPopularProduct:any = () => {
  return (
  <div>
    {popularProducts?.map((item) => (
      <div key={item.id}>
        <span>{item.offer}</span>
        <div>
          <img src={item.picture} alt="" />
        </div>
        <small>{item.tags}</small>
        <h4>{item.name}</h4>
        <span>
          {item.rate}
        </span>
        <div>
          <p>{item.rate}</p>
          <span>{item.rate}</span>
          <button>
            <Icon />
            Add
          </button>
        </div>
      </div>
    ))}
  </div>
    )
};

export default EachPopularProduct;
