'use client';

import React, { useState } from 'react';

import BrowseAllButton from './[headerSlug]/headerSlug';
import {
  NavLAstInFeistBar,
  NavLAstInFeistBar2,
} from './[headerSlug]/NavLAstInFeistBar';
import SearchBar from './[headerSlug]/searchBar';
import { motion } from 'framer-motion';
import {  textVariant2 } from 'utils/motion';
import { NavBigOptionsTab,  NavBigOptions} from './NavBigOptions';

function Header(): any {
  const [searchOption, setSearchOption] = useState<string | any>(
    'All Catagories',
  );
  const [browseAllCategory, setBrowseAllCategory] =
    React.useState<Boolean>(false);
  const [isSearchOptionActive, setIsSearchOptionActive] = useState<
    boolean | any
  >(false);
  const [navHide, setNavHide] = useState<boolean>(false);

  const handleClickSearchOption = (e: any) => {
    const value = e.target.innerText;
    setSearchOption(value);
  };

  const classNameOfListInSearch =
    'h-14 shrink-0 flex items-center text-gray-700 w-full font-head text-base  duration-300 hover:text-emerald-500';

  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => {
        const currentScrollPos: number = window.pageYOffset;

        if (currentScrollPos > 200) {
          setNavHide(true);
          console.log(navHide);
        } else return setNavHide(false);
      });
    }
  }, []);

  return (
    <>
      <nav className="relative top-0 z-50 hidden w-full flex-col lg:flex ">
        <div className="flex h-24 w-full items-center justify-start border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-5">
          <img
            src="Untitled11-removebg-preview.png"
            className=" h-full w-44 shrink-0 bg-red-300 object-contain"
          />
          <SearchBar
            classNameOfListInSearch={classNameOfListInSearch}
            handleClickSearchOption={handleClickSearchOption}
            isSearchOptionActive={isSearchOptionActive}
            searchOption={searchOption}
            setIsSearchOptionActive={setIsSearchOptionActive}
          />

          <NavLAstInFeistBar />
        </div>

        <div className="flex h-24 w-full items-center justify-start border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-5">
          <BrowseAllButton
            browseAllCategory={browseAllCategory}
            setBrowseAllCategory={browseAllCategory}
          />

          <NavBigOptions />

          <div className="hidden h-full flex-1 items-center justify-end gap-3 xl:flex">
            <i className="fa-solid fa-headset text-3xl text-gray-800" />
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

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={textVariant2}
          className={`fixed ${
            navHide ? 'flex' : 'hidden'
          } h-24 w-full items-center justify-between border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-5 duration-300`}
        >
          <BrowseAllButton />
          <SearchBar
            classNameOfListInSearch={classNameOfListInSearch}
            handleClickSearchOption={handleClickSearchOption}
            isSearchOptionActive={isSearchOptionActive}
            searchOption={searchOption}
            setIsSearchOptionActive={setIsSearchOptionActive}
          />
          <NavLAstInFeistBar />
        </motion.div>
      </nav>

      {/*  tab navbar */}

      <nav className="relative top-0 z-50 flex w-full flex-col lg:hidden">
        <div className="flex h-24 w-full items-center justify-between border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-5">
          <i
            onClick={() => setBrowseAllCategory(true)}
            className="fa-solid fa-bars-staggered w-28 cursor-pointer text-3xl text-gray-700"
          />

          <img
            src="Untitled11-removebg-preview.png"
            className=" h-full w-44 shrink-0 cursor-pointer bg-red-300 object-contain"
          />
          <div>
            <NavLAstInFeistBar2 />
          </div>
        </div>


        {/*  */}


        <div className={`${browseAllCategory ? 'fixed':'hidden'} fixed left-0 w-full bottom-0 z-50 h-[100vh] bg-black bg-opacity-25 sm:pr-[50%] pr-[20%]`}>
          <div className="flex p-5 items-center justify-center bg-gray-100 relative">
            <h1 className="font-head text-h3 text-slate-800">Loganstic shad</h1>
        <i onClick={() => setBrowseAllCategory(false)} className="fa-solid fa-xmark absolute -right-14 w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-100 duration-300 rounded-md " />
          </div>


          <div className='w-full bg-white flex '> 
          <NavBigOptionsTab  />
          </div>


          <div className='h-24 static top-0 bg-red-300 flex w-full'>skoi</div>
        </div>

      </nav>
    </>
  );
}

export default Header;
