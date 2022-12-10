import { BrowseAllCategories } from 'constants/data';
import { GridApps } from 'constants/icon';
import React from 'react';

const BrowseAllButton = () => {
  const [browseAllCategory, setBrowseAllCategory] =
    React.useState<Boolean>(false);
  return (
    <button
      className="relative flex shrink-0 items-center gap-1 rounded-md border-none bg-emerald-500 px-2 py-1 font-head text-base text-white hover:bg-emerald-600"
      onClick={() => setBrowseAllCategory(!browseAllCategory)}
    >
      <GridApps className="scale-[.7] fill-white" />
      Browse all Categories
      <i
        className={`fa-solid fa-chevron-down ${
          browseAllCategory && 'rotate-180'
        } ml-4 mr-2 text-base transition-transform`}
      />
      {browseAllCategory && (
        <div className="absolute top-20 left-0 z-40 grid w-max grid-cols-2 gap-3 rounded border border-emerald-500 border-opacity-30 bg-white p-5 shadow-md ">
          {BrowseAllCategories?.map((item) => (
            <div
              key={item.id}
              className="grid w-max grid-flow-col gap-2 rounded border border-gray-300 py-2 px-4 hover:shadow-md"
            >
              {item.icon}
              <p className="font-body text-emerald-500">{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </button>
  );
};

export default BrowseAllButton;
