import { navbarLastCategory } from 'constants/data';
import { Icon } from 'constants/icon';
import { Key } from 'react';

function NavBigOptions(): any {
  return (
    <ul className="ml-auto flex flex-row flex-wrap grid-flow-col gap-3 overflow-hidden">
      {navbarLastCategory?.map((item) => (
        <li
          key={item.id}
          className="group/item relative grid cursor-pointer grid-flow-col place-content-center items-center"
        >
          {item.icon}
          <p className="font-head text-base text-slate-900 hover:text-emerald-500">
            {item.name}
          </p>
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
                        className={`fa-solid fa-chevron-right 
           ml-2 text-xs text-gray-400 transition-transform`}
                      />
                    )}
                    {subName?.subMenu && (
                      <div className="w-ful invisible absolute h-7 min-w-[192px] w-max hover:visible group-hover/edit:visible">
                        <div className="invisible absolute -right-[195px] -bottom-3 z-10 grid gap-1 rounded bg-white p-4 shadow hover:visible group-hover/edit:visible">
                          {subName?.subMenu?.map(
                            (item: { id: Key; name: string }) => (
                              <ul key={item.id} className='w-full'>
                                <li className="w-full font-head text-base text-gray-600 hover:text-emerald-500 shrink-0">
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

export default NavBigOptions;
