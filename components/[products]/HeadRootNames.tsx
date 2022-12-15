import { ArrowNoLine, HomeIcon } from '@/lib/icon';
import Link from 'next/link';
import React from 'react';

const HeadRootNames = ({ product }: any) => {

  return (
    <div className="inline-flex w-full flex-wrap items-center gap-1 font-head text-base text-gray-500 font-medium border-b py-3.5 px-4">
      <p className="inline-flex items-center text-emerald-500">
        <HomeIcon className="-m-3 scale-[.4] fill-emerald-500" /> Home
      </p>
      <ArrowNoLine className="-m-3 scale-[.4] fill-gray-500" />

      <Link
        href={`/collections/${product[0]?.categorySlug}`}
        className="font-head text-base font-bold text-gray-800"
      >
        {product[0]?.category}
      </Link>
      <ArrowNoLine className="-m-3 scale-[.4] fill-gray-500" />
      {product[0]?.name}
    </div>
  );
};

export default HeadRootNames;
