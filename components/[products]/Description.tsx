import { ArrowNoLine } from '@/lib/icon';
import { m } from 'framer-motion';

import { Rating } from '@/ui/rating';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

const Description = ({ products }: any) => {
  const [isSelected, setIsSelected] = React.useState(products.details[0].part);
  const [isToggle, setIsToggle] = React.useState<boolean>(false);

  const reviews = products.details.filter(
    (item: { part: string }) => item.part === 'Reviews' && item,
  );

  return (
    <div className="relative flex w-full flex-col items-start overflow-hidden rounded-xl  border py-6 px-8 lg:gap-5 lg:py-10 lg:px-12">
      <span className="hidden h-10 w-full max-lg:flex">
        <ArrowNoLine
          onClick={() => setIsToggle(!isToggle)}
          className={`-m-3 fill-gray-500 ${
            !isToggle ? 'rotate-90' : '-rotate-90'
          } cursor-pointer duration-300`}
        />
      </span>
      {/* pc */}
      <div className="hidden w-full flex-row gap-5 lg:flex">
        {products.details.map((item: { id: React.Key; part: string }) => (
          <React.Fragment key={item.id}>
            <span
              onClick={() => setIsSelected(item.part)}
              className={`hidden items-center rounded-full border py-3 px-5 font-head text-base duration-300  hover:-translate-y-1  hover:text-[#0062b0] hover:shadow-md lg:flex ${
                isSelected === item.part ? 'text-[#0062b0]' : 'text-gray-700'
              }`}
            >
              {item.part}
            </span>
          </React.Fragment>
        ))}
      </div>
      {/* tablet */}
      <div
        className={`top-[80px] z-40 max-lg:absolute ${
          isToggle ? 'max-lg:flex max-md:hidden' : 'hidden'
        } flex-col overflow-hidden  rounded-xl bg-white p-4 shadow-2xl`}
      >
        {products.details.map((item: { id: React.Key; part: string }) => (
          <React.Fragment key={item.id}>
            <span
              onClick={() => {
                setIsSelected(item.part);
                setIsToggle(false);
              }}
              className="flex h-10 cursor-pointer items-center  px-4 text-base text-gray-800 "
            >
              {item.part}
            </span>
          </React.Fragment>
        ))}
      </div>
      {/* mobilePhone */}
      {isToggle && (
        <m.div
          initial="hide"
          animate="show"
          exit="hide"
          variants={{
            show: {
              y: '0%',
            },
            hide: {
              y: '-120%',
            },
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`bottom-0  left-0 z-[500] flex  h-screen w-full flex-col justify-end overflow-hidden shadow-2xl max-md:fixed`}
        >
          <span
            onClick={() => setIsToggle(false)}
            className="fixed inset-0 -z-10 flex bg-black bg-opacity-30"
          />
          <div className="z-50 flex min-h-[30vh] flex-col overflow-y-scroll bg-white">
            <div className="relative flex w-full flex-row justify-between border-b py-5">
              <p className="flex w-full cursor-pointer items-center justify-center text-base text-gray-700">
                Additional Info
              </p>
              <p className="flex w-full cursor-pointer items-center justify-center text-base text-gray-700">
                Reviews
              </p>
              <ArrowNoLine
                onClick={() => setIsToggle(false)}
                className="absolute right-4 -m-3 rotate-90 scale-75 fill-gray-600"
              />
            </div>

            {products.details.map((item: { id: React.Key; part: string }) => (
              <React.Fragment key={item.id}>
                <span
                  onClick={() => {
                    setIsSelected(item.part);
                    setIsToggle(false);
                  }}
                  className="flex h-14  cursor-pointer items-center  px-4 text-base text-gray-700 "
                >
                  {item.part}
                </span>
              </React.Fragment>
            ))}
          </div>
        </m.div>
      )}

      <div className="flex flex-col">
        {products.details.map(
          (item: { part: any; id: React.Key; items: any[] }) => (
            <React.Fragment key={item.id}>
              {item?.items?.map((text) => (
                <React.Fragment key={text.id}>
                  {isSelected === item.part && isSelected !== 'Reviews' && (
                    <div className="flex flex-col">
                      {text.title && (
                        <h1 className="my-4 font-head text-xl text-gray-800">
                          {text.title}
                        </h1>
                      )}
                      <p className="text-base text-gray-600">
                        {Array.from(text?.detail).map((desc) => (
                          <>{desc === '~' ? <br /> : desc}</>
                        ))}
                      </p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          ),
        )}
      </div>
      {/* {isSelected === 'Reviews' && (
        <div className="flex w-full flex-col gap-4">
          <>
            <h3 className="mb-3 font-head text-2xl text-gray-800">
              Add a review
            </h3>
            <Rating className="ml-0 mt-0 pb-0.5" classNameForStar="text-lg" />
            <p className="mb-0.5 text-base text-gray-800">
              Based on{' '}
              {reviews.map(
                (item: { items: string | any[] }) => item.items.length,
              )}{' '}
              review
            </p>
            <button name='button' className="group/btn z-[1]  flex h-12 w-max items-center justify-center gap-4 rounded-md  bg-emerald-500 px-9 font-body text-xs text-white transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-500 outline-none">
              Write a review
            </button>

            <div className="mt-6 flex w-full flex-col rounded-xl border p-5">
              {reviews.map(
                (item: { id: React.Key | null | undefined; items: any[] }) => (
                  <React.Fragment key={item.id}>
                    {item.items.map(
                      (review: {
                        id: React.Key | null | undefined;
                        rating: number | undefined;
                        name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                        date:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                        title:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                        text:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                      }) => (
                        <div key={review.id} className="">
                          <Rating
                            rating={review.rating}
                            className="ml-0 pb-[9px]"
                            classNameForStar="text-lg "
                          />
                          <p className="mb-[10px] font-body  text-gray-600">
                            <strong className="text-sm font-bold capitalize text-gray-800">
                              {review.name}
                            </strong>{' '}
                            on{' '}
                            <strong className="text-sm font-normal capitalize text-gray-700">
                              {review.date}
                            </strong>
                          </p>
                          <h3 className="font-body text-lg font-bold uppercase text-gray-800 ">
                            {review.title}
                          </h3>
                          <p className="my-6 text-sm text-gray-600">
                            {review.text}
                          </p>
                          <p className="cursor-pointer text-right text-base text-emerald-500">
                            Report as incorporate
                          </p>
                        </div>
                      ),
                    )}
                  </React.Fragment>
                ),
              )}
            </div>
          </>
        </div>
      )} */}
    </div>
  );
};

export default Description;
