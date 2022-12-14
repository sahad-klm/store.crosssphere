import { BrowseAllCategories, popularProducts } from '@/lib/data';
import { useCategoryProductsFind } from '@/lib/helpers';
import { ArrowDownFilled } from '@/lib/icon';
import { ButtonShowLimit, ButtonSortBy } from '@/ui/button';
import CategorySmallBox from '@/ui/categorySmallBox';
import FilterByC_T_R from '@/ui/filterByC_T_R';
import {
  OneProductLeftPicRightDetail,
  OneProductWithOffer,
} from '@/ui/OneProductWithOffer';
import RateOfProduct from '@/ui/rate';
import { Rating } from '@/ui/rating';
import DealsOfTheDay, {
  DealsOfTheDayInCollection,
} from 'components/deals/Page';
import ProductWithTimer from 'components/deals/ProductWithTimer';
import { AnimatePresence, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';
import { fadeAnim } from 'utils/motion';
import Head from './Head';
import NewProducts from './newProducts';

const CollationSlug = () => {
  const pathName = usePathname();
  const [filteringCount, setFilteringCount] = React.useState<any>({
    count: 15,
    filterBy: 'Best selling',
  });
  const [mouseOver, setMouseOver] = React.useState<boolean>(false);

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
        className="relative mx-4 mt-[100px] flex flex-col items-center justify-center lg:mt-5"
      >
        <Head headName={products[0].category} tags={products[0].tags} />
        <div className="mt-[40px] mb-7 flex w-full flex-col items-start justify-center gap-4 xl:flex-row">
          <div className=" flex w-full flex-col items-center justify-between gap-6">
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
            <div className="flex w-full flex-row justify-start gap-5 overflow-x-scroll md:grid-cols-3 md:flex-wrap md:overflow-hidden  xl:grid xl:grid-cols-4">
              {products?.map(
                (
                  item: JSX.IntrinsicAttributes & {
                    id?: React.Key | undefined;
                    name?: any;
                    rating?: any;
                    tags?: string | undefined;
                    rate?: any;
                    offer?: any;
                    picture?: any;
                    bacPicture?: any;
                    mouseOver?: any;
                    setMouseOver?: any;
                    buttonStyle?: any;
                    classNameForPic?: any;
                    classNameForTotal?: any;
                  },
                ) => (
                  <OneProductWithOffer
                    mouseOver={mouseOver}
                    setMouseOver={setMouseOver}
                    key={item.id}
                    {...item}
                    buttonStyle="add"
                    classNameForTotal="xl:w-auto xl:h-auto w-[250px] h-[483px] mx-auto"
                    classNameForPic="p-4  "
                  />
                ),
              )}
            </div>
            <DealsOfTheDayInCollection />
          </div>

          <div className="hidden shrink-0 w-min flex-col gap-10 lg:flex">
            <CategorySmallBox />

            <FilterByC_T_R />

            <NewProducts />

            <div className="flex flex-col gap-1 rounded-xl  p-12 shadow-md bg-cyan-200 relative z-0 overflow-hidden">
              <small className='font-body text-gray-600'>Organic</small>
              <p className='font-head text-2xl leading-8'>Save 17% on <span className='text-emerald-500'>Organic</span> Juice</p>

              <img src="https://mailtrap.io/wp-content/uploads/2020/10/nbsp-and-HTML-Space-Challenges-and-Tricks_small-1.png" alt="" className='absolute h-full object-cover bottom-0 -right-[30%] -z-10'/>

            </div>

          </div>
        </div>
      </m.div>
    </AnimatePresence>
  );
};

export default CollationSlug;
