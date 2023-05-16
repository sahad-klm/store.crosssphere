import { isBrowser, isMobileSafari, useWindowSize } from '@/lib/helpers';
import HeadSEO from 'components/Header/HeadSEO';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { pageTransitionSpeed } from '@/lib/motion';
import { m } from 'framer-motion';
import Header from 'components/Header/Header';
import Footer from 'components/footer/Page';
import {
  FacebookIcon,
  HashTagIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/lib/icon';
import Feathers from 'components/feature/Page';
import { usePathname } from 'next/navigation';
import Welcome2Top from '@/ui/Welcome2Top';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import whatsAppIcon from 'public/frut.jpeg';

const pageTransitionAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: pageTransitionSpeed / 1000,
      delay: 0.2,
      ease: 'linear',
      when: 'beforeChildren',
    },
    hide: {
      opacity: 0,
      transition: pageTransitionSpeed / 1000,
      delay: 0.2,
      ease: 'linear',
      when: 'beforeChildren',
    },
  },
};

const Layout = ({
  page = {},
  site = {},
  schema,
  children,
}: any): JSX.Element => {
  const pathName: any = usePathname();
  // set window height var (w/ safari/ios hack)

  const { height: windowHeight } = useWindowSize();
  const [lockHeight, setLockHeight] = useState<any>(false);
  const hasChine = isMobileSafari();

  // hide features from collection
  const hideFeatures: boolean = pathName === '/collections' ? false : true;

  const socialMediaIcon = (platform: string): any => {
    switch (platform) {
      case 'facebook':
        return <FacebookIcon className="h-[20px] w-[20px] fill-white p-0.5" />;

      case 'twitter':
        return <TwitterIcon className="h-[20px] w-[20px] fill-white p-0.5" />;

      case 'instagram':
        return <InstagramIcon className="h-[20px] w-[20px] fill-white p-0.5" />;
      case 'youtube':
        return <YoutubeIcon className="h-[20px] w-[20px] fill-white p-0.5" />;
      case 'hashtag':
        return <HashTagIcon className="h-[20px] w-[20px] fill-white p-0.5" />;
    }
  };

  // set header height

  useEffect(() => {
    if ((isBrowser && !lockHeight) || !hasChine) {
      document.body.style.setProperty('--vh', `${windowHeight * 0.1}px`);
      setLockHeight(hasChine);
    }
  }, [windowHeight, hasChine]);

  return (
    <>
      <HeadSEO site={site} page={page} schema={schema} />
      <m.div
        key={page.id}
        initial="hide"
        animate="show"
        exit="hide"
        variants={pageTransitionAnim}
        className="mx-auto w-full max-w-[1440px]"
      >
        <Header />
        <main id="content">{children}</main>

        {hideFeatures && <Feathers />}

        {/* whatsApp */}

        <FloatingWhatsApp
          phoneNumber="+91 8075122414"
          accountName={'Aldan International'}
          avatar="../../tlogo.png"
        />
        <Footer />
        <div className="flex flex-col items-center justify-center gap-3 border-t border-emerald-300 px-4 py-2">
          <p className="cursor-default select-none text-center font-body text-xs text-gray-500 sm:text-sm md:text-left md:text-base">
            © 2023 Dodo,{' '}
            <span className="text-emerald-500">Aldan International</span> All
            Rights Reserved.
          </p>
        </div>
        <Welcome2Top />
      </m.div>
    </>
  );
};

export default Layout;
