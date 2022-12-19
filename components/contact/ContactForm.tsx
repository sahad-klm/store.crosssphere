import React from 'react';

const ContactForm = () => {
  return (
    <div className="mt-24 flex w-full flex-row justify-between gap-12">
      <div className="grid flex-1 auto-rows-max ">
        <div className="flex flex-col">
          <h3 className="mb-[10px] font-head text-2xl text-emerald-500">
            Contact form
          </h3>
          <h1 className="mb-[10px] font-head text-[40px] leading-none text-gray-700">
            Drop Us a Line
          </h1>
          <p className="mb-[30px] text-sm text-gray-500">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <form action="" className="grid auto-rows-max gap-4 ">
          <div className="grid gap-4 sm:grid-cols-2">
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
          </div>
          <textarea
            placeholder="Message"
            className="h-36 rounded-lg border py-[10px] pl-[20px] pr-[10px] text-base text-gray-500 outline-none"
          />
          <button className="w-max rounded-lg border-none bg-slate-500 py-8 px-16 font-head text-2xl text-white outline-none duration-300 hover:bg-emerald-500">
            Send Message
          </button>
        </form>
      </div>
      <div className="hidden h-[50%] w-[30%] overflow-hidden rounded-xl lg:flex">
        <img
          src="Untitled.webp"
          alt=""
          className="h-full w-full object-cover "
        />
      </div>
    </div>
  );
};

export default ContactForm;
