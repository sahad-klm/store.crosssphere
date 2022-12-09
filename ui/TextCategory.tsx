import { useWindowWidth } from '@react-hook/window-size';
import React from 'react';

type Props = {
  name?: string;
  isSelectedCatN: any;
  setIsSelectedCatN: any;
  list?: any;
  setToggleOn?: React.Dispatch<React.SetStateAction<boolean>> | any;
};

function TextCategory({ name, isSelectedCatN, setIsSelectedCatN }: Props) {
  return (
    <p
      className={`font-head md:text-base text-sm leading-3 ${
        isSelectedCatN === name ? 'text-emerald-500' : 'text-gray-800'
      } cursor-pointer transition hover:-translate-y-1 hover:text-emerald-500`}
      onClick={() => setIsSelectedCatN(name)}
    >
      {name}
    </p>
  );
}

export default TextCategory;

export const TextCategoryMob = ({
  list,
  isSelectedCatN,
  setIsSelectedCatN,
  setToggleOn,
}: Props): any => {
  const handleClick = (name: string) => {
    setIsSelectedCatN(name);
    setToggleOn(false);

    console.log(name);
  };

  return (
    <>
      <div className="fixed inset-0  z-[100] flex items-end bg-black bg-opacity-40 sm:hidden">
        <div className=" w-full bg-white shadow-xl">
          <h4 className="flex h-16 w-full items-center justify-between border-b px-4 font-body md:text-h6  text-[14px]text-gray-700">
            {isSelectedCatN}
            <i
              onClick={() => setToggleOn(false)}
              className="fa-solid fa-chevron-down text-gray-500 duration-700 "
            />
          </h4>
          <ul className=" grid h-32 overflow-y-scroll bg-white">
            {list?.map((item: { id: React.Key; name: string }) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.name)}
                className={`flex h-14 cursor-pointer items-center px-4 font-body text-base text-gray-500 hover:bg-gray-200 ${
                  isSelectedCatN === item.name &&
                  'cursor-default text-gray-400 hover:bg-white'
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* tablet */}

      <div
        className="absolute top-10  right-4 z-[100] hidden min-w-[150px] items-end 
    overflow-hidden rounded-md bg-white py-3 shadow-2xl sm:flex"
      >
        <div className=" w-full bg-white">
          <ul className="grid">
            {list?.map((item: { id: React.Key; name: string }) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.name)}
                className={`flex h-10 cursor-pointer items-center px-4 font-body text-base text-gray-500 hover:bg-gray-200 ${
                  isSelectedCatN === item.name &&
                  'cursor-default text-gray-400 hover:bg-white'
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
