import { contact } from '@/lib/data';
import { motion } from 'framer-motion';
import React from 'react';

const HelpYou = () => {
  return (
    <div className="my-[50px] mb-[30px] flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:gap-10">
      <div className="flex flex-col md:w-[90%] lg:w-[80%]">
        {contact.map((item) => (
          <React.Fragment key={item.id}>
            {item.title && (
              <>
                <motion.small
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
                  className="mb-2 font-head text-2xl text-emerald-500"
                >
                  {item.subtitle}
                </motion.small>
                <motion.h1
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
                    delay: 0.35,
                  }}
                  className="mb-[15px] font-head text-4xl text-gray-700"
                >
                  {item.title}
                </motion.h1>
                {item.text?.map((text, tex) => (
                  <React.Fragment key={text.id}>
                    <motion.p
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
                        delay: 0.45 * tex + 1,
                      }}
                      className="text-base text-gray-600"
                    >
                      {text.text}
                    </motion.p>
                    {tex <= item.text.length - 2 && <br />}
                  </React.Fragment>
                ))}
              </>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
        {contact.map((item) => (
          <React.Fragment key={item.id}>
            {item.feature?.map((feature, idx) => (
              <div key={feature.id}>
                <motion.h2
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
                    delay: 0.25 * idx + 1,
                  }}
                  className={`mb-2 font-head text-2xl md:mb-5  ${
                    feature.order === '03'
                      ? 'text-emerald-500'
                      : 'text-gray-600'
                  }`}
                >
                  {feature.order}. {feature.title}
                </motion.h2>
                <motion.p
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
                    delay: 0.35 * idx + 1,
                  }}
                  className="text-base text-gray-600"
                >
                  {feature.text}
                </motion.p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HelpYou;
