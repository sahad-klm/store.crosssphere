import { isBrowser, isMobileSafari, useWindowSize } from '@/lib/helpers';
import HeadSEO from 'components/Header/HeadSEO';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { pageTransitionSpeed } from 'utils/motion';
import { m } from 'framer-motion';
import Header from 'components/Header/Header';
import Footer from 'components/footer/Page';
import { CallIcon } from '@/lib/icon';
import { footerSocialMedia } from '@/lib/data';
import Feathers from 'components/feature/Page';
import { usePathname } from 'next/navigation';
import Welcome2Top from '@/ui/Welcome2Top';

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
  const pathName:any = usePathname();
  // set window height var (w/ safari/ios hack)

  const { height: windowHeight } = useWindowSize();
  const [lockHeight, setLockHeight] = useState<any>(false);
  const hasChine = isMobileSafari();
  const [headerHeight, setHeaderHeight] = useState(null);

  // hide features from collection
  const hideFeatures: boolean = pathName === '/collections' ? false : true;

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
      {site.gtmID && (
        <Script
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${site.gtmID}');`,
          }}
        />
      )}

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
        <Footer />
        <div className="mt-[50px] flex flex-col items-center justify-center gap-3 border-t border-emerald-300 px-4 py-4 sm:gap-4 md:flex-row md:justify-between md:gap-5 md:py-6  ">
          <p className="cursor-default select-none text-center font-body text-xs text-gray-500 sm:text-sm md:text-left md:text-base">
            © 2022, <span className="text-emerald-500">Nest</span>- Copied from
            Boostify themes <br />
            No rights reserved
          </p>
          <div className="flex flex-col gap-1 sm:gap-3 lg:flex-row lg:gap-5 xl:gap-10">
            <div className="flex items-center gap-2 lg:gap-3">
              <CallIcon className=" h-7 w-7 fill-gray-400 sm:h-9 sm:w-9 lg:h-10 lg:w-10" />
              <div>
                <h1 className="font-head text-base  leading-3 text-emerald-500 sm:text-h5  md:text-[26px] lg:leading-10">
                  1900 - 6666 -
                </h1>
                <p className="font-body text-[8px]  tracking-widest text-gray-500 sm:text-[10px] lg:text-xs">
                  Working 8: 00 - 2: 00
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center gap-2 md:items-center lg:gap-3">
              <CallIcon className=" h-7 w-7 fill-gray-400 sm:h-9 sm:w-9 lg:h-10 lg:w-10" />
              <div>
                <h1 className="font-head text-base leading-3  text-emerald-500 sm:text-h5  lg:text-[26px] lg:leading-10">
                  1900 - 6666
                </h1>
                <p className="font-body text-[8px]  tracking-widest text-gray-500 sm:text-[10px] lg:text-xs">
                  Working 8: 00 - 2: 00
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex w-full flex-row items-end justify-center gap-2 md:flex-col lg:flex-row lg:gap-4">
              <h3 className="font-head text-xs text-gray-700 sm:text-sm md:text-base">
                Follows us
              </h3>
              <div className="flex gap-1 sm:gap-2">
                {footerSocialMedia?.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="grid h-5 w-5 shrink-0 place-content-center rounded-full bg-emerald-500 duration-300 hover:bg-lime-400 sm:h-7 sm:w-7"
                  >
                    <i
                      className={`${item.icon} text-xs text-white sm:text-base`}
                      title={item.name}
                    />
                  </a>
                ))}
              </div>
            </div>
            <p className="mt-[1px] text-center font-body text-[10px] text-gray-500 sm:text-xs md:text-right md:text-sm">
              Upto 15% discount on your first subscribe
            </p>
          </div>
        </div>
        <Welcome2Top/>
      </m.div>
    </>
  );
};

export default Layout;
