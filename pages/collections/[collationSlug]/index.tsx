import { modulesFinder } from '@/lib/helpers';
import { productsData } from '@/lib/products';
import { ProductDetails } from 'components';
import CollationSlug from 'components/collections/[collationSlug]/collationSlug';
import Layout from 'components/layout/layout';
import Module from 'components/module/Module';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import React from 'react';

const index = (data: {
  sate: any | undefined;
  page: any | undefined;
}): JSX.Element => {
  const pathname = usePathname();
  const { site, page }: any = data;
  const pageName = modulesFinder(pathname);

  const productsCatogory  = productsData.filter((item) => item.categorySlug === pathname?.split('/').slice(2).toString())
  
  console.log(pathname?.split('/').slice(2).toString())

  if (pathname === null) {
    return (
      <>
        <div className="mt-52 flex h-full flex-col items-center justify-center">
          <Image width={1440} height={500} loading='lazy'
            src="/404.png"
            alt=""
            className="h-[500px] object-contain"
          />
          <h1
            style={{ fontSize: '40px', color: 'red', fontFamily: 'monospace' }}
          >
            onn sheriyaakki tharo, demand kaattalli
          </h1>
          
        </div>
      </>
    );
  }

  return (
    <>
      <CollationSlug data={productsCatogory} />
    </>
  );
};

export default index;
