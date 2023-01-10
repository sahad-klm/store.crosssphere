import { modulesFinder } from '@/lib/helpers';
import { productsData } from '@/lib/products';
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
  const pageName = modulesFinder(`/${pathname?.split('/').slice(1)[0]}/[slug]`);

  const productID = pathname?.split('/').slice(2).toLocaleString().replaceAll('%20', " ")
  const product = productsData.filter((item: any) => item.name === productID && item)

  

  if (!pageName[0]) {
    return (
      <>
        <div className="mt-52 flex h-full flex-col items-center justify-center">
          <Image width={1440} height={500} loading='lazy'
            src="/stop.png"
            alt=""
            className="h-[500px] object-contain"
          />
          <h1
            style={{ fontSize: '40px', color: 'red', fontFamily: 'monospace' }}
          >
            Wait few years
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      {pageName[0]?.modules.map((page: { id: any; pageType: any }) => (
        <Module key={page.id} data={page?.pageType} product={product}  />
      ))}
    </>
  );
};

export default index;
