import { BrowseAllCategories } from '@/lib/data';
import { GridApps } from '@/lib/icon';
import Link from 'next/link';
import React from 'react';

const BrowseAllButton = ({
  browseAllCategory,
  setBrowseAllCategory,
  navHide,
}: any): JSX.Element => {
  return (
    <button
      name="button"
      className="relative flex shrink-0 items-center gap-1 rounded-md border-none bg-emerald-500 px-2 font-head text-base text-white outline-none hover:bg-emerald-600"
      onClick={() => setBrowseAllCategory(!browseAllCategory)}
    >
      <GridApps className="scale-[.7] fill-white" />
      Browse all Categories
      <i
        className={`fa-solid fa-chevron-down ${
          browseAllCategory && 'rotate-180'
        } ml-4 mr-2 text-base transition-transform`}
      />
      {browseAllCategory && !navHide && (
        <div className="absolute top-[76px] left-0 z-40 grid w-max grid-cols-2 gap-4 rounded-2xl border-[1.5px] border-emerald-500 border-opacity-30 bg-white p-[30px]  drop-shadow-lg ">
          {BrowseAllCategories?.map((item) => (
            <Link
              aria-label="Read more"
              href={`/collections/${item.slug}`}
              key={item.id}
              className="group grid w-full grid-flow-col place-items-center gap-[14px] rounded border border-gray-300 border-opacity-20 py-2 px-4 hover:border-emerald-400 hover:opacity-70 hover:shadow-sm"
            >
              {item.icon}

              <p className="font-head text-[15px] leading-4 text-[#253d4e] group-hover:text-emerald-500 ">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </button>
  );
};

export default BrowseAllButton;
