import { ourPerformance } from '@/lib/data';
import React from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';

const OurPerformance = () => (
  <div className="mt-[-2rem] grid gap-5 max-md:grid-rows-2 md:grid-cols-2 lg:mt-[30px]">
    {ourPerformance.map((item) => (
      <React.Fragment key={item.id}>
        <div className="flex h-full items-center justify-center gap-3">
          <m.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
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
            className="flex h-[11rem] w-[8rem] items-center justify-center overflow-hidden rounded-2xl lg:h-[16rem] lg:w-[12rem]"
          >
            <Image
              width={1000}
              height={1000}
              src={`/${item.smallPicture}`}
              alt="pic"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </m.div>
          <m.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
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
            className="flex h-[15rem] w-[11rem] items-center justify-center overflow-hidden rounded-2xl lg:h-[20rem] lg:w-[16rem]"
          >
            <Image
              width={1000}
              height={1000}
              src={`/${item.bigPicture}`}
              alt="pic"
              loading="lazy"
              className="h-full w-full object-cover "
            />
          </m.div>
        </div>
        <div>
          <m.h3
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
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
            className="mt-[-2rem] mb-3 font-head text-2xl text-gray-500 lg:mt-4"
          >
            {item.head}
          </m.h3>
          <m.h1
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
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
            className="mt-3 mb-5 font-head text-h2 leading-[1.3] text-gray-700"
          >
            {item.title}
          </m.h1>
          {item.subtitle.map((text, idx) => (
            <React.Fragment key={text.id}>
              <m.p
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
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
