import {
  DailyBestSeller,
  DealsOfTheDay,
  FeathersCategory,
  FooterProducts,
  Header,
  HomeComponent,
  PopularProducts,
  Feathers,
  Footer,
} from 'components';
import { footerSocialMedia } from 'constants/data';

import { CallIcon } from 'constants/icon';

export default function Home(): any {


  return (
    <main className="mx-auto grid w-full max-w-[1440px]">
      <Header />
      <HomeComponent />
      <FeathersCategory />
      <PopularProducts />
      <DailyBestSeller />
      <DealsOfTheDay />
      <FooterProducts />
      <Feathers />
      <Footer />

      <div className="mt-[50px] flex flex-col items-center justify-center gap-3 border-t border-emerald-300 px-4 py-4 sm:gap-4 md:flex-row md:justify-between md:gap-5 md:py-6  ">
        <p className="cursor-default select-none text-center font-body text-xs text-gray-500 sm:text-sm md:text-left md:text-base">
          © 2022, <span className="text-emerald-500">Nest</span>- Copied from
          Boostify themes <br />
          No rights reserved
        </p>
        <div className="flex flex-col gap-1 sm:gap-3 lg:flex-row lg:gap-5 xl:gap-10">
          <div className="flex items-center gap-2 lg:gap-3">
            <CallIcon className=" h-7 w-7 fill-gray-400 sm:h-9 sm:w-9 lg:h-10 lg:w-10" />
            <div>
              <h1 className="font-head text-base  leading-3 text-emerald-500 sm:text-h5  md:text-[26px] lg:leading-10">
                1900 - 6666 -
              </h1>
              <p className="font-body text-[8px]  tracking-widest text-gray-500 sm:text-[10px] lg:text-xs">
                Working 8: 00 - 2: 00
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-2 md:items-center lg:gap-3">
            <CallIcon className=" h-7 w-7 fill-gray-400 sm:h-9 sm:w-9 lg:h-10 lg:w-10" />
            <div>
              <h1 className="font-head text-base leading-3  text-emerald-500 sm:text-h5  lg:text-[26px] lg:leading-10">
                1900 - 6666
              </h1>
              <p className="font-body text-[8px]  tracking-widest text-gray-500 sm:text-[10px] lg:text-xs">
                Working 8: 00 - 2: 00
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="inline-flex w-full flex-row items-end justify-center gap-2 md:flex-col lg:flex-row lg:gap-4">
            <h3 className="font-head text-xs text-gray-700 sm:text-sm md:text-base">
              Follows us
            </h3>
            <div className="flex gap-1 sm:gap-2">
              {footerSocialMedia?.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="grid h-5 w-5 shrink-0 place-content-center rounded-full bg-emerald-500 duration-300 hover:bg-lime-400 sm:h-7 sm:w-7"
                >
                  <i
                    className={`${item.icon} text-xs text-white sm:text-base`}
                    title={item.name}
                  />
                </a>
              ))}
            </div>
          </div>
          <p className="mt-[1px] text-center font-body text-[10px] text-gray-500 sm:text-xs md:text-right md:text-sm">
            Upto 15% discount on your first subscribe
          </p>
        </div>
      </div>
    </main>
  );
}
