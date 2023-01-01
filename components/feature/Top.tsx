import { PaperPlaneIcon } from 'lib/icon';
import Image from 'next/image';

const Top = ({ pathName }: any): JSX.Element => (
  <div className="relative z-10  block w-full overflow-hidden rounded-xl bg-emerald-200 p-8 md:p-10 lg:p-20">
    <Image
      width={1440}
      height={1000}
      src="	https://cdn.shopify.com/s/files/1/0652/4570/8532/files/banner-10.png?v=1659433764&width=1584"
      loading="lazy"
      alt=""
      className="absolute top-0 right-0 -z-50 h-full w-full object-cover opacity-40"
    />
    <Image
      width={1440}
      height={1000}
      src={`${
        pathName === ('/about' || '/contact')
          ? '/Untitled.webp'
          : '	https://cdn.shopify.com/s/files/1/0652/4570/8532/files/banner-9.png?v=1659435716&width=900'
      } `}
      alt=""
      loading="lazy"
      className="absolute right-10 bottom-0 -z-50 max-h-[80%] w-[40%] object-contain"
    />
    <h1 className="z-auto  font-head text-[46px] leading-[50px]  text-gray-800 md:text-h2">
      Stay home & get your daily <br /> needs in our shop
    </h1>
    <h4 className="mt-2 font-body text-[16px] leading-9 text-gray-500 md:text-[18px]">
      Start you'r daily shopping with{' '}
      <span className="text-emerald-500">logistic shad's shop</span>
    </h4>
    <form className="relative mt-10 flex h-16 flex-row  items-center overflow-hidden rounded-full bg-white sm:max-w-[500px]">
      <PaperPlaneIcon className="ml-1 mr-2 h-4 fill-gray-500 md:ml-6 md:mr-4" />
      <input
        type="text"
        placeholder="Your email address"
        className="h-full font-body text-sm tracking-wide text-gray-700 outline-none"
      />
      <button className="absolute right-0 h-full rounded-full bg-emerald-500 px-6 font-body text-sm tracking-wider text-white outline-none transition hover:bg-emerald-600">
        Subscribe
      </button>
    </form>
  </div>
);

export default Top;
