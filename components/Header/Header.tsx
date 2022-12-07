import { lastOneInNav } from 'constants/data';
import React, { useState } from 'react';
import { NavBigOptions } from '..';

import { Icon } from '../../constants/icon';
import BrowseAllCategory from './BrowseAllCategory';

function Header(): any {
  const [browseAllCategory, setBrowseAllCategory] = useState<Boolean>(false);

  return (
    <nav className="sticky z-30 flex w-full flex-col overflow-hidden">
      <div className="flex h-20 items-center justify-between border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-5">
        <Icon className="mr-4 h-full w-44 shrink-0 bg-red-300 object-contain" />
        <form className=" flex h-full w-full items-center rounded border-2 border-emerald-500 bg-white px-4 py-2">
          <span className="text-[rbg(37, 61, 78)] flex shrink-0 items-center  font-head text-h6 font-W_head">
            All Catagories
            <p
              className="ml-4 grid h-5 w-5 rotate-90 place-items-center leading-3 text-cyan-400
        "
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org…0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E
        "
                alt=""
              />
            </p>
          </span>
          <span className="mx-4 h-full w-[.5px] bg-gray-400" />
          <input
            type="text"
            className="h-full w-full outline-none"
            placeholder="I'm looking for..."
          />
          <p className="h-6 w-6 bg-black ">s</p>
        </form>

        <div className="ml-10 flex flex-1 flex-row justify-end gap-4">
          {lastOneInNav?.map((item) => (
            <span key={item.id} className="flex items-center gap-3">
              {item.icon}
              <p className="font-body text-base font-medium text-stone-800">
                {item.name}
              </p>
            </span>
          ))}
        </div>
      </div>

      <div
        className="flex h-20 items-center justify-between border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-5"
        onClick={() => setBrowseAllCategory(!browseAllCategory)}
      >
        <button className="relative flex w-max   shrink-0 items-center gap-3 rounded border-none bg-emerald-500 px-4 py-3 font-head text-h5 font-W_head leading-head text-white">
          <Icon className="h-6 w-6 fill-white object-contain" />
          Browse all Categories
          <Icon
            className={`h-6 w-6 fill-white object-contain ${
              browseAllCategory && 'rotate-180'
            } transition-transform`}
          />
          {browseAllCategory && <BrowseAllCategory />}
        </button>

        <NavBigOptions />

        <div className="hidden h-full flex-1 items-center justify-end gap-3 xl:flex">
          <Icon className="h-8 object-contain" />
          <div className="grid">
            <h1 className="font-head text-h5 tracking-[3px] text-emerald-500">
              1900 - 3001
            </h1>
            <p className="font-body text-sm font-light tracking-widest">
              24/7 Support center
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
