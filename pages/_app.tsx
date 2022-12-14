'use client';
import {
  SiteContextProvider,
  useSiteContext,
  useTogglePageTransition,
} from '@/lib/context';
import Head from 'next/head';
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';

import '/styles/globals.css';
import { isBrowser, useScrollRestoration } from '@/lib/helpers';
import React, { useContext, useEffect, useMemo } from 'react';
import { Router } from 'next/router';
import { pageTransitionSpeed } from 'utils/motion';

if (isBrowser) {
  console.groupCollapsed(
    '%c🦤 Site Credits',
    'display:block;padding:0.125em 1em;font-family:courier;font-size:14px;font-weight:bold;line-height:2;text-transform:uppercase;background:black;color:white;',
  );
  console.log(
    '%cDesign copied from  \n– https://boostify-nesst.myshopify.com/',
    'display:block;font-family:courier;font-size:12px;font-weight:bold;line-height:1;color:black;',
  );
  console.log(
    '%c🦤 Onnum tnnalle seatta',
    'display:block;font-family:courier;font-size:12px;font-weight:bold;line-height:1;color:black;',
  );
  console.groupEnd();
}

const Site = ({ Component, pageProps, router }: any): JSX.Element => {
  const togglePageTransition = useTogglePageTransition();
  const { isPageTransition } = useSiteContext();
  const { data } = pageProps;
  

  //  get scroll potion
  useScrollRestoration(router, isPageTransition);

  useEffect(() => {
    if (isBrowser) {
      document.documentElement.classList.toggle('is-loading', isPageTransition);
    }
  }, [isPageTransition]);

  useEffect(() => {
    Router.events.on('routeChangeStart', (_, { shallow }) => {
      // Bail if we are changing urls Parameters
      if (shallow) return;

      togglePageTransition(true);
    });

    Router.events.on('routeChangeComplete', () => {
      setTimeout(() => togglePageTransition(false), pageTransitionSpeed);
    });

    Router.events.on('routeChangeError', () => {
      togglePageTransition(false);
    });
  }, []);

  const handleFirstTab = (event: KeyboardEvent) => {
    if (event.keyCode === 9) {
      if (isBrowser) {
        document.body.classList.add('is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);

    return () => {
      window.removeEventListener('keydown', handleFirstTab);
    };
  }, []);

  const pageID = useMemo(() => data?.page?.id, [data]);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          document.body.classList.remove('overflow-hidden');
        }}
      >
        <Component key={pageID} {...pageProps} />
      </AnimatePresence>
    </LazyMotion>
  );
};

function MyApp({ Component, pageProps, router }: any) {
  const [first, setFirst] = React.useState();
  const { data } = pageProps;
  return (
    <>
      <Head>
        <title>Next.js</title>
      </Head>
      {!first && (
        <div className="grid-row-2 fixed inset-0 z-[500000000000] grid bg-black">
          <div className="mx-auto flex w-[80%] flex-col items-center justify-center overflow-hidden rounded-3xl border-[5px]">
            <h1 className="text-h4 text-white">find masterpice smile</h1>
            <a href='/' className='text-white text-h4 border p-5 bg-red-700 absolute '>onnum kannllagil ithil kick adichalla</a>
            <img
              src="20220822_093622.png"
              className="w-full object-contain z-20"
            />
            <button
              onClick={() => {
                if (
                  window.confirm(
                    'ijj parajjath sattyam annnnu tonnu thalkaalam site kandu pettnnu povaan nook',
                  )
                )
                  setFirst(true);
              }}
              className="mt-5 rounded-xl bg-white px-10 py-5 text-black"
            >
              ith
            </button>
          </div>
          <div className="mx-auto flex w-[80%] flex-col items-center justify-center overflow-hidden rounded-3xl border-[5px]">
            <img src="Untitled.png" alt="" className="w-full object-contain" />
            <button
              onClick={() => alert('ijj tett anser adichu ini pinne vaa')}
              className="mt-5 rounded-xl bg-white px-10 py-5 text-black"
            >
              ith
            </button>
          </div>
        </div>
      )}

      <SiteContextProvider data={{ ...data }}>
        <Site Component={Component} pageProps={pageProps} router={router} />
      </SiteContextProvider>
    </>
  );
}

export default MyApp;
