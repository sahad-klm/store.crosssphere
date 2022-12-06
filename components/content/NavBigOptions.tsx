import { navbarLastCategory } from "constants/data";
import { Icon } from "constants/icon";
import { Key } from "react";



function NavBigOptions() {
  return (
    <ul className="grid grid-flow-col gap-3 ml-8 shrink-0">
      {navbarLastCategory?.map((item) => (
        <li key={item.id} className='grid grid-flow-col place-content-center items-center gap-3 relative group/item cursor-pointer'>
          {item.icon && item.icon}
          <p className="font-body text-slate-900">{item.name}</p>
          {item.subMenu && <Icon className='w-2 h-2 fill-slate-500' />}


          {item?.subMenu &&
            <ul className="absolute top-11 rounded p-4 z-10  w-48 shadow bg-white gap-1 grid invisible  group-hover/item:visible cursor-pointer">
              <div >
                {item?.subMenu?.map((subName) => {
                  return (
                    <li key={subName?.id}
                    className="flex flex-row items-center group/edit"
                    >
                      <p className="text-gray-900 w-full relative font-body">{subName?.name}</p>
                      {subName?.subMenu && <Icon className="w-2 h-2 group-hover/edit:fill-green-600 "/>}
                      {subName?.subMenu && (
                        <div className="absolute bg-white rounded p-4 z-10 w-48 shadow gap-1 grid -right-[200px] -bottom-3 invisible group-hover/edit:visible">
                          {subName?.subMenu?.map((item: { id: Key; name: string}) => (
                            <ul key={item.id}>
                              <li className="text-gray-900 w-full font-body">{item.name}</li>
                            </ul>
                          ))}
                        </div>
                      )}

                    </li>

                  );
                })
                }
              </div>
            </ul>
          }

        </li>
      ))}
    </ul>
  )
}

export default NavBigOptions;
