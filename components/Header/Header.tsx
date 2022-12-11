'use client';

import React, { useState } from 'react';

import BrowseAllButton from './[headerSlug]/headerSlug';
import {
  NavLAstInFeistBar,
  NavLAstInFeistBar2,
} from './[headerSlug]/NavLAstInFeistBar';
import SearchBar from './[headerSlug]/searchBar';
import { motion } from 'framer-motion';
import { slideIn, textVariant, textVariant2 } from 'utils/motion';
import { NavBigOptionsTab, NavBigOptions } from './NavBigOptions';
import { footerSocialMedia, lastOneInNav } from 'constants/data';

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
  const [bottomHide, setBottomHide] = useState<boolean>(false);

  const handleClickSearchOption = (e: any) => {
    const value = e.target.innerText;
    setSearchOption(value);
  };

  const classNameOfListInSearch =
    'h-14 shrink-0 flex items-center text-gray-700 w-full font-head text-base  duration-300 hover:text-emerald-500';

  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 200) {
          setNavHide(true);
        } else return setNavHide(false);
      });
    }
  }, []);

  React.useEffect(() => {
    const scrollFunction = () => {
      let maxScroll = document.body.scrollHeight - window.innerHeight;

      const currentScrollPos = window.pageYOffset;

      setTimeout(() => {
        let currentPotions = window.pageYOffset;

        if (currentPotions === currentScrollPos && currentScrollPos < maxScroll)
          return setBottomHide(true);
        else setBottomHide(false);
      }, 150);
    };
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => scrollFunction());
    }
  }, []);

  return (
    <>
      <nav className="relative top-0 z-50 hidden w-full flex-col lg:flex ">
        <div className="flex h-24 w-full items-center justify-start border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 sm:px-4">
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

        <div className="flex h-24 w-full items-center justify-start border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-4">
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
          } h-[60px] w-full items-center justify-between border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-2 px-4 duration-300`}
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

      <nav className="fixed top-0 z-50 flex w-full flex-col lg:hidden">
        <div className="flex h-20 w-full items-center justify-between border-b-[1px] border-solid border-gray-700 border-opacity-20 bg-white py-4 px-4 sm:h-24">
          <i
            onClick={() => setBrowseAllCategory(true)}
            className="fa-solid fa-bars-staggered w-22 cursor-pointer text-2xl text-gray-700 sm:w-28 sm:text-3xl"
          />

          <img
            src="favicon.ico"
            className=" h-full w-44 shrink-0 cursor-pointer bg-red-300 object-contain"
          />
          <div>
            <NavLAstInFeistBar2 />
          </div>
        </div>

        {/*  */}
        <div
          className={`${
            browseAllCategory ? 'fixed' : 'hidden'
          }   inset-0 z-50 flex w-full bg-black bg-opacity-25 min-h-[100vh]`}
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn('left', 'tween', 0, 0.4)}
            className={`
          left-0 bottom-0 z-[501] flex min-w-[80%]  flex-col justify-between  bg-white sm:min-w-[350px]`}
          >
            <div className="bg-tabNav relative flex items-center justify-center bg-gray-100 p-5 pt-20">
              <h1 className="font-head text-h3 text-slate-100">
                Loganstic shad
              </h1>
              <i
                onClick={() => setBrowseAllCategory(false)}
                className="fa-solid fa-xmark absolute -right-14 flex h-10 w-10 items-center justify-center rounded-md bg-white duration-300 hover:bg-gray-100 "
              />
            </div>

            <div className="flex  w-full flex-1 items-start overflow-scroll bg-white">
              <NavBigOptionsTab />
            </div>

            <div className="flex h-24 w-full items-center bg-gray-100 px-4 shrink-0">
              {footerSocialMedia.map((item) => (
                <a
                  href={item.link}
                  className={`${item.icon}   flex h-10 w-10 items-center justify-center rounded-md text-gray-600 hover:text-[${item.color}]`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </nav>

      {/*  */}
      {/*  bottom menus */}

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={textVariant(0.01, 0.01)}
        className={`fixed ${
          bottomHide && !browseAllCategory ? 'flex' : 'hidden'
        } bottom-0  z-[100] w-full items-center justify-between border-t-[1px] border-solid border-gray-700 border-opacity-40 bg-white  p-1 px-4 shadow-2xl duration-300`}
      >
        <div className="flex w-full  flex-row justify-between">
          {lastOneInNav?.map((item) => (
            <span
              key={item.id}
              className="group/btn flex cursor-pointer flex-col items-center"
            >
              {item.icon}
              <p className=" -mt-3 font-body text-base  text-stone-800  group-hover/btn:text-emerald-500 duration-300">
                {item.name}
              </p>
            </span>
          ))}

          <span className="group/btn flex cursor-pointer flex-col items-center justify-center">
            <i className="fa-solid fa-magnifying-glass mt-3 text-gray-700 group-hover/btn:text-emerald-500 duration-300" />
            <p className="mt-1 font-body text-base  text-stone-800 hover:text-emerald-500 group-hover/btn:text-emerald-500 duration-300">
              Search
            </p>
          </span>
        </div>
      </motion.div>
    </>
  );
}

export default Header;
