import { ourThings } from '@/lib/data';
import React from 'react';
import { m } from 'framer-motion';

const OurThings = () => (
  <div className="mt-[31px] grid md:grid-cols-3 gap-5">
    {ourThings.map((item, idx) => (
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
            y: '55%',
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.45 * idx,
        }}
        key={item.id}
        className="grid gap-[26px]"
      >
        <h1 className="font-head text-h3 text-gray-800">{item.title}</h1>
        <p className="text-base text-gray-500">{item.subtitle}</p>
      </m.div>
    ))}
  </div>
);

export default OurThings;
