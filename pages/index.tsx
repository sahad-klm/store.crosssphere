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
import { Icon } from 'constants/icon';

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

      <div className="mt-[50px] flex flex-row items-center justify-between border-t px-4 py-6">
        <p className="font-body text-gray-500">
          © 2022, <span className="text-emerald-500">Nest</span>- Copied from
          Boostify themes <br />
          No rights reserved
        </p>
        <div className="flex flex-row gap-10">
          <div className="flex items-center gap-5">
            <i className="lni lni-phone text-h1 text-gray-500" />
            <div>
              <h1 className="font-head text-[26px] text-emerald-500">
                1900 - 6666
              </h1>
              <p className="font-body text-xs tracking-widest text-gray-500">
                Working 8: 00 - 2: 00
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <i className="lni lni-phone text-h1 text-gray-500" />
            <div>
              <h1 className="font-head text-[26px] text-emerald-500">
                1900 - 6666
              </h1>
              <p className="font-body text-xs tracking-widest text-gray-500">
                Working 8: 00 - 2: 00
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='inline-flex items-center gap-2 w-full justify-between'>
            <h3 className='font-head text-gray-700 mr-2'>Follows us</h3>
            {footerSocialMedia?.map((item) => (
              <a key={item.id} href={item.link} className='grid place-content-center w-7 h-7 hover:bg-lime-400 duration-300 shrink-0 bg-emerald-500 rounded-full'>
                <i className={`${item.icon} text-white`} title={item.name} />
              </a>
            ))}
          </div>
          <p className='font-body text-sm text-gray-500 text-right mt-[1px]'>Upto 15% discount on your first subscribe</p>
        </div>
      </div>
    </main>
  );
}
