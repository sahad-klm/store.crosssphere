'use client';
import FooterList from '@/ui/footerList';
import {
  footerAccount,
  footerAddress,
  footerApp_Payments,
  footerCompany,
  footerCoparent,
  footerInformation,
} from '@/lib/data';
import { Icon } from '@/lib/icon';
import React from 'react';
import Image from 'next/image';
const Footer = () => {
  const [footerToggle, setFooterToggle] = React.useState<string | any>('');

  const handleToggle = (prop: any) => {
    if (prop !== undefined) {
      if (footerToggle === prop) {
        setFooterToggle('');
      } else setFooterToggle(prop);
    }
  };

  return (
    <footer className="mt-[80px] flex w-full flex-col items-center justify-center overflow-hidden px-4">
      <ul className="grid w-full grid-flow-row gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-6 lg:justify-items-center ">
        <li className="hidden flex-col gap-[4px] md:flex font ">
        <Image 
          width={176} 
          height={100} 
          loading='lazy' 
          alt=''
          src="/logo.png"
          className="h-180 w-66 shrink-0  object-cover"
        />
          <p className="mb-[10px] font-body text-sm text-gray-900 md:text-base">
            Export and Import
          </p>
          {footerAddress?.map((item) => (
            <div key={item.id} className="inline-flex items-start">
              <h6 className="inline font-head text-sm capitalize text-gray-700 md:text-base">
                <i
                  className={`${item.icon} mr-2 inline w-9 text-base font-bold text-emerald-500`}
                />
                {item.title}:{' '}
                <span className="font-body text-base text-gray-500">
                  {item.subtitle}
                </span>
              </h6>
            </div>
          ))}
        </li>
        <FooterList
          heading={'Company'}
          links={footerCompany}
          onClick={handleToggle}
          footerToggle={footerToggle}
          className="border-t md:border-none"
        />
        <FooterList
          heading={'Account'}
          links={footerAccount}
          onClick={handleToggle}
          footerToggle={footerToggle}
          className="border-t md:border-none"
        />
        <FooterList
          heading={'Cooperate'}
          links={footerCoparent}
          onClick={handleToggle}
          footerToggle={footerToggle}
          className="border-t md:border-none"
        />
        <FooterList
          heading={'Information'}
          links={footerInformation}
          onClick={handleToggle}
          footerToggle={footerToggle}
          className="border-t md:border-none"
        />
        <li className="flex flex-col gap-[30px] border-t md:max-w-[300px] md:border-none">
          <h2
            className="flex  w-full justify-between font-head text-[22px] text-gray-700 max-md:cursor-pointer md:text-h4"
            onClick={() => handleToggle('App & Payment')}
          >
            App & Payment
            <i
              className={`fa-solid fa-chevron-${
                footerToggle === 'App & Payment' ? 'up' : 'down'
              } block text-gray-500 duration-500 md:hidden`}
            />
          </h2>
          <div
            className={`${
              footerToggle === 'App & Payment' ? 'grid' : 'hidden'
            } md:grid`}
          >
            {footerApp_Payments?.map((item) => (
              <div key={item.id} className="flex flex-col">
                <p className="mb-5 font-body text-sm text-gray-900 md:text-base">
                  {item.title}
                </p>
                <div
                  className={`flex ${
                    item.name === 'apps' ? 'flex-row md:flex-col' : 'flex-row'
                  } gap-1`}
                >
                  {item.items.map((link) => (
                    <a aria-label="Read more" key={link.id} href={link.link}>
                      <Image
                        width={128}
                        height={48}
                        loading="lazy"
                        src={link.picture}
                        alt={`${link.link}`}
                        className={`${
                          item.name === 'apps' ? 'h-12 w-32' : ''
                        } object-cover`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
