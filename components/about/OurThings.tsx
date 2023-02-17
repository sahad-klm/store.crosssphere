import { ourThings } from '@/lib/data';
import React from 'react';
import { m } from 'framer-motion';

const OurThings = () => (
  <div className="mt-[31px] grid gap-5 md:grid-cols-3">
    {ourThings.map((item, idx) => (
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
            y: '55%',
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.45 * idx,
        }}
        key={item.id}
        className="grid gap-[18px]"
      >
        <h1 className="font-head text-h3 text-gray-800">{item.title}</h1>
        <p className="text-base text-gray-500">{item.subtitle}</p>
      </m.div>
    ))}
  </div>
);

export default OurThings;
