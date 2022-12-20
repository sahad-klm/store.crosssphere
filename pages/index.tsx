import { modulesFinder } from '@/lib/helpers';
import Module from 'components/module/Module';
import Image from 'next/image';
import { usePathname} from 'next/navigation';
import React from 'react';

const Home = (data: {
  sate: any | undefined;
  page: any | undefined;
}): JSX.Element => {
  const pathname = usePathname();
  const { site, page }: any = data;
  const pageName = modulesFinder(pathname)

  if (!pageName[0]) {
    return (
      <>
        <div className="mt-52 flex h-full flex-col items-center justify-center">
          <Image width={1440} height={500} loading="lazy"
            src="/970b8f66-193e-4546-a78e-abb98b57aabb.webp"
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
   
      {pageName[0].modules.map((page: { id: any; pageType: any; }) => (
        <Module key={page.id} data={page?.pageType} />
        ))}
        </>
  );
};

export default Home;
