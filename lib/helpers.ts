import { Router } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export const isBrowser = typeof window !== 'undefined';

export const useScrollRestoration = (router: any, delay: number) => {
  const restorePosition = useRef({});

  const SaveScrollPosition = (url: any, pos: any) => {
    restorePosition.current = {
      ...restorePosition.current,
      [url]: pos,
    };
  };

  const updateScrollPotion = (
    url: string | number,
    restore: { current: { [x: string]: any } },
    shouldRestore: any,
  ) => {
    const position = restore.current[url];

    // if we have a saved position and it's a history change, restore position, otherwise set to 0
    setTimeout(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: position && shouldRestore ? position : 0 });
      });
    }, delay + 100);
  };

  useEffect(() => {
    let shouldScrollRestore = false;
    window.history.scrollRestoration = 'manual';

    const onBeforeUnload = (event: any) => {
      SaveScrollPosition(router.asPath, window.scrollY);
      delete event['returnValue'];
    };

    const onRouteChangeStar = () => {
      SaveScrollPosition(router.asPath, window.screenY);
    };

    const onRouteChangeComplete = (url: string | number, { shallow }: any) => {
      //Bail if we're just changing URL parameters
      if (shallow) return;

      updateScrollPotion(url, restorePosition, shouldScrollRestore);

      //reset if we should restore the scroll potion
      shouldScrollRestore = false;
    };

    // save scroll potion on route change
    window.addEventListener('beforeunload', onBeforeUnload);
    Router.events.on('routeChangeStart', onRouteChangeStar);

    // restore position after route change completes
    Router.events.on('routeChangeComplete', onRouteChangeComplete);

    // if it's a history change, set to restore scroll position to "true"

    // Router.beforePopState((state) => {
    //   shouldScrollRestore = true
    //   state.options.scroll = false
    //   return true
    // })

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      Router.events.off('routeChangeStart', onRouteChangeStar);
      Router.events.off('routeChangeComplete', onRouteChangeComplete);
      // Router.beforePopState(() => true)
    };
  }, []);
};

export function useWindowSize() {
  function getSize() {
    return {
      width: isBrowser ? window.innerWidth : 0,
      height: isBrowser ? window.innerHeight : 0,
    };
  }
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isBrowser) return;

    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export function isMobileSafari() {
  if (!isBrowser) return;
  return navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/appleWebKit/)
    ? true
    : false;
}
