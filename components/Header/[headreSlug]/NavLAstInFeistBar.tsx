import React from "react";
import { lastOneInNav } from 'constants/data';

export const NavLAstInFeistBar = () => (
  
  <div className="ml-4 flex flex-row gap-2">
          {lastOneInNav?.map((item) => (
            <span key={item.id} className="flex items-center">
              {item.icon}
              <p className="font-body text-base font-medium text-stone-800">
                {item.name}
              </p>
            </span>
          ))}
        </div>
)
