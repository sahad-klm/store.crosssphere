import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [formValue, setFormValue] = useState(initialState);

  const handleSubmit = (element: React.FormEvent) => {
    element.preventDefault();
    const valueIsMoreThanZero =
      formValue.email.length > 0 &&
      formValue.email.length &&
      formValue.message.length &&
      formValue.name.length &&
      formValue.phone.length &&
      formValue.subject.length;

    if (valueIsMoreThanZero) {
      emailjs
        .send(
          'service_8iz45q8',
          'template_kebta6g',
          formValue,
          '1Iz_fZjNb2r4dgs7d',
        )
        .then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text);
            setFormValue(initialState);
          },
          function (error) {
            console.log('FAILED...', error);
          },
        );
    }
  };
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
            className="mb-[10px] font-head text-2xl text-[#0062b0]"
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
        <form
          onSubmit={handleSubmit}
          action=""
          className="grid auto-rows-max gap-4 "
        >
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
              onChange={(e) =>
                setFormValue({ ...formValue, name: e.target.value })
              }
              value={formValue.name}
              type="text"
              placeholder="Your Name"
              className="h-16 rounded-lg border py-[10px] pl-[20px] pr-[10px] text-base text-gray-500 outline-none"
            />
            <input
              onChange={(e) =>
                setFormValue({ ...formValue, email: e.target.value })
              }
              value={formValue.email}
              type="text"
              placeholder="Your Email"
              className="h-16 rounded-lg border py-[10px] pl-[20px] pr-[10px] text-base text-gray-500 outline-none"
            />
            <input
              onChange={(e) =>
                setFormValue({ ...formValue, phone: e.target.value })
              }
              value={formValue.phone}
              type="text"
              placeholder="Your Phone"
              className="h-16 rounded-lg border py-[10px] pl-[20px] pr-[10px] text-base text-gray-500 outline-none"
            />
            <input
              onChange={(e) =>
                setFormValue({ ...formValue, subject: e.target.value })
              }
              value={formValue.subject}
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
            onChange={(e) =>
              setFormValue({ ...formValue, message: e.target.value })
            }
            value={formValue.message}
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
            onClick={handleSubmit}
            className="h-16 w-max rounded-lg border-none bg-slate-500 px-16 font-head text-2xl text-white outline-none duration-300 hover:bg-[#1E2328]"
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
        <Image
          width={700}
          height={500}
          loading="lazy"
          src="/contact.png"
          alt=""
          className="h-full w-full object-cover "
        />
      </motion.div>
    </div>
  );
};

export default ContactForm;
