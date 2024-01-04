import { BrowseAllCategories } from '@/lib/data';
import Link from 'next/link';
import React from 'react';

const CategorySmallBox = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border px-4 pb-8 pt-3 shadow-md">
      <h2 className="before:content- relative mb-4 w-full shrink-0 border-b pb-4 font-head text-[24px] text-gray-800 before:absolute before:-bottom-[1px] before:h-[2px] before:w-14 before:bg-gray-300 md:pb-5 md:text-h4">
        Category
      </h2>
      {BrowseAllCategories?.map((item, idx) => (
        <React.Fragment key={item.id}>
          {idx <= 2 && (
            <Link
              aria-label="Read more"
              href={`/collections/${item.slug}`}
              className="flex cursor-pointer items-center gap-1 rounded border border-gray-300 py-3 px-4 hover:shadow-md"
            >
              {item.icon}
              <p className="font-head text-base text-emerald-500">
                {item.name}
              </p>
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CategorySmallBox;
