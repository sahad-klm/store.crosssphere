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
    <main>
      <Header />
      <HomeComponent />
      <FeathersCategory />
      <PopularProducts />
      <DailyBestSeller />
      <DealsOfTheDay />
      <FooterProducts />
      <Feathers />
      <Footer />

      <div className="mt-[50px] flex md:flex-row flex-col items-center md:justify-between justify-center gap-5 border-t px-4 py-6 ">
        <p className="font-body text-gray-500 cursor-default select-none md:text-left text-center">
          © 2022, <span className="text-emerald-500">Nest</span>- Copied from
          Boostify themes <br/>
          No rights reserved
        </p>
        <div className="flex lg:flex-row xl:gap-10 lg:gap-5 gap-3 flex-col">
          <div className="flex items-center lg:gap-3 gap-2">
          <CallIcon className=' fill-gray-400 lg:w-10 w-9 lg:h-10 h-9' />
            <div>
              <h1 className="font-head lg:text-[26px] text-emerald-500 text-h5  lg:leading-10 leading-3">
                1900 - 6666 - 
              </h1>
              <p className="font-body lg:text-xs  text-[10px] tracking-widest text-gray-500">
                Working 8: 00 - 2: 00
              </p>
            </div>
          </div>
          <div className="flex items-center lg:gap-3 gap-2 justify-center">
            <CallIcon className=' fill-gray-400 lg:w-10 w-9 lg:h-10 h-9' />
            <div>
              <h1 className="font-head lg:text-[26px] text-emerald-500 text-h5  lg:leading-10 leading-3">
                1900 - 6666
              </h1>
              <p className="font-body lg:text-xs  text-[10px] tracking-widest text-gray-500">
                Working 8: 00 - 2: 00
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="inline-flex w-full items-end justify-between lg:gap-4 gap-2 lg:flex-row md:flex-col flex-row">
            <h3 className="font-head text-gray-700">Follows us</h3>
            <div className='flex gap-2'>
            {footerSocialMedia?.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="grid h-7 w-7 shrink-0 place-content-center rounded-full bg-emerald-500 duration-300 hover:bg-lime-400"
                >
                <i className={`${item.icon} text-white`} title={item.name} />
              </a>
            ))}
            </div>
          </div>
          <p className="mt-[1px] text-right font-body text-sm text-gray-500">
            Upto 15% discount on your first subscribe
          </p>
        </div>
      </div>
    </main>
  );
}
