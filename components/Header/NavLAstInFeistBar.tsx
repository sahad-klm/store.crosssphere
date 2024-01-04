import { lastOneInNav } from '@/lib/data';
import { Cart, Love } from '@/lib/icon';
import React from 'react';

export const NavLAstInFeistBar = ({ setIsCart }: React.SetStateAction<any>) => (
  <div className="ml-4 flex flex-row gap-2">
    {/* <span className='flex items-center cursor-pointer ' >
      <Love className="scale-[.4] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 max-sm:-mx-1 sm:scale-[.6] " />
      <p className="font-body text-base font-medium text-stone-800 hover:text-emerald-500">
        Wishlist
      </p>
    </span> */}
    <span
      className="flex cursor-pointer items-center "
      onClick={() => setIsCart(true)}
    >
      <Cart className="scale-[.4] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 max-sm:-mx-5 sm:scale-[.6] " />
      <p className="font-body text-base font-medium text-stone-800 hover:text-emerald-500">
        Cart
      </p>
    </span>
  </div>
);
export const NavLAstInFeistBar2 = ({
  setIsCart,
}: React.SetStateAction<any>) => (
  <div className="ml-4 flex flex-row gap-2">
    {/* <span className='flex items-center cursor-pointer ' >
    <Love className="scale-[.6] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 max-sm:-mx-1 sm:scale-[.6] " />

  </span> */}
    <span
      className="flex cursor-pointer items-center pr-1"
      onClick={() => setIsCart(true)}
    >
      <Cart className="scale-[.7] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 max-sm:-mx-5 sm:scale-[.6] " />
    </span>
  </div>
);
