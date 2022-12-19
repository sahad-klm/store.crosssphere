import { contact } from '@/lib/data';
import { LocationIcon } from '@/lib/icon';
import React from 'react';

const OurOffice = () => {
  return (
    <div className="mt-[50px] grid  w-full md:grid-cols-3 sm:grid-cols-2  gap-10 place-items-center">
      {contact.map((item) => (
        <React.Fragment key={item.id}>
          {item.office?.map((office) => (
            <div className='flex flex-col'>
              <h2 className="mb-4 font-head text-2xl text-emerald-500">
                {office.title}
              </h2>
              <p className="text-sm text-gray-600">{office.address}</p>
              <p className="text-sm text-gray-600  ">
                <span className="border-b border-dotted border-t-gray-600">
                  Phone:
                </span>{' '}
                {office.phone}
              </p>
              <a
                href={`mailto:${office.email}?subject=Learn about MailTo tags in HTML`}
                className="text-sm text-gray-600"
              >
                <span className="border-b border-dotted border-t-gray-600">
                  Email:
                </span> {office.email}
              </a>
              <button className='inline-flex items-center justify-center outline-none border-none rounded-md w-max hover:-translate-y-1 hover:bg-yellow-500 duration-300 mt-5 bg-emerald-500 font-head text-xs text-white gap-1 py-2 px-[18px]'>
                <LocationIcon  className='w-4 fill-white'/>
                View Map
              </button>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OurOffice;
