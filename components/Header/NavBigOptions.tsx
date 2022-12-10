import { navbarLastCategory } from 'constants/data';
import { Icon } from 'constants/icon';
import { Key } from 'react';

function NavBigOptions(): any {
  return (
    <ul className="ml-8 grid shrink-0 grid-flow-col gap-3">
      {navbarLastCategory?.map((item) => (
        <li
          key={item.id}
          className="group/item relative grid cursor-pointer grid-flow-col place-content-center items-center"
        >
          {item.icon}
          <p className="font-head text-base text-slate-900">{item.name}</p>
          {item.subMenu && (
            <i
              className={`fa-solid fa-chevron-down 
           ml-2 text-xs text-gray-400 transition-transform`}
            />
          )}

          {item?.subMenu && (
            <ul className="invisible absolute top-11 z-10 grid  w-48 cursor-pointer gap-1 rounded bg-white p-4  shadow group-hover/item:visible">
              <div>
                {item?.subMenu?.map((subName) => {
                  return (
                    <li
                      key={subName?.id}
                      className="group/edit flex flex-row items-center"
                    >
                      <p className="relative w-full font-body text-gray-900">
                        {subName?.name}
                      </p>
                      {subName?.subMenu && (
                        <i
                          className={`fa-solid fa-chevron-right 
           ml-2 text-xs text-gray-400 transition-transform`}
                        />
                      )}
                      {subName?.subMenu && (
                        <div className="invisible absolute -right-[195px] -bottom-3 z-10 grid w-48 gap-1 rounded bg-white p-4 shadow group-hover/edit:visible">
                          {subName?.subMenu?.map(
                            (item: { id: Key; name: string }) => (
                              <ul key={item.id}>
                                <li className="w-full font-body text-gray-900">
                                  {item.name}
                                </li>
                              </ul>
                            ),
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
              </div>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavBigOptions;
