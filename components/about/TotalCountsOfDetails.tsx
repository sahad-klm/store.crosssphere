import { ourThings } from '@/lib/data';
import { motion } from 'framer-motion';
import React from 'react';
import { fadeAnim } from '@/lib/motion';
import Image from 'next/image';

const TotalCountsOfDetails = () => {
  return (
    <motion.div
      initial="hide"
      animate="show"
      exit="hide"
      variants={fadeAnim}
      className="relative z-30 mt-5 hidden flex-col flex-wrap  justify-evenly gap-10 overflow-hidden rounded-2xl bg-[#4b675a] py-20 px-5 sm:flex-row min-[921px]:grid-flow-col min-[921px]:gap-5  min-[921px]:py-28 
      lg:flex "
    >
      {ourThings.map((item) => (
        <React.Fragment key={item.id}>
          {item.totalInAll?.map((total, idx) => (
            <React.Fragment key={total.id}>
              <Image
                width={1440}
                height={1000}
                src={total.bg!}
                alt="bg"
                loading="lazy"
                className="absolute top-0 left-0 -z-10 h-full w-full object-cover opacity-[.3]"
              />
              {total.title && (
                <motion.div
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
                    delay: 0.45 * (idx / 2),
                  }}
                  className="grid place-content-center place-items-center gap-2"
                >
                  <h1 className="font-head text-4xl text-white sm:text-5xl md:text-6xl  lg:text-7xl">
                    {total.count}+
                  </h1>
                  <h4 className="text-2xl text-white">{total.title}</h4>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default TotalCountsOfDetails;
