import { ArrowNoLine, CloseIcon, HomeIcon } from 'lib/icon';
import Image from 'next/image';
import Link from 'next/link';

const Head = ({ headName, tags }: any): JSX.Element => {

  return (
    <div className="relative z-10  flex w-full flex-col justify-between gap-5 overflow-hidden rounded-xl bg-emerald-200 p-8 md:p-10 lg:p-20 xl:flex-row   ">
      <Image width={1440} height={500} 
        src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
        loading="lazy"
        alt=""
        className="absolute top-0 right-0 -z-50 h-full w-full object-cover opacity-40"
      />
      <Image width={1000} height={500} 
        src="https://w7.pngwing.com/pngs/1020/967/png-transparent-tool-laborer-architectural-engineering-renovation-work-tool-construction-tools-building-sharing.png"
        loading="lazy"
        alt=""
        className="absolute right-10 bottom-0 -z-50 max-h-[80%] w-[40%] object-contain"
      />

      {/* first part */}
      <div className="flex shrink-0 flex-col">
        <h1 className="z-auto  mb-5 font-head text-[36px]  leading-[40px] text-gray-800 md:text-[48px]">
          {headName}
        </h1>
        <div className="inline-flex flex-wrap items-center gap-1 font-head text-base text-gray-600">
          <Link href='/' className="inline-flex items-center text-emerald-500">
            <HomeIcon className="-m-3 scale-[.4] fill-emerald-500" /> Home
          </Link>
          <ArrowNoLine className="-m-3 scale-[.4] fill-gray-500" />

          <Link href="/collections">collections</Link>
          <ArrowNoLine className="-m-3 scale-[.4] fill-gray-500" />
          {headName}
        </div>
      </div>

      {/* then the last part */}

      <div className="flex w-full flex-row flex-wrap justify-end gap-3 xl:justify-center">
        {tags.split(',').map((tag: string, idx: any) => (
          <span key={idx} className="inline-flex h-min cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-3 font-head text-[17px] text-emerald-500 duration-300 hover:-translate-y-1 hover:text-yellow-300">
            <CloseIcon className="-m-4 scale-[.4] fill-gray-300" /> {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Head;
