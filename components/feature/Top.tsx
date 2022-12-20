import { PaperPlaneIcon } from 'lib/icon';
import Image from 'next/image';

const Top = ({ pathName }: any): JSX.Element => (
  <div className="relative z-10  block w-full overflow-hidden rounded-xl bg-emerald-200 p-8 md:p-10 lg:p-20">
    <Image
      width={1440}
      height={1000}
      src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
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
          : 'https://w7.pngwing.com/pngs/1020/967/png-transparent-tool-laborer-architectural-engineering-renovation-work-tool-construction-tools-building-sharing.png'
      } `}
      alt=""
      loading="lazy"
      className="absolute right-10 bottom-0 -z-50 max-h-[80%] w-[40%] object-contain"
    />
    <h1 className="z-auto  font-head text-[36px] leading-[40px]  text-gray-800 md:text-h2">
      Stay home & get your daily <br /> needs in our shop
    </h1>
    <h4 className="mt-2 font-body text-[16px] leading-9 text-gray-500 md:text-[18px]">
      Start you'r daily shopping with{' '}
      <span className="text-emerald-500">logistic shad's shop</span>
    </h4>
    <form className="relative mt-10 flex h-14 flex-row  items-center overflow-hidden rounded-full bg-white sm:max-w-[50%]">
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
