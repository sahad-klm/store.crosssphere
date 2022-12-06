'use client';
import OneProductWithOffer from '@/ui/OneProductWithOffer';
import { popularProducts } from 'constants/data';
import React from 'react';

type Props = {
  id: React.Key;
  name: string;
  rating?: number | any;
  tags?: string;
  rate?: number | any;
  offer?: number | any;
  picture?: string | any;
  bacPicture?: string | any;
};
const EachPopularProduct: any = () => {
  const [mouseOver, setMouseOver] = React.useState<any>();

  return (
    <div
      className="grid w-full grid-cols-2 justify-center gap-5 md:grid-cols-3 lg:grid-cols-4
    "
    >
      {popularProducts?.map((item: Props) => (
        <OneProductWithOffer mouseOver={mouseOver} setMouseOver={setMouseOver} key={item.id} {...item} buttonStyle='add'/>
      ))}
    </div>
  );
};

export default EachPopularProduct;
