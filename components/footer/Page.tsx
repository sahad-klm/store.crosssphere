import FooterList from '@/ui/footerList';
import {
  footerAccount,
  footerAddress,
  footerApp_Payments,
  footerCompany,
  footerCoparent,
  footerInformation,
} from 'constants/data';
import { Icon } from 'constants/icon';
import React from 'react';
const Footer = () => {
  return (
    <footer className="mt-[50px] flex w-full flex-col items-center justify-center overflow-hidden  px-4">
      <ul className="grid lg:grid-cols-6 grid-cols-3 w-full lg:justify-items-center gap-x-5 gap-y-10">
        <li className="flex max-w-[300px] flex-col gap-[10px]">
          <Icon className="mb-4 h-16 w-full bg-slate-400" />
          <p className="mb-[10px] font-body text-gray-900">
            prevalent proposers alt holo sejm
          </p>
          {footerAddress?.map((item) => (
            <div className="inline-flex items-start">
              <h6 className="inline font-head text-base capitalize text-gray-700">
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
        <FooterList heading={'Company'} links={footerCompany} />
        <FooterList heading={'Account'} links={footerAccount} />
        <FooterList heading={'Cooperate'} links={footerCoparent} />
        <FooterList heading={'Information'} links={footerInformation} />
        <li className="flex max-w-[300px] flex-col gap-[10px]">
          <h2 className="font-head text-h4 text-gray-700">App & Payment</h2>

          {footerApp_Payments?.map((item) => (
            <div className="flex flex-col">
              <p className="font-body text-gray-900 mb-5">{item.title}</p>
              <div
                className={`flex ${
                  item.name === 'apps' ? 'flex-col' : 'flex-row'
                } gap-1`}
              >
                {item.items.map((link) => (
                  <a key={link.id} href={link.link}>
                    <img src={link.picture} alt={link.link} className={`${item.name === 'apps' ? "h-12 w-32": ''} object-cover`}/>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
