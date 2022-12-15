import {
  ArrowDownFilled,
  ArrowNoLine,
  ArrowWithLine,
  CloseIcon,
  FilterIcon,
} from '@/lib/icon';
import { ButtonShowLimit, ButtonSortBy } from '@/ui/button';
import React, { useState } from 'react';

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

const HeadingWithFilter = ({
  products,
  filteringCount,
  setFilteringCount,
}: any) => {
  const [filterOn, setFilterOn] = useState<any>({ state: false, type: null });
  const min: number = 0;
  const max: number = 700;
  const [isColor, setIsColor] = React.useState({ state: false, color: '' });
  const [isType, setIsType] = React.useState({ state: true, type: '' });
  const [isPrice, setIsPrice] = React.useState({ state: true, price: '' });
  const [minVal, setMinVal] = React.useState<number>(min);
  const [maxVal, setMaxVal] = React.useState<number>(max);
  const minValRef = React.useRef(min);
  const maxValRef = React.useRef(max);
  const range = React.useRef<any>(null);
  const getPercent = React.useCallback(
    (value: any) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  React.useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  React.useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  console.log(filterOn);

  return (
    <>
      {/* mobile */}
      <div className="hidden w-full items-center justify-between lg:inline-flex">
        <h4 className="font-body text-base text-gray-800 ">
          Showing all {products.length} products
        </h4>
        <span className="flex gap-3">
          <ButtonShowLimit
            filteringCount={filteringCount}
            setFilteringCount={setFilteringCount}
          />
          <ButtonSortBy
            filteringCount={filteringCount}
            setFilteringCount={setFilteringCount}
          />
        </span>
      </div>

      {/* tablet to mobile when it's nokia 11 */}

      <div className="inline-flex w-full items-center justify-between lg:hidden">
        <p
          onClick={() => setFilterOn({ ...filterOn, state: true })}
          className="flex items-center gap-3 text-gray-900 cursor-pointer"
        >
          {' '}
          <FilterIcon className="-m-3 scale-50 fill-gray-900" />
          Filter and Sort
        </p>
        <p className="text-gray-700">{products.length} products</p>
      </div>

      {/* when click filter */}

      <div className={`${filterOn.state ? "fixed": 'hidden'} inset-0  z-50 flex flex-col justify-end duration-300`}>
        <span
          onClick={() => setFilterOn({ ...filterOn, state: false })}
          className="absolute -z-10 h-full w-full bg-black bg-opacity-30"
        />
        <div className="flex h-[80vh] w-full flex-col items-start bg-white py-5 ">
          <p className="relative flex w-full items-center justify-center gap-3 border-b pb-4 text-gray-900">
            {filterOn.type === '' ? (
              <span
                onClick={() => setFilterOn({ ...filterOn, state: false })}
                className="absolute left-4"
              >
                <CloseIcon className="-m-2 rotate-180 scale-75 fill-gray-600" />
              </span>
            ) : (
              <span
                onClick={() => setFilterOn({ ...filterOn, type: '' })}
                className="absolute left-4"
              >
                <ArrowWithLine className="-m-2 rotate-180 scale-75 fill-gray-600" />
              </span>
            )}
            Filter and Sort
          </p>
          <ul className="relative mt-5 h-full w-full px-4">
            <li
              onClick={() => setFilterOn({ ...filterOn, type: 'Color' })}
              className="flex h-[54px] w-full items-center justify-between border-b text-gray-800 cursor-pointer "
            >
              Color <ArrowNoLine className="-m-3 scale-50 fill-gray-700" />
            </li>
            <li
              onClick={() => setFilterOn({ ...filterOn, type: 'Product type' })}
              className="flex h-[54px] w-full items-center justify-between border-b text-gray-800 cursor-pointer"
            >
              Product type{' '}
              <ArrowNoLine className="-m-3 scale-50 fill-gray-700" />
            </li>
            <li
              onClick={() => setFilterOn({ ...filterOn, type: 'Size' })}
              className="flex h-[54px] w-full items-center justify-between border-b text-gray-800 cursor-pointer"
            >
              Size <ArrowNoLine className="-m-3 scale-50 fill-gray-700" />
            </li>
            <li
              onClick={() => setFilterOn({ ...filterOn, type: 'Price' })}
              className="flex h-[54px] w-full items-center justify-between border-b text-gray-800 cursor-pointer"
            >
              Price <ArrowNoLine className="-m-3 scale-50 fill-gray-700" />
            </li>
            <li
              onClick={() => setFilterOn({ ...filterOn, type: 'Display' })}
              className="flex h-[54px] w-full items-center justify-between border-b text-gray-800 cursor-pointer"
            >
              Display <ArrowNoLine className="-m-3 scale-50 fill-gray-700" />
            </li>
            <li
              onClick={() => setFilterOn({ ...filterOn, type: 'Sort by' })}
              className="flex h-[54px] w-full items-center justify-between border-b text-gray-800 cursor-pointer"
            >
              Sort by <ArrowNoLine className="-m-3 scale-50 fill-gray-700" />
            </li>




            <li>
              {/* when click on color */}
              <div
                className={`absolute top-0 flex h-full w-full  flex-col gap-3 bg-white py-5 
              ${
                filterOn.type !== 'Color'
                  ? 'translate-x-[1000px]'
                  : 'translate-x-0'
              } duration-300`}
              >
                <div className="flex w-full items-center gap-2">
                  <span
                    onClick={() => setIsColor({ ...isColor, color: 'yellow' })}
                    className={`flex h-4 w-4 items-center justify-center bg-yellow-400 ${
                      isColor.color === 'yellow'
                        ? 'text-opacity-100'
                        : 'text-opacity-0'
                    } text-black`}
                  >
                    &#10003;
                  </span>
                  <p className="flex w-full justify-between pr-8 text-body text-gray-600">
                    Yellow <span>1</span>
                  </p>
                </div>
              </div>

              {/* when click on product type */}

              <div
                className={`absolute top-0 flex h-full w-full  flex-col gap-3 bg-white py-5 
              ${
                filterOn.type !== 'Product type'
                  ? 'translate-x-[1000px]'
                  : 'translate-x-0'
              } duration-300`}
              >
                <div className="inline-flex items-center gap-4">
                  <span
                    onClick={() =>
                      setIsType({ ...isType, type: 'Baby & Tyler' })
                    }
                    className={`flex h-4 w-4 items-center justify-center border border-gray-200 ${
                      isType.type === 'Baby & Tyler'
                        ? 'border-emerald-500 bg-emerald-500 text-opacity-100'
                        : 'text-opacity-0'
                    } text-white`}
                  >
                    &#10003;
                  </span>
                  <p
                    className={`text-body ${
                      isType.type === 'Baby & Tyler'
                        ? 'text-emerald-500'
                        : 'text-gray-600'
                    } duration-300 `}
                  >
                    Baby & Tyler (1)
                  </p>
                </div>

                <div className="inline-flex items-center gap-4">
                  <span
                    onClick={() =>
                      setIsType({ ...isType, type: 'Hoodoo Foods' })
                    }
                    className={`flex h-4 w-4 items-center justify-center border border-gray-200 ${
                      isType.type === 'Hoodoo Foods'
                        ? 'border-emerald-500 bg-emerald-500 text-opacity-100'
                        : 'text-opacity-0'
                    } text-white`}
                  >
                    &#10003;
                  </span>
                  <p
                    className={`text-body ${
                      isType.type === 'Hoodoo Foods'
                        ? 'text-emerald-500'
                        : 'text-gray-600'
                    } duration-300 `}
                  >
                    Hoodoo Foods (1)
                  </p>
                </div>
              </div>

              {/* when we clicking on price */}

              <div
                className={`absolute top-0 flex h-full w-full  flex-col gap-3 bg-white py-5 
              ${
                filterOn.type !== 'Price'
                  ? 'translate-x-[1000px]'
                  : 'translate-x-0'
              } duration-300`}
              >
                <div className="flex w-full items-center gap-2">
                  <div className="relative mr-8 flex w-full flex-col">
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={minVal}
                      onChange={(event) => {
                        const value = Math.min(
                          Number(event.target.value),
                          maxVal - 1,
                        );
                        setMinVal(value);
                        minValRef.current = value;
                      }}
                      className={`thumb thumb--left w-full ${
                        minVal > max - 100 && 'z-[5]'
                      }`}
                    />
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={maxVal}
                      onChange={(event) => {
                        const value = Math.max(
                          Number(event.target.value),
                          minVal + 1,
                        );
                        setMaxVal(value);
                        maxValRef.current = value;
                      }}
                      className="thumb thumb--right w-full"
                    />

                    <div className="slider w-full">
                      <div className="slider__track h-0.5 bg-gray-200" />
                      <div
                        ref={range}
                        className="slider__range h-0.5 bg-emerald-500"
                      />
                    </div>
                    <div className="mt-5 flex w-full justify-between">
                      <div className="flex h-9  items-center overflow-hidden rounded-md border border-gray-400">
                        <span className="flex h-full w-8 items-center justify-center bg-gray-200 text-gray-800">
                          $
                        </span>
                        <span className="flex h-full items-center justify-center bg-white px-4 text-body text-gray-600 ">
                          {minVal}
                        </span>
                      </div>
                      <div className="flex h-9  items-center overflow-hidden rounded-md border border-gray-400">
                        <span className="flex h-full w-8 items-center justify-center bg-gray-200 text-gray-800">
                          $
                        </span>
                        <span className="flex h-full items-center justify-center bg-white px-4 text-body text-gray-600 ">
                          {maxVal}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* when we click on Size */}

              <div
                className={`absolute top-0 flex h-full w-full  flex-col gap-3 bg-white py-5 
              ${
                filterOn.type !== 'Size'
                  ? 'translate-x-[1000px]'
                  : 'translate-x-0'
              } duration-300`}
              >
                <div className="flex w-full flex-col items-center gap-2">
                  <div className="inline-flex w-full items-center gap-2">
                    <span
                      onClick={() =>
                        setIsColor({ ...isColor, color: 'yellow' })
                      }
                      className={`flex h-4 w-4 items-center justify-center bg-yellow-400 ${
                        isColor.color === 'yellow'
                          ? 'text-opacity-100'
                          : 'text-opacity-0'
                      } text-black`}
                    >
                      &#10003;
                    </span>
                    <p className="flex w-full justify-between pr-8 text-body text-gray-600">
                      50g <span>1</span>
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center gap-2">
                    <span
                      onClick={() =>
                        setIsColor({ ...isColor, color: 'yellow' })
                      }
                      className={`flex h-4 w-4 items-center justify-center bg-yellow-400 ${
                        isColor.color === 'yellow'
                          ? 'text-opacity-100'
                          : 'text-opacity-0'
                      } text-black`}
                    >
                      &#10003;
                    </span>
                    <p className="flex w-full justify-between pr-8 text-body text-gray-600">
                      100g <span>1</span>
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center gap-2">
                    <span
                      onClick={() =>
                        setIsColor({ ...isColor, color: 'yellow' })
                      }
                      className={`flex h-4 w-4 items-center justify-center bg-yellow-400 ${
                        isColor.color === 'yellow'
                          ? 'text-opacity-100'
                          : 'text-opacity-0'
                      } text-black`}
                    >
                      &#10003;
                    </span>
                    <p className="flex w-full justify-between pr-8 text-body text-gray-600">
                      150g <span>1</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* when we clicking on Display */}

              <div
                className={`absolute top-0 flex h-full w-full  flex-col gap-3 bg-white py-5 
              ${
                filterOn.type !== 'Display'
                  ? 'translate-x-[1000px]'
                  : 'translate-x-0'
              } duration-300`}
              >
                <div className="flex w-full flex-col items-center gap-2">
                  <div className="inline-flex w-full items-center gap-2">
                    <input
                      type="radio"
                      onClick={() =>
                        setIsColor({ ...isColor, color: 'yellow' })
                      }
                      className={`flex h-4 w-4 items-center justify-center bg-yellow-400 ${
                        isColor.color === 'yellow'
                          ? 'text-opacity-100'
                          : 'text-opacity-0'
                      } text-black`}
                    />
                    <p className="flex w-full justify-between pr-8 text-body text-gray-600">
                      15 per page
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center gap-2">
                    <input
                      type="radio"
                      onClick={() =>
                        setIsColor({ ...isColor, color: 'yellow' })
                      }
                      className={`flex h-4 w-4 items-center justify-center bg-yellow-400 ${
                        isColor.color === 'yellow'
                          ? 'text-opacity-100'
                          : 'text-opacity-0'
                      } text-black`}
                    />
                    <p className="flex w-full justify-between pr-8 text-body text-gray-600">
                      20 per page
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center gap-2">
                    <input
                      type="radio"
                      onClick={() =>
                        setIsColor({ ...isColor, color: 'yellow' })
                      }
                      className={`flex h-4 w-4 items-center justify-center bg-yellow-400 ${
                        isColor.color === 'yellow'
                          ? 'text-opacity-100'
                          : 'text-opacity-0'
                      } text-black`}
                    />
                    <p className="flex w-full justify-between pr-8 text-body text-gray-600">
                      25 per page
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center gap-2">
                    <input
                      type="radio"
                      onClick={() =>
                        setIsColor({ ...isColor, color: 'yellow' })
                      }
                      className={`flex h-4 w-4 items-center justify-center bg-yellow-400 ${
                        isColor.color === 'yellow'
                          ? 'text-opacity-100'
                          : 'text-opacity-0'
                      } text-black`}
                    />
                    <p className="flex w-full justify-between pr-8 text-body text-gray-600">
                      30 per page
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center gap-2">
                    <input
                      type="radio"
                      onClick={() =>
                        setIsColor({ ...isColor, color: 'yellow' })
                      }
                      className={`flex h-4 w-4 items-center justify-center bg-yellow-400 ${
                        isColor.color === 'yellow'
                          ? 'text-opacity-100'
                          : 'text-opacity-0'
                      } text-black`}
                    />
                    <p className="flex w-full justify-between pr-8 text-body text-gray-600">
                      35 per page
                    </p>
                  </div>
                </div>
              </div>

              {/* when shad clicking on sort by */}

              <div
                className={`absolute top-0 flex h-full w-full  flex-col gap-3 bg-white py-5 
              ${
                filterOn.type !== 'Sort by'
                  ? 'translate-x-[1000px]'
                  : 'translate-x-0'
              } duration-300`}
              >
                <div className="flex w-full flex-col items-center gap-2">
                  {sortList.map((item) => (
                    <div
                      key={item.id}
                      className="inline-flex w-full items-center gap-2"
                    >
                      <input
                        type="radio"
                        onClick={() =>
                          setIsColor({ ...isColor, color: 'yellow' })
                        }
                        className={`flex h-4 w-4 items-center justify-center bg-yellow-400 ${
                          isColor.color === 'yellow'
                            ? 'text-opacity-100'
                            : 'text-opacity-0'
                        } text-black`}
                      />
                      <p className="flex w-full justify-between pr-8 text-body text-gray-600">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeadingWithFilter;
