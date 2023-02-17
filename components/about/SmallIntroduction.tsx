import { aboutCompany } from '@/lib/data';
import { m } from 'framer-motion';

import React from 'react';
import Image from 'next/image';
const SmallIntroduction = () => (
  <div className="mt-[50px] mb-[30px] grid grid-cols-1 gap-10 px-4 md:grid-cols-2">
    {aboutCompany.map((item) => (
      <React.Fragment key={item.id}>
        <div className="flex h-full items-center justify-center">
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
              delay: 0.25,
            }}
            className=" max-h-[60vh] overflow-hidden rounded-2xl"
          >
            <Image
              width={1920}
              height={1080}
              src={`/${item.picture}`}
              loading="lazy"
              alt=""
              layout="responsive"
              className="h-full w-auto object-contain"
            />
          </m.div>
        </div>
        <div className="flex flex-col">
          <m.h1
            initial="hide"
            animate="show"
            exit="hide"
            variants={{
              show: {
                y: '0%',
                opacity: 1,
              },
              hide: {
                y: '35%',
                opacity: 0,
              },
            }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.35,
            }}
            className="mb-3 font-head text-h2 text-gray-700"
          >
            {item.title}
          </m.h1>
          {item.subtitle.map((text, idx) => (
            <React.Fragment key={text.id}>
              <m.p
                initial="hide"
                animate="show"
                exit="hide"
                variants={{
                  show: {
                    y: '0%',
                    opacity: 1,
                  },
                  hide: {
                    y: '35%',
                    opacity: 0,
                  },
                }}
                transition={{
                  duration: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.45 * idx,
                }}
                className="text-base text-gray-500"
              >
                {text.paragraph}
              </m.p>
              {text.id <= item.subtitle.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    ))}
  </div>
);

export default SmallIntroduction;
