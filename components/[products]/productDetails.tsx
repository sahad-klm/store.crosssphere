import { isBrowser } from '@/lib/helpers';
import CategorySmallBox from '@/ui/categorySmallBox';
import Error from 'next/error';
import React from 'react';
import HeadRootNames from './HeadRootNames';
import NewProducts from '../../ui/newProducts';
import OfferBoxInCollection from '@/ui/OfferBoxInCollection';
import ProductEachDetail from './ProductEachDetail';
import { popularProducts } from '@/lib/data';
import { OneProductWithOffer } from '@/ui/OneProductWithOffer';
import Description from './Description';

const ProductDetails = (data: any) => {
  const { product } = data;
  const [mouseOver, setMouseOver] = React.useState(false);
  const [isScroll, setIsScroll] = React.useState<number | any>();
  const [isY, setIsY] = React.useState<number | any>();
  const myTopPosition = React.useRef<any>();

  console.log(data);
  const setY = () => {
    const y = myTopPosition?.current?.offsetTop;
    return setIsScroll(window.pageYOffset), setIsY(y);
  };

  console.log(isY);

  React.useEffect(() => {
    if (isBrowser) {
      window.addEventListener('scroll', () => {
        setY();
      });
      setY();

      return () => window.removeEventListener('scroll', () => setY());
    }
  }, []);
  // console.log(isScroll);

  React.useEffect(() => {}, []);

  if (product.length === 0)
    return (
      <Error
        statusCode="seem ann bro"
        title={`sathanam missing ann pinnea va `}
      />
    );

  return (
    <div className="relative flex flex-col items-center justify-center max-lg:mt-[100px] w-full overflow-hidden ">
      <HeadRootNames product={product} />

      <div className="mt-5 flex w-full flex-col px-4 xl:flex-row ">
        {/* products detail */}
        <div className="flex  flex-col ">
          <div className="max-lg:grid-row-2 mb-8 grid  w-full max-lg:gap-4 lg:grid-cols-2">
            <div className="grid lg:grid-rows-2 ">
              <div className="flex items-center justify-center bg-gray-100">
                <img
                  src={product[0].picture}
                  alt=""
                  className="object-contain lg:w-[96%]"
                />
              </div>
            </div>
            <ProductEachDetail {...product} />
          </div>
          <div className="mb-8 pr-4">
            <Description products={product[0]} />
          </div>
          <div className="flex flex-col gap-4 rounded-xl  pr-4 pb-8 pt-3">
            <h2 className="before:content- relative mb-4 w-full shrink-0 border-b pb-4 font-head text-[24px] text-gray-800 before:absolute before:-bottom-[1px] before:h-[2px] before:w-14 before:bg-gray-300 md:pb-5 md:text-h4">
              Related products
            </h2>
            <div className="flex  w-full flex-row gap-5 overflow-x-scroll">
              {popularProducts?.map(
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
                    classNameForTotal="xl:w-auto xl:max-w-[220px] xl:h-auto w-[250px] h-[443px] mx-auto"
                    classNameForPic="p-4  "
                  />
                ),
              )}
            </div>
          </div>
        </div>

        {/* sidebar */}
        <div
          className="relative hidden gap-5 lg:flex xl:w-[350px] shrink-0 "
        >
          <div
            className={`  ${
              isScroll <= 220
                ? 'absolute'
                : `${
                    isScroll >= isY - 700 ? 'absolute bottom-0' : 'fixed top-20 '
                  } `
            } flex flex-col gap-5 transition-transform duration-1000 ease-linear max-xl:relative`}
          >
            <CategorySmallBox />
            <NewProducts limit="0" />
            <OfferBoxInCollection className="h-max" />
          </div>
          <span ref={myTopPosition} className="absolute bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
