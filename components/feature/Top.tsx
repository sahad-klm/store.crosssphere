import { Icon } from 'constants/icon';

const Top = (): JSX.Element => (
  <div className="relative z-10  block w-full overflow-hidden rounded-xl bg-emerald-200 lg:p-20 md:p-10 p-4">
    <img
      src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
      loading="lazy"
      alt=""
      className="absolute top-0 right-0 -z-50 h-full w-full object-cover opacity-40"
    />
    <img
      src="https://w7.pngwing.com/pngs/1020/967/png-transparent-tool-laborer-architectural-engineering-renovation-work-tool-construction-tools-building-sharing.png"
      alt=""
      className="absolute right-10 bottom-0 -z-50 max-h-[80%] w-[40%] object-contain"
    />
    <h1 className="z-auto  font-head md:text-h2 text-[36px]  leading-[40px] text-gray-800">
      Stay home & get your daily <br /> needs in our shop
    </h1>
    <h4 className="mt-2 font-body md:text-[18px] text-[16px] leading-9 text-gray-500">
      Start you'r daily shopping with{' '}
      <span className="text-emerald-500">logistic shad's shop</span>
    </h4>
    <form className="z-10 md:mt-5 mt-4 flex h-14 w-min flex-row items-center rounded-full bg-white">
      <Icon className="ml-6 mr-4 h-4 w-4 fill-gray-700" />
      <input
        type="text"
        placeholder="Your email address"
        className="h-full font-body text-sm tracking-wide text-gray-700 outline-none"
      />
      <button className="h-full rounded-full bg-emerald-500 px-6 font-body text-sm tracking-wider text-white transition hover:bg-emerald-600">
        Subscribe
      </button>
    </form>
  </div>
);

export default Top;
