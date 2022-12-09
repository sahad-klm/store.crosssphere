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
  const [footerToggle, setFooterToggle] = React.useState<string | undefined>(
    '',
  );

  const handleToggle = (prop : any) => {
    if (prop !== undefined) {
      if (footerToggle === prop) {
        setFooterToggle('');
      } else setFooterToggle(prop)
    }
  };

  return (
    <footer className="mt-[50px] flex w-full flex-col items-center justify-center overflow-hidden  px-4">
      <ul className="grid w-full grid-flow-row gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-6 lg:justify-items-center">
        <li className="md:flex max-w-[300px] flex-col gap-[10px] hidden">
          <Icon className="mb-4 h-16 w-full bg-slate-400" />
          <p className="mb-[10px] font-body md:text-base text-sm text-gray-900">
            prevalent proposers alt holo sejm
          </p>
          {footerAddress?.map((item) => (
            <div className="inline-flex items-start">
              <h6 className="inline font-head md:text-base text-sm capitalize text-gray-700">
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
          className='md:border-none border-t'
        />
        <FooterList
          heading={'Account'}
          links={footerAccount}
          onClick={handleToggle}
          footerToggle={footerToggle}
          className='md:border-none border-t'
        />
        <FooterList
          heading={'Cooperate'}
          links={footerCoparent}
          onClick={handleToggle}
          footerToggle={footerToggle} className='md:border-none border-t'
        />
        <FooterList
          heading={'Information'}
          links={footerInformation}
          onClick={handleToggle}
          footerToggle={footerToggle}
          className='md:border-none border-t'
        />
        <li className='flex md:max-w-[300px] flex-col gap-[10px] md:border-none border-t'>
          <h2 className="font-head  md:text-h4 text-[22px] text-gray-700 max-md:cursor-pointer w-full flex justify-between"
          onClick={() => handleToggle('App & Payment')}
          >App & Payment
          <i className={`fa-solid fa-chevron-${footerToggle === 'App & Payment' ? 'up': 'down'} text-gray-500 duration-500 md:hidden block`} />
          </h2>
          <div className={`${footerToggle === 'App & Payment' ? "grid" :'hidden'} md:grid`}>

          {footerApp_Payments?.map((item) => (
            <div className="flex flex-col">
              <p className="mb-5 font-body md:text-base text-sm text-gray-900">{item.title}</p>
              <div
                className={`flex ${
                  item.name === 'apps' ? 'md:flex-col flex-row' : 'flex-row'
                } gap-1`}
                >
                {item.items.map((link) => (
                  <a key={link.id} href={link.link}>
                    <img
                      src={link.picture}
                      alt={link.link}
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
