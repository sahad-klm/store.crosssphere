import { feathersInTotals } from '@/lib/data';
import Image from 'next/image';

export const Bottom = (): JSX.Element => (
  <div className="mt-[50px] grid w-full gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
    {feathersInTotals?.map((item) => (
      <div
        key={item.id}
        className="group/icon flex items-center justify-start gap-6 rounded-xl bg-gray-200 p-2 md:p-4"
      >
        {item.icon}
        {/* <Image
          width={64}
          height={64}
          src={item.icon}
          loading="lazy"
          alt=""
          className="h-16 w-16 object-contain transition-transform duration-300 group-hover/icon:-translate-y-1"
        /> */}
        <div>
          <h4 className="font-head text-[16px] text-gray-800 md:text-[18px]">
            {item.title}
          </h4>
          <p className="font-body text-[14px] text-gray-600 md:mt-[2px]">
            {item.subtitle}
          </p>
        </div>
      </div>
    ))}
  </div>
);
