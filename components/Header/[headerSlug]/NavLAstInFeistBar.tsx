import React from 'react';
import { lastOneInNav } from 'constants/data';

export const NavLAstInFeistBar = () => (
  <div className="ml-4 flex flex-row gap-2">
    {lastOneInNav?.map((item) => (
      <span key={item.id} className='flex items-center cursor-pointer '>
        {item.icon}
        <p className="font-body text-base font-medium text-stone-800 hover:text-emerald-500">
          {item.name}
        </p>
      </span>
    ))}
  </div>
);
export const NavLAstInFeistBar2 = () =>  (
    <div className="flex flex-row gap-1 w-28 justify-end ">
      {lastOneInNav?.map((item) => (
        <>
          {(item.name === 'Wishlist' || item.name === 'Cart') && (
            <span key={item.id} className="flex items-center scale-125 cursor-pointer">
              {item.icon}
            </span>
          )}
        </>
      ))}
    </div>
  );

