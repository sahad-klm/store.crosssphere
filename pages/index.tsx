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
  const [first, setFirst] = React.useState();
  const [isFirst, setIsFirst] = React.useState();
  

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
    {
      !first &&
    <div className='inset-0 grid grid-row-2 fixed bg-black z-[50000]'>
      <div className='w-[80%] flex justify-center items-center mx-auto flex-col border-[5px] rounded-3xl overflow-hidden'>
    <h1 className='text-white text-h4'>find masterpice smile</h1>
        <img src="20220822_093622.png" alt="" className='w-full object-contain' />
        <button onClick={() =>{ 
          if (window.confirm('ijj parajjath sattyam annnnu tonnu thalkaalam site kandu pettnnu povaan nook'))
          setFirst(true)
          
          }} className='bg-white text-black px-10 py-5 rounded-xl mt-5'>ith</button>
      </div>
      <div className='w-[80%] flex justify-center items-center mx-auto flex-col border-[5px] rounded-3xl overflow-hidden'>
        <img src="Untitled.png" alt="" className='w-full object-contain' />
        <button onClick={() => alert('ijj tett anser adichu ini pinne vaa')} className='bg-white text-black px-10 py-5 rounded-xl mt-5'>ith</button>
      </div>

    </div>}

    <Layout site={site} page={page}>
      {pageName[0].modules.map((page: { id: any; pageType: any; }) => (
        <Module key={page.id} data={page?.pageType} />
        ))}
    </Layout>

        </>
  );
};

export default Home;
