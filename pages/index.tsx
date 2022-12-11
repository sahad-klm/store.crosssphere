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

import {CallIcon} from "constants/icon";


export default function Home(): any {
  return (
    <main className='w-full max-w-[1440px] grid mx-auto'>
      <Header />
      <HomeComponent />
      <FeathersCategory />
      <PopularProducts />
      <DailyBestSeller />
      <DealsOfTheDay />
      <FooterProducts />
      <Feathers />
      <Footer />

      <div className="mt-[50px] flex md:flex-row flex-col items-center md:justify-between justify-center md:gap-5 sm:gap-4 gap-3 border-t border-emerald-300 px-4 md:py-6 py-4  ">
        <p className="font-body md:text-base sm:text-sm text-xs text-gray-500 cursor-default select-none md:text-left text-center">
          © 2022, <span className="text-emerald-500">Nest</span>- Copied from
          Boostify themes <br/>
          No rights reserved
        </p>
        <div className="flex lg:flex-row xl:gap-10 lg:gap-5 sm:gap-3 gap-1 flex-col">
          <div className="flex items-center lg:gap-3 gap-2">
          <CallIcon className=' fill-gray-400 lg:w-10 sm:w-9 lg:h-10 sm:h-9 h-7 w-7' />
            <div>
              <h1 className="font-head md:text-[26px]  text-emerald-500 sm:text-h5 text-base  lg:leading-10 leading-3">
                1900 - 6666 - 
              </h1>
              <p className="font-body lg:text-xs  sm:text-[10px] text-[8px] tracking-widest text-gray-500">
                Working 8: 00 - 2: 00
              </p>
            </div>
          </div>
          <div className="flex md:items-center items-start lg:gap-3 gap-2 justify-center">
            <CallIcon className=' fill-gray-400 lg:w-10 sm:w-9 lg:h-10 sm:h-9 h-7 w-7' />
            <div>
              <h1 className="font-head lg:text-[26px] text-emerald-500  sm:text-h5 text-base  lg:leading-10 leading-3">
                1900 - 6666
              </h1>
              <p className="font-body lg:text-xs  sm:text-[10px] text-[8px] tracking-widest text-gray-500">
                Working 8: 00 - 2: 00
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="inline-flex w-full items-end justify-center lg:gap-4 gap-2 lg:flex-row md:flex-col flex-row">
            <h3 className="font-head md:text-base sm:text-sm text-xs text-gray-700">Follows us</h3>
            <div className='flex sm:gap-2 gap-1'>
            {footerSocialMedia?.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="grid sm:h-7 sm:w-7 h-5 w-5 shrink-0 place-content-center rounded-full bg-emerald-500 duration-300 hover:bg-lime-400"
                >
                <i className={`${item.icon} text-white sm:text-base text-xs`} title={item.name} />
              </a>
            ))}
            </div>
          </div>
          <p className="mt-[1px] md:text-right text-center font-body md:text-sm sm:text-xs text-[10px] text-gray-500">
            Upto 15% discount on your first subscribe
          </p>
        </div>
      </div>
    </main>
  );
}
