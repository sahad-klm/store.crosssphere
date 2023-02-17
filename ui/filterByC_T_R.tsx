import { ArrowDownFilled } from '@/lib/icon';
import { Products } from 'components/feathersCategories/Products';
import React from 'react';

const FilterByC_T_R = ({ onChange }: any) => {
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

  // Get min and max values when their state changes
  // React.useEffect(() => {

  //     onChange({ min: minVal, max: maxVal });

  // }, [minVal, maxVal, onChange]);

  return (
    <div className="flex flex-col gap-3 rounded-xl border px-4 pb-8 pt-3 shadow-md">
      {(isColor.color || isType.type || minVal > 0 || maxVal < 700) && (
        <div className="flex w-full flex-wrap items-center gap-2">
          {isColor.color && (
            <span className="cursor-pointer rounded bg-gray-100 p-1 text-xs text-gray-800">
              {isColor.color} &nbsp;&times;
            </span>
          )}
          {isType.type && (
            <span className="cursor-pointer rounded bg-gray-100 p-1 text-xs text-gray-800">
              {isType.type} &nbsp;&times;
            </span>
          )}
          {(minVal > 0 || maxVal < 700) && (
            <span className="cursor-pointer rounded bg-gray-100 p-1 text-xs text-gray-800">
              ${minVal} - ${maxVal} &nbsp;&times;
            </span>
          )}

          <p
            onClick={() => {}}
            className="cursor-pointer text-xs text-gray-800 underline hover:text-blue-800"
          >
            Clear all
          </p>
        </div>
      )}

      {/* color based */}
      <div className="flex flex-col gap-3">
        <h2
          onClick={() => setIsColor({ ...isColor, state: !isColor.state })}
          className="inline-flex items-center justify-between font-body text-xs uppercase text-gray-900"
        >
          color
          <ArrowDownFilled
            className={`-m-3 scale-50 fill-gray-500 ${
              isColor.state && 'rotate-180'
            } duration-300`}
          />
        </h2>

        <div
          className={`${isColor.state ? 'flex' : 'hidden'} items-center gap-3 `}
        >
          <span
            onClick={() => setIsColor({ ...isColor, color: 'yellow' })}
            className={`flex h-4 w-4 items-center justify-center bg-yellow-400 ${
              isColor.color === 'yellow' ? 'text-opacity-100' : 'text-opacity-0'
            } text-black`}
          >
            &#10003;
          </span>
          <p className="text-body text-gray-600">Yellow(1)</p>
        </div>
      </div>
      {/* type  based*/}

      <div className="mt-4 flex flex-col gap-3">
        <h2
          onClick={() => setIsType({ ...isType, state: !isType.state })}
          className="inline-flex items-center justify-between font-body text-xs uppercase text-gray-900"
        >
          Product type
          <ArrowDownFilled
            className={`-m-3 scale-50 fill-gray-500 ${
              isType.state && 'rotate-180'
            } duration-300`}
          />
        </h2>

        <div
          className={`${isType.state ? 'flex' : 'hidden'} items-center gap-3 `}
        >
          <span
            onClick={() => setIsType({ ...isType, type: 'Baby & Tyler' })}
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
            Mixed Veg & Fruit (1)
          </p>
        </div>
        <div
          className={`${isType.state ? 'flex' : 'hidden'} items-center gap-3 `}
        >
          <span
            onClick={() => setIsType({ ...isType, type: 'Hoodoo Foods' })}
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
            Organic Spices (1)
          </p>
        </div>
      </div>

      {/* price  based*/}

      <div className="mt-4 flex flex-col gap-3">
        <h2
          onClick={() => setIsPrice({ ...isPrice, state: !isPrice.state })}
          className="inline-flex items-center justify-between font-body text-xs uppercase text-gray-900"
        >
          price
          <ArrowDownFilled
            className={`-m-3 scale-50 fill-gray-500 ${
              isPrice.state && 'rotate-180'
            } duration-300`}
          />
        </h2>

        <div
          className={`${isPrice.state ? 'flex' : 'hidden'} items-center gap-3 `}
        >
          <div className="relative flex w-full flex-col">
            <input
              type="range"
              min={min}
              max={max}
              value={minVal}
              onChange={(event) => {
                const value = Math.min(Number(event.target.value), maxVal - 1);
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
                const value = Math.max(Number(event.target.value), minVal + 1);
                setMaxVal(value);
                maxValRef.current = value;
              }}
              className="thumb thumb--right w-full"
            />

            <div className="slider w-full">
              <div className="slider__track h-0.5 bg-gray-200" />
              <div ref={range} className="slider__range h-0.5 bg-emerald-500" />
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
    </div>
  );
};

export default FilterByC_T_R;
