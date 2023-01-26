'use client';
import {
  SiteContextProvider,
  useSiteContext,
  useTogglePageTransition,
} from '@/lib/context';
import Head from 'next/head';
import {  AnimatePresence } from 'framer-motion';

import '/styles/globals.css';
import 'styles/dist.css'
import { isBrowser, useScrollRestoration } from '@/lib/helpers';
import React, { useContext, useEffect, useMemo } from 'react';
import { Router } from 'next/router';
import { pageTransitionSpeed } from '@/lib/motion';
import { useRouter } from 'next/navigation';
import { AppProps } from 'next/app';
import Layout from 'components/layout/layout';
import Image from 'next/image';

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
    // <LazyMotion features={domAnimation}>
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        document.body.classList.remove('overflow-hidden');
      }}
    >
      <Layout>
        <Component key={pageID} {...pageProps} />
      </Layout>
    </AnimatePresence>
    // </LazyMotion>
  );
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const [first, setFirst] = React.useState(false);
  const { data } = pageProps;
  const routerlp = useRouter();
  return (
    <>
      <Head>
        <title>Fidora International</title>
      </Head>

      <SiteContextProvider data={{ ...data }}>
        <Site Component={Component} pageProps={pageProps} router={router} />
      </SiteContextProvider>
    </>
  );
}

export default MyApp;
