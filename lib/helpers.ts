import { Router } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { popularProducts } from './data';
import { pageController } from './pageController';

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

export function modulesFinder(pathname: any) {
  return pageController.filter(
    (item: any) => item.slug === pathname && item.modules,
  );
}

export const DOTS = '...';

export function usePagination({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}) {

  const range = (start: number, end: number) => {
    let length = end - start + 1;

    return Array.from({ length }, (_, idx) => idx + start);
  };
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS

    const totalPageNumbers = siblingCount + 5;

    // if the number of page less than the page number we want to paginationComponent, we return the range [1...totalPageCount]

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalCount);

    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRage = range(1, leftItemCount);

      return [...leftRage, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalCount - rightItemCount + 1, totalCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
}

export function useCategoryProductsFind (name:any) {
  return popularProducts.filter((item) => item.categorySlug === name?.toLocaleString() || popularProducts.filter((item) => item.id === name?.toLocaleString()  && item
  ))
}