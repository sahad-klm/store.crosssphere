import { contact } from '@/lib/data';
import { LocationIcon } from '@/lib/icon';
import { motion } from 'framer-motion';
import React from 'react';
import { fadeAnim } from '@/lib/motion';

const OurOffice = () => {
  return (
    <div className="mt-[50px] grid  w-full place-items-center gap-10  sm:grid-cols-2 md:grid-cols-3">
      {contact.map((item) => (
        <React.Fragment key={item.id}>
          {item.office?.map((office) => (
            <motion.div
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={fadeAnim}
              className="flex flex-col"
              key={office.id}
            >
              <motion.h2
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
                  delay: 0.15,
                }}
                className="mb-4 font-head text-2xl text-emerald-500"
              >
                {office.title}
              </motion.h2>
              <motion.p
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
                  delay: 0.25,
                }}
                className="text-sm text-gray-600"
              >
                {office.address}
              </motion.p>
              <motion.p
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
                  delay: 0.35,
                }}
                className="text-sm text-gray-600  "
              >
                <span className="border-b border-dotted border-t-gray-600">
                  Phone:
                </span>{' '}
                {office.phone}
              </motion.p>
              <motion.a
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
                  delay: 0.45,
                }}
                href={`mailto:${office.email}?subject=Learn about MailTo tags in HTML`}
                className="text-sm text-gray-600"
              >
                <span className="border-b border-dotted border-t-gray-600">
                  Email:
                </span>{' '}
                {office.email}
              </motion.a>
              <motion.button
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
                className="mt-5 inline-flex w-max items-center justify-center gap-1 rounded-md border-none bg-emerald-500 py-2 px-[18px] font-head text-xs text-white outline-none duration-300 hover:-translate-y-1 hover:bg-yellow-500"
              >
                <LocationIcon className="w-4 fill-white" />
                View Map
              </motion.button>
            </motion.div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OurOffice;
