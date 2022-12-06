import { lastOneInNav } from "constants/data";
import React, { useState } from "react";
import {NavBigOptions} from "..";

import { Icon } from "../../constants/icon";
import BrowseAllCategory from "./BrowseAllCategory";



function Header(): any {
  const [browseAllCategory, setBrowseAllCategory] = useState<Boolean>(false);
  


  return (
    <nav className="flex flex-col w-full sticky z-30 overflow-hidden">

      <div className="flex justify-between items-center py-4 px-5 bg-white h-20 border-b-[1px] border-solid border-gray-700 border-opacity-20">

        <Icon className="w-44 h-full object-contain bg-red-300 shrink-0 mr-4" />
        <form className=" bg-white w-full h-full border-2 flex items-center px-4 py-2 rounded border-emerald-500">
          <span className="shrink-0 flex items-center font-head font-W_head text-h6  text-[rbg(37, 61, 78)]">All Catagories
            <p className="w-5 h-5 grid place-items-center text-cyan-400 rotate-90 leading-3 ml-4
        ">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org…0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E
        " alt="" /></p>
          </span>
          <span className="w-[.5px] bg-gray-400 h-full mx-4" />
          <input type="text" className="h-full w-full outline-none " placeholder="I'm looking for..." />
          <p className="w-6 h-6 bg-black ">s</p>
        </form>

        <div className="flex flex-row justify-end gap-4 flex-1 ml-10">
          {lastOneInNav?.map((item) => (
            <span key={item.id} className="flex items-center gap-3">
              {item.icon}
              <p className="text-base font-body font-medium text-stone-800">{item.name}</p>
            </span>
          ))}

        </div>
      </div>


      <div className="flex justify-between items-center py-4 px-5 bg-white h-20 border-b-[1px] border-solid border-gray-700 border-opacity-20" onClick={() => setBrowseAllCategory(!browseAllCategory)}>
        <button className="text-white text-h5 leading-head   bg-emerald-500 w-max rounded border-none font-head font-W_head px-4 py-3 flex items-center gap-3 shrink-0 relative">
          <Icon className="w-6 h-6 object-contain fill-white"/>
          Browse all Categories
          <Icon className={`w-6 h-6 object-contain fill-white ${browseAllCategory && 'rotate-180'} transition-transform`}/>
          {browseAllCategory && 
          <BrowseAllCategory  />
          }
          </button>

            <NavBigOptions />

            <div className="flex-1 h-full xl:flex hidden items-center justify-end gap-3">
              <Icon  className="object-contain h-8"/>
              <div className="grid">
                <h1 className="text-h5 font-head tracking-[3px] text-emerald-500">1900 - 3001</h1>
                <p className="font-body font-light tracking-widest text-sm">24/7 Support center</p>
              </div>
            </div>

      </div>
    </nav>
  );
}

export default Header;
