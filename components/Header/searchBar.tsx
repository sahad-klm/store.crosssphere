import React from 'react';

const SearchBar = ({
  setIsSearchOptionActive,
  isSearchOptionActive,
  searchOption,
  handleClickSearchOption,
  classNameOfListInSearch,
}: any) => (
  <form className="relative ml-5 flex h-full w-full max-w-[36rem] flex-1 items-center rounded-md border-[.5px] border-emerald-300 bg-white px-4 py-2 ">
    <div
      className="flex w-40 shrink-0 items-center justify-between  font-head text-h6 font-W_head capitalize text-gray-800"
      onClick={() => setIsSearchOptionActive(!isSearchOptionActive)}
    >
      {searchOption}
      <i
        className={`fa-solid fa-chevron-down ${
          isSearchOptionActive && 'rotate-180'
        } ml-4 grid h-5 w-5 place-items-center leading-3  text-gray-800 transition-transform`}
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
            <h1
              onClick={handleClickSearchOption}
              className={classNameOfListInSearch}
            >
              Vegetables
            </h1>
            <li
              onClick={handleClickSearchOption}
              className={classNameOfListInSearch}
            >
              Spices
            </li>
            <li
              onClick={handleClickSearchOption}
              className={classNameOfListInSearch}
            >
              Fruits
            </li>
            <li
              onClick={handleClickSearchOption}
              className={classNameOfListInSearch}
            >
              Leaves
            </li>
            <li
              onClick={handleClickSearchOption}
              className={classNameOfListInSearch}
            >
              Oils
            </li>
            <li
              onClick={handleClickSearchOption}
              className={classNameOfListInSearch}
            >
              Powder
            </li>
            <li
              onClick={handleClickSearchOption}
              className={classNameOfListInSearch}
            >
              Others
            </li>
            <li
              onClick={handleClickSearchOption}
              className={classNameOfListInSearch}
            >
              Flowers
            </li>
            <li
              onClick={handleClickSearchOption}
              className={classNameOfListInSearch}
            >
              Fishes
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
);

export default SearchBar;
