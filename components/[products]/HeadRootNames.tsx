import { ArrowNoLine, HomeIcon } from '@/lib/icon';
import Link from 'next/link';
import React from 'react';

const HeadRootNames = () => {
  return (
    <div>
      <div className="inline-flex flex-wrap items-center gap-1 font-head text-base text-gray-600">
        <p className="inline-flex items-center text-emerald-500">
          <HomeIcon className="-m-3 scale-[.4] fill-emerald-500" /> Home
        </p>
        <ArrowNoLine className="-m-3 scale-[.4] fill-gray-500" />

        <Link href="/collections">collections</Link>
        <ArrowNoLine className="-m-3 scale-[.4] fill-gray-500" />
        {/* {headName} */}
      </div>
    </div>
  );
};

export default HeadRootNames;
