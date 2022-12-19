import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { fadeAnim } from 'utils/motion';

const LocationMap = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hide"
        animate="show"
        exit="hide"
        variants={{
          show: {
            opacity: 1,
          },
          hide: {
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.6,
          ease: 'easeIn',
          delay: 0.4,
          when: 'beforeChildren',
        }}
        className="mt-[30px] flex  h-[35rem] w-full rounded-2xl bg-slate-400 md:mt-[50px] md:w-96"
      ></motion.div>
    </AnimatePresence>
  );
};

export default LocationMap;
