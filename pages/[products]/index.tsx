import { modulesFinder } from '@/lib/helpers';
import Layout from 'components/layout/layout';
import Module from 'components/module/Module';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

const Home = (data: {
  sate: any | undefined;
  page: any | undefined;
}): JSX.Element | any => {
  const pathname = usePathname();
  const { site, page }: any = data;
  const pageName = modulesFinder(pathname)
  console.log(pathname);

  if (!pageName[0]) {
    return (
      <>
        <div className="mt-52 flex h-full flex-col items-center justify-center">
          <img
            src="970b8f66-193e-4546-a78e-abb98b57aabb.webp"
            alt=""
            className="h-[500px] object-contain"
          />
          <h1 style={{fontSize:'40px' ,color:'red' , fontFamily:'monospace' }}>ipo sari aaki taraa 0ru <b className='text-green-600'>4 sec</b> seen ind piine va</h1>
        </div>
      </>
    );
  }

    
   return (
    <>
   

    <Layout site={site} page={page}>
      {pageName[0].modules.map((page: { id: any; pageType: any; }) => (
        <Module key={page.id} data={page?.pageType} />
        ))}
    </Layout>

        </>
  );
};

export default Home;
