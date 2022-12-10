'use client';

import React, { useState } from 'react';
import { NavBigOptions } from '..';

import { GridApps, Icon } from '../../constants/icon';
import BrowseAllButton from './[headreSlug]/BrowseAllButton';
import { NavLAstInFeistBar } from './[headreSlug]/NavLAstInFeistBar';
import SearchBar from './[headreSlug]/searchBar';

function Header(): any {
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
    <nav className="relative top-0 z-50 flex w-full flex-col ">
      <div className="flex h-24 items-center justify-start border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-5 w-full">
        <img src='Untitled11-removebg-preview.png' className="mr-3 h-full w-44 shrink-0 bg-red-300 object-contain" />
        <SearchBar
          classNameOfListInSearch={classNameOfListInSearch}
          handleClickSearchOption={handleClickSearchOption}
          isSearchOptionActive={isSearchOptionActive}
          searchOption={searchOption}
          setIsSearchOptionActive={setIsSearchOptionActive}
        />

        <NavLAstInFeistBar />
      </div>

      <div className="flex h-24 items-center justify-between border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-5 w-full">
        <BrowseAllButton />

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

      <div></div>
    </nav>
  );
}

export default Header;
