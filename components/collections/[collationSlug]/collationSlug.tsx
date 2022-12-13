import { popularProducts } from '@/lib/data';
import { useCategoryProductsFind } from '@/lib/helpers';
import { ButtonShowLimit, ButtonSortBy } from '@/ui/button';
import { AnimatePresence, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';
import { fadeAnim } from 'utils/motion';
import Head from './Head';

const CollationSlug = () => {
  const pathName = usePathname();
  const [filteringCount, setFilteringCount] = React.useState<any>({
    count: 15,
    filterBy: 'Best selling',
  });

  const name = pathName
    ?.split('/')
    .slice(2)
    .map((item) => item.toString());

  const products: any = useCategoryProductsFind(name);

  return (
    <AnimatePresence mode="wait">
      <m.div
        initial="hide"
        animate="show"
        exit="hide"
        variants={fadeAnim}
        className="relative mt-[100px] flex flex-col items-center justify-center  px-4 lg:mt-5"
      >
        <Head headName={products[0].category} tags={products[0].tags} />
        <div className=" flex w-full flex-row items-center justify-center">
          <div className="mb-7 mt-[40px] flex w-full items-center justify-between">
            <div className="inline-flex w-full items-center justify-between">
              <h4 className="font-body text-base text-gray-800 ">
                Sowing all {products.length} products
              </h4>
              <span className="flex gap-3">
                <ButtonShowLimit
                  filteringCount={filteringCount}
                  setFilteringCount={setFilteringCount}
                />
                <ButtonSortBy
                  filteringCount={filteringCount}
                  setFilteringCount={setFilteringCount}
                />
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </m.div>
    </AnimatePresence>
  );
};

export default CollationSlug;
