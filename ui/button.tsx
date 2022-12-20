import { ArrowNoLine, Cart, GridApps, Icon, SortIcon } from '@/lib/icon';
import React from 'react';

const ButtonShopNow = ({ paddingAndStyle, value }: any): any => {
  return (
    <button
      className={`z-[1] mt-4 flex w-max items-center gap-4 rounded-md bg-emerald-500  font-body text-xs text-white transition-all hover:gap-5 hover:bg-yellow-500 outline-none ${paddingAndStyle}`}
    >
      {value}
      <i className="lni lni-arrow-right"></i>
    </button>
  );
};
const ButtonAddToCart = ({ className }: any): any => {
  return (
    <button
      className={`group/btn z-[1] mx-[10px] mt-4 flex h-12 w-full items-center justify-center gap-4 rounded-md  bg-emerald-500 px-3 font-body text-xs text-white transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-500 outline-none ${className}`}
    >
      <Cart className="-m-3 scale-50 fill-white" />
      Add to cart
    </button>
  );
};

const ButtonAdd = (): any => (
  <button className="group/btn inline-flex h-8 items-center gap-2 rounded-md bg-emerald-200 px-3 font-body text-emerald-500 transition-transform duration-500 hover:-translate-y-1 hover:bg-emerald-500 hover:fill-white hover:text-white">
    <Cart className="-m-3 scale-50 fill-emerald-500 group-hover/btn:fill-white" />
    Add
  </button>
);
const ButtonShowLimit = ({ filteringCount, setFilteringCount }: any): any => {
  const [clicked, setClicked] = React.useState<boolean>(false);

  const handleClick = (): any => {
    setClicked(!clicked);
  };

  return (
    <button
      onClick={handleClick}
      className=" relative inline-flex h-min items-center justify-center gap-3 rounded-xl border bg-transparent px-5 py-3 font-body text-gray-600 outline-none "
    >
      <GridApps className="-m-4 scale-50 fill-gray-600 " />
      Show:&nbsp;&nbsp;&nbsp;{filteringCount.count}
      <ArrowNoLine
        className={`${
          clicked ? '-rotate-90' : 'rotate-90'
        } -m-4 scale-50 fill-gray-600 duration-300`}
      />
      <ul
        style={{ display: clicked ? 'block' : 'none' }}
        className="absolute top-16 z-50 w-[160px] rounded-md bg-white py-3 shadow-2xl"
      >
        <li
          onClick={() => setFilteringCount({ ...filteringCount, count: 15 })}
          className={` flex h-[30px] items-center px-4 font-body text-base hover:bg-emerald-500 ${
            filteringCount === 15
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-gray-700'
          }`}
        >
          15
        </li>
        <li
          onClick={() => setFilteringCount({ ...filteringCount, count: 20 })}
          className={` flex h-[30px] items-center px-4 font-body text-base hover:bg-emerald-500 ${
            filteringCount === 20
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-gray-700'
          }`}
        >
          20
        </li>
        <li
          onClick={() => setFilteringCount({ ...filteringCount, count: 25 })}
          className={` flex h-[30px] items-center px-4 font-body text-base hover:bg-emerald-500 ${
            filteringCount === 25
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-gray-700'
          }`}
        >
          25
        </li>
        <li
          onClick={() => setFilteringCount({ ...filteringCount, count: 30 })}
          className={` flex h-[30px] items-center px-4 font-body text-base hover:bg-emerald-500 ${
            filteringCount === 30
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-gray-700'
          }`}
        >
          30
        </li>
        <li
          onClick={() => setFilteringCount({ ...filteringCount, count: 50 })}
          className={` flex h-[30px] items-center px-4 font-body text-base hover:bg-emerald-500 ${
            filteringCount === 50
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-gray-700'
          }`}
        >
          50
        </li>
      </ul>
    </button>
  );
};
const ButtonSortBy = ({ filteringCount, setFilteringCount }: any): any => {
  const [clicked, setClicked] = React.useState<boolean>(false);

  const handleClick = (): any => {
    setClicked(!clicked);
  };

  const sortList = [
    {
      id: 1,
      name: 'Featured',
    },
    {
      id: 2,
      name: 'Best selling',
    },
    {
      id: 3,
      name: 'Alphabetically, A-Z',
    },
    {
      id: 4,
      name: 'Alphabetically, Z-A',
    },
    {
      id: 5,
      name: 'Price, low to high',
    },
    {
      id: 6,
      name: 'Price, high to low',
    },
    {
      id: 7,
      name: 'Date, old to new',
    },
    {
      id: 8,
      name: 'Date, new to old',
    },
  ];

  return (
    <button
      onClick={handleClick}
      className="duration-300 transition-transform relative inline-flex h-min items-center justify-center gap-3 rounded-xl border bg-transparent px-5 py-3 font-body text-gray-600 outline-none"
    >
      <SortIcon className="-m-4 scale-50 fill-gray-600 " />
      Sort by:&nbsp;&nbsp;&nbsp;{filteringCount.filterBy}
      <ArrowNoLine
        className={`${
          clicked ? '-rotate-90' : 'rotate-90'
        } -m-4 scale-50 fill-gray-600 duration-300`}
      />
      <ul
        style={{ display: clicked ? 'block' : 'none' }}
        className="absolute top-16 right-0 z-50 w-[200px] rounded-md bg-white py-3 shadow-2xl"
      >
        {sortList.map((item) => (
          <li
          key={item.id}
            onClick={() =>
              setFilteringCount({ ...filteringCount, filterBy: item.name })
            }
            className={` flex h-[30px] items-center px-4 font-body text-base hover:bg-emerald-500 ${
              filteringCount.filterBy === item.name
                ? 'bg-emerald-500 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </button>
  );
};

export {
  ButtonAdd,
  ButtonShopNow,
  ButtonAddToCart,
  ButtonShowLimit,
  ButtonSortBy,
};
