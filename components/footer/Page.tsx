'use client';
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
    <footer className="mt-[80px] flex w-full flex-col items-center justify-center overflow-hidden">
      <ul className="flex w-full flex-col items-center justify-between gap-4 bg-emerald-500 px-2 py-8 md:flex-row">
        <li className="flex-col gap-[4px]">
          <Image
            width={100}
            height={100}
            loading="lazy"
            alt=""
            src="/namewhite.webp"
            className="h-[39px] w-full shrink-0 object-cover  "
          />
        </li>

        {/* new */}
        <div className="flex flex-wrap items-center  justify-center gap-4 sm:items-start">
          <li className="inline-flex items-center justify-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-2 sm:h-10 sm:w-10 sm:p-1">
              <svg
                fill="#000000"
                width="24px"
                height="24px"
                viewBox="0 0 256 256"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z" />
              </svg>
            </span>
            <p className="text-xs text-white sm:text-sm">
              WHATSAPP <br />
              +918075122414
            </p>
          </li>
          <li className="inline-flex items-center justify-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-2 sm:h-10 sm:w-10 sm:p-1">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    d="M18.7881 14.7644C17.4497 13.4433 15.9296 15.1939 14.9258 16.1847C11.8965 16.7827 6.44379 11.4006 7.6555 9.00853C8.65932 8.01771 10.4328 6.51729 9.09441 5.1962C7.75599 3.87511 5.85724 3.60737 4.85342 4.59819C4.02037 5.42046 3.41451 7.21449 4.92915 11.1016C6.44379 14.9887 8.86722 17.3807 13.0072 19.0751C17.1473 20.7694 18.5609 19.7728 19.394 18.9505C20.3978 17.9597 20.1265 16.0855 18.7881 14.7644Z"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{' '}
                </g>
              </svg>
            </span>
            <p className="text-xs text-white sm:text-sm">
              TELEPHONE <br />
              +917034405123
            </p>
          </li>
          <li className="inline-flex items-center justify-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-2 sm:h-10 sm:w-10 sm:p-1">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24.00 24.00"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                opacity=".7"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="1.6320000000000001"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <title>/svg/ic-mail</title> <desc>Created with Sketch.</desc>{' '}
                  <defs> </defs>{' '}
                  <g
                    id="Page-1"
                    stroke-width="0.00024000000000000003"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {' '}
                    <g id="ic-mail" fill-rule="nonzero" fill="#000000">
                      {' '}
                      <path
                        d="M21,7.41988177 L21,7.00247329 C21,6.45576096 20.5552407,6 20.0066023,6 L3.99339768,6 C3.44494629,6 3,6.44882258 3,7.00247329 L3,7.39176926 L11.4736665,10.8032231 C11.751932,10.9152513 12.3170143,10.9156063 12.5961616,10.8032231 L21,7.41988177 Z M21,9.57588042 L13.3430911,12.6585118 C12.5842636,12.9640118 11.4838475,12.9633206 10.7267369,12.6585118 L3,9.54776791 L3,16.9975267 C3,17.544239 3.44475929,18 3.99339768,18 L20.0066023,18 C20.5550537,18 21,17.5511774 21,16.9975267 L21,9.57588042 Z M1,7.00247329 C1,5.34831175 2.33627892,4 3.99339768,4 L20.0066023,4 C21.6637011,4 23,5.35495419 23,7.00247329 L23,16.9975267 C23,18.6516882 21.6637211,20 20.0066023,20 L3.99339768,20 C2.3362989,20 1,18.6450458 1,16.9975267 L1,7.00247329 Z"
                        id="Rectangle-23"
                      >
                        {' '}
                      </path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>
            </span>
            <p className="text-xs text-white sm:text-sm">
              EMAIL <br />
              info.aldaninternational@gmail.com
            </p>
          </li>
        </div>
      </ul>
    </footer>
  );
};
export default Footer;
