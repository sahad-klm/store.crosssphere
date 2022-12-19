import { motion } from 'framer-motion';
import React from 'react';

const ContactForm = () => {
  return (
    <div className="mt-24 flex w-full flex-row justify-between gap-12">
      <div className="grid flex-1 auto-rows-max ">
        <div className="flex flex-col">
          <motion.h3
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
            className="mb-[10px] font-head text-2xl text-emerald-500"
          >
            Contact form
          </motion.h3>
          <motion.h1
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
            className="mb-[10px] font-head text-[40px] leading-none text-gray-700"
          >
            Drop Us a Line
          </motion.h1>
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
            className="mb-[30px] text-sm text-gray-500"
          >
            Your email address will not be published. Required fields are marked
            *
          </motion.p>
        </div>
        <form action="" className="grid auto-rows-max gap-4 ">
          <motion.div
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
            className="grid gap-4 sm:grid-cols-2"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="h-16 rounded-lg border py-[10px] pl-[20px] pr-[10px] text-base text-gray-500 outline-none"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="h-16 rounded-lg border py-[10px] pl-[20px] pr-[10px] text-base text-gray-500 outline-none"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="h-16 rounded-lg border py-[10px] pl-[20px] pr-[10px] text-base text-gray-500 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="h-16 rounded-lg border py-[10px] pl-[20px] pr-[10px] text-base text-gray-500 outline-none"
            />
          </motion.div>
          <motion.textarea
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
            placeholder="Message"
            className="h-36 rounded-lg border py-[10px] pl-[20px] pr-[10px] text-base text-gray-500 outline-none"
          />
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
              delay: 0.65,
            }}
            className="w-max rounded-lg border-none bg-slate-500 h-16 px-16 font-head text-2xl text-white outline-none duration-300 hover:bg-emerald-500"
          >
            Send Message
          </motion.button>
        </form>
      </div>
      <motion.div
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
        className="hidden h-[50%] w-[30%] overflow-hidden rounded-xl lg:flex"
      >
        <img
          src="Untitled.webp"
          alt=""
          className="h-full w-full object-cover "
        />
      </motion.div>
    </div>
  );
};

export default ContactForm;
