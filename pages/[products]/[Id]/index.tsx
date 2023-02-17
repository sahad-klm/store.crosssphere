import { modulesFinder } from '@/lib/helpers';
import { productsData } from '@/lib/products';
import { ProductDetails } from 'components';
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

  const productID = pathname
    ?.split('/')
    .slice(2)
    .toLocaleString()
    .replaceAll('%20', ' ');
  const product = productsData.filter(
    (item: any) => item.name === productID && item,
  );

  if (!product) {
    return (
      <>
        <div className="mt-52 flex h-full flex-col items-center justify-center">
          <Image
            width={1440}
            height={500}
            loading="lazy"
            src=""
            alt=""
            className="h-[500px] object-contain"
          />
          <h1
            style={{ fontSize: '40px', color: 'red', fontFamily: 'monospace' }}
          ></h1>
        </div>
      </>
    );
  }

  return (
    <>
      <ProductDetails data={product} />;
    </>
  );
};

export default index;
