import { what_We_Provide } from '@/lib/data';
import { SquigglyLine } from '@/lib/icon';
import React from 'react';
import { AnimatePresence, m } from 'framer-motion';
import Image from 'next/image';

const WhatWeProvide = () => (
  <div className="mb-[50px] grid">
    <m.div
      initial="hide"
      animate="show"
      exit="hide"
      variants={{
        show: {
          y: '0%',
          opacity: 1,
        },
        hide: {
          y: '75%',
          opacity: 0,
        },
      }}
      transition={{
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.75,
      }}
      className="mb-[4.2rem] flex w-full flex-col items-center justify-center"
    >
      <h1 className="mb-2 font-head text-h2 text-gray-700">What we Provide?</h1>
      <SquigglyLine className="scale-[5] opacity-50" />
    </m.div>
    <div className="grid place-content-center gap-5 min-[668px]:grid-cols-2 min-[880px]:grid-cols-3">
      <AnimatePresence mode="wait">
        {what_We_Provide.map((item, idx) => (
          <m.div
            initial="hide"
            animate="show"
            exit="hide"
            variants={{
              show: {
                y: '0%',
                opacity: 1,
              },
              hide: {
                y: '55%',
                opacity: 0,
              },
            }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.85 * (idx / 2),
            }}
            key={item.id}
            className="flex flex-col items-center gap-6 rounded-2xl border border-gray-200 py-12 px-7 text-center duration-300 hover:shadow-lg"
          >
            {item.icon}

            <h3 className="font-head text-2xl text-gray-700">{item.title}</h3>
            <p className="mb-1 text-[17px] text-gray-500">{item.subtitle}</p>
            {/* <small className="text-base cursor-pointer text-emerald-500 ">Read more</small> */}
          </m.div>
        ))}
      </AnimatePresence>
    </div>
  </div>
);
export default WhatWeProvide;
