import { ourPerformance } from '@/lib/data';
import React from 'react';
import { m } from 'framer-motion';

const OurPerformance = () => (
  <div className="mt-[50px] grid max-md:grid-rows-2 md:grid-cols-2 gap-5">
    {ourPerformance.map((item) => (
      <React.Fragment key={item.id}>
        <div className="flex h-full items-center justify-center gap-5">
          <m.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={{
              show: {
                y: '0%',
                opacity: 1,
              },
              hide: {
                y: '15%',
                opacity: 0,
              },
            }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
            className="flex h-[80%] w-[40%] items-center justify-center overflow-hidden rounded-2xl"
          >
            <img
              src={item.smallPicture}
              alt="pic"
              className="h-full w-full object-cover"
            />
          </m.div>
          <m.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={{
              show: {
                y: '0%',
                opacity: 1,
              },
              hide: {
                y: '15%',
                opacity: 0,
              },
            }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.35,
            }}
            className="flex h-[100%] w-[50%] items-center justify-center overflow-hidden rounded-2xl"
          >
            <img
              src={item.bigPicture}
              alt="pic"
              className="h-full w-full object-cover"
            />
          </m.div>
        </div>
        <div>
          <m.h3
            initial="hide"
            whileInView="show"
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
              delay: 0.55,
            }}
            className="mt-4 mb-5 font-head text-2xl text-gray-500"
          >
            {item.head}
          </m.h3>
          <m.h1
            initial="hide"
            whileInView="show"
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
              delay: 0.65,
            }}
            className="mt-3 mb-7 font-head text-h2 leading-[1.3] text-gray-700"
          >
            {item.title}
          </m.h1>
          {item.subtitle.map((text, idx) => (
            <React.Fragment key={text.id}>
              <m.p
                initial="hide"
                whileInView="show"
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
                  delay: 0.75 * (idx / 2),
                }}
                className="mb-2 text-base text-gray-500"
              >
                {text.text}
              </m.p>
              {idx <= item.subtitle.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    ))}
  </div>
);

export default OurPerformance;
