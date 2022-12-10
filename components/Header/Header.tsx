'use client';
import { lastOneInNav } from 'constants/data';
import React, { useState } from 'react';
import { NavBigOptions } from '..';

import { GridApps, Icon } from '../../constants/icon';
import BrowseAllCategory from './BrowseAllCategory';

function Header(): any {
  const [browseAllCategory, setBrowseAllCategory] = useState<Boolean | any>(
    false,
  );

  const [searchOption, setSearchOption] = useState<string | any>(
    'All Catagories',
  );
  const [isSearchOptionActive, setIsSearchOptionActive] = useState<
    boolean | any
  >(false);

  const handleClickSearchOption = (e: any) => {
    const value = e.target.innerText;
    setSearchOption(value);
  };

  const classNameOfListInSearch =
    'h-14 shrink-0 flex items-center text-gray-700 w-full font-head text-base  duration-300 hover:text-emerald-500';

  return (
    <nav className=" top-0 z-50 flex h-14 w-full flex-col ">
      <div className="flex h-24 items-center justify-between border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-5">
        <Icon className="mr-4 h-full w-44 shrink-0 bg-red-300 object-contain" />
        <form className=" relative flex h-full w-full items-center rounded-md border-[.5px] border-emerald-300 bg-white px-4 py-2">
          <div
            className="flex w-40 shrink-0 items-center justify-between  font-head text-h6 font-W_head capitalize text-gray-800"
            onClick={() => setIsSearchOptionActive(!isSearchOptionActive)}
          >
            {searchOption}
            <i
              className={`fa-solid fa-chevron-down ${
                isSearchOptionActive && 'rotate-180'
              } transition-transform ml-4 grid h-5 w-5 place-items-center  leading-3 text-gray-800`}
            />

            {/* searchboxFilter */}
            {isSearchOptionActive && (
              <div className="absolute top-12 left-0 z-[150] rounded-md bg-white py-5 pl-5 pr-8 shadow-xl">
                <ul className="flex flex-col">
                  <li
                    onClick={handleClickSearchOption}
                    className={classNameOfListInSearch}
                  >
                    All categories
                  </li>
                  <li
                    onClick={handleClickSearchOption}
                    className={classNameOfListInSearch}
                  >
                    Body & Toddler
                  </li>
                  <li
                    onClick={handleClickSearchOption}
                    className={classNameOfListInSearch}
                  >
                    Crawam
                  </li>
                  <li
                    onClick={handleClickSearchOption}
                    className={classNameOfListInSearch}
                  >
                    polppod
                  </li>
                  <li
                    onClick={handleClickSearchOption}
                    className={classNameOfListInSearch}
                  >
                    jjdfsdfs
                  </li>
                </ul>
              </div>
            )}
          </div>
          <span className="mx-4 h-full w-[.5px] bg-gray-400" />
          <input
            type="text"
            className="h-full w-full outline-none"
            placeholder="I'm looking for..."
          />
          <i className="fa-solid fa-magnifying-glass text-gray-700" />
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
        className="flex h-24 items-center justify-between border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-5"
        onClick={() => setBrowseAllCategory(!browseAllCategory)}
      >
        <button className="relative flex w-max   shrink-0 items-center gap-3 rounded-md border-none bg-emerald-500 hover:bg-emerald-600 px-4 py-3 font-head text-h5 font-W_head leading-head text-white">
          <GridApps className="scale-75 fill-white" />
          Browse all Categories
          <i
            className={`fa-solid fa-chevron-down ${
              browseAllCategory && 'rotate-180'
            } ml-5 text-base transition-transform`}
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

      {/* static navbar */}

      <div>
        <div className="flex h-20 items-center justify-between border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-5"></div>
      </div>
    </nav>
  );
}

export default Header;
