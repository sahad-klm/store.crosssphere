import { BrowseAllCategories } from '@/lib/data';
import { modulesFinder } from '@/lib/helpers';
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

  const so = BrowseAllCategories.map(element => element.name)
  console.log(pageName)

  function name() {
    
    for (let index = 0; index < so.length; index++) {
      const element = so[index];
      return element
    }
  }
  
  

  if (!pageName[0]) {
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
      {pageName[0]?.modules.map((page: { id: any; pageType: any }) => (
        <Module key={page.id} data={page?.pageType} />
      ))}
    </>
  );
};

export default index;
