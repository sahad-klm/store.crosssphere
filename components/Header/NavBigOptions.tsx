import { navbarLastCategory } from '@/lib/data';
import { Fire } from '@/lib/icon';
import Link from 'next/link';
import React, { Key } from 'react';

export function NavBigOptions(): any {
  return (
    <ul className="ml-5 flex grid-flow-col flex-row flex-wrap gap-3 overflow-hidden">
      {navbarLastCategory?.map((item) => (
        <li
          key={item.id}
          className="group/item relative grid cursor-pointer grid-flow-col place-content-center items-center"
        >
          {item.icon}
          <Link
            href={`/${item.slug}`}
            className="font-head text-base text-slate-900 hover:text-emerald-500"
          >
            {item.name}
          </Link>
          {item.subMenu && (
            <i
              className={`fa-solid fa-chevron-down 
           ml-2 text-xs text-gray-400 transition-transform`}
            />
          )}

          {item?.subMenu && (
            <ul className="invisible absolute top-11 z-10 grid  w-max min-w-[192px] cursor-pointer gap-1 rounded-md bg-white p-4  shadow group-hover/item:visible">
              {item?.subMenu?.map((subName) => {
                return (
                  <li
                    key={subName?.id}
                    className="group/edit flex w-full flex-row items-center"
                  >
                    <p className="relative w-full font-head text-gray-600 hover:text-emerald-500">
                      {subName?.name}
                    </p>
                    {subName?.subMenu && (
                      <i
                        className={`fa-solid fa-chevron-right ml-2 text-xs text-gray-400 transition-transform`}
                      />
                    )}
                    {subName?.subMenu && (
                      <div className="w-ful invisible absolute h-7 w-max min-w-[192px] hover:visible group-hover/edit:visible">
                        <div className="invisible absolute -right-[195px] -bottom-3 z-10 grid gap-1 rounded bg-white p-4 shadow hover:visible group-hover/edit:visible">
                          {subName?.subMenu?.map(
                            (item: { id: Key; name: string }) => (
                              <ul key={item.id} className="w-full">
                                <li className="w-full shrink-0 font-head text-base text-gray-600 hover:text-emerald-500">
                                  {item.name}
                                </li>
                              </ul>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export const NavBigOptionsTab = ({setBrowseAllCategory}:React.SetStateAction<boolean|any>) => {
  const [naveOptionSwitch, setNaveOptionSwitch] = React.useState<any>(null);

  return (
    <ul className="relative flex w-full flex-col">
      {navbarLastCategory?.map((item: any) => (
        <React.Fragment key={item.id}>
          <Link
            href={`/${!item.subMenu && item.slug}`}
            onClick={() => {
              item.subMenu ? setNaveOptionSwitch(item.name):setBrowseAllCategory(false)
            }}
            key={item.id}
            className=" flex cursor-pointer flex-row place-content-center items-center justify-start border-b border-gray-200 px-4 py-5"
          >
            {item.name === 'Deals' && (
              <Fire className="-m-3 -rotate-90 scale-50 fill-emerald-500" />
            )}
            <p className="shrink-0 font-head text-base text-slate-900 hover:text-emerald-500">
              {item.name}
            </p>
            {item.subMenu && (
              <i
                className="fa-solid fa-chevron-right 
         ml-2 flex w-full justify-end text-xs text-gray-400 transition-transform  "
              />
            )}
          </Link>
          {/*  */}

          {(naveOptionSwitch === item.name ||
            naveOptionSwitch ===
              item?.subMenu?.map((subName: any) => item?.name)) && (
            <>
              <ul className=" absolute top-0 left-0  z-10 h-full w-full cursor-pointer bg-white">
                <li
                  onClick={() => setNaveOptionSwitch(null)}
                  className="flex cursor-pointer flex-row place-content-center items-center justify-start border-b border-gray-200 px-4 py-5 font-head text-sm text-gray-400"
                >
                  <i className="fa-solid fa-chevron-left mr-4 flex justify-end text-xs text-gray-400 transition-transform  " />
                  Back
                </li>

                {item?.subMenu?.map((subName: any) => {
                  return (
                    <>
                      <li
                        onClick={() => setNaveOptionSwitch(subName?.name)}
                        key={subName?.id}
                        className="flex cursor-pointer flex-row place-content-center items-center justify-start border-b border-gray-200 px-4 py-5"
                      >
                        <p className="relative w-full font-head text-gray-600 hover:text-emerald-500">
                          {subName?.name}
                        </p>
                        {subName?.subMenu && (
                          <i
                            className={`fa-solid fa-chevron-right ml-2 text-xs text-gray-400 transition-transform`}
                          />
                        )}
                      </li>
                    </>
                  );

                  {
                    naveOptionSwitch === subName?.name && (
                      <ul className=" z-11 absolute top-0  left-0 h-full w-full cursor-pointer bg-white">
                        <li
                          onClick={() => setNaveOptionSwitch(subName?.name)}
                          className="flex cursor-pointer flex-row place-content-center items-center justify-start border-b border-gray-200 px-4 py-5 font-head text-sm text-gray-400"
                        >
                          <i className="fa-solid fa-chevron-left mr-4 flex justify-end text-xs text-gray-400 transition-transform  " />
                          Back
                        </li>
                        {subName?.subMenu?.map(
                          (item: { id: Key; name: string }) => (
                            <li
                              key={item.id}
                              className="flex cursor-pointer flex-row place-content-center items-center justify-start border-b border-gray-200 px-4 py-5"
                            >
                              {item.name}
                            </li>
                          ),
                        )}
                      </ul>
                    );
                  }

                  {
                    /*  */
                  }
                })}
              </ul>
            </>
          )}
        </React.Fragment>
        //
      ))}
    </ul>
  );
};
