import { TextCategoryMob, TextCategory } from '@/ui/TextCategory';
import React from 'react';
import { ButtonShopNow } from '@/ui/button';
import DailyBestSellerInOneLine from './inOneLine/DailyBestSellerInOneLine';
import { dailyBestSellerCategory } from '@/lib/data';
import Image from 'next/image';

const DailyBestSeller = (): any => {
  const [isSelectedCatN, setIsSelectedCatN] = React.useState(
    dailyBestSellerCategory[0].name,
  );
  const [toggleOn, setToggleOn] = React.useState<boolean | any>(false);

  const [mouseOver, setMouseOver] = React.useState<string | any>('');
  const [windowWidth, setWindowWidth] = React.useState<number | any>();

  const swiperPrev: number | any = () => {
    if (windowWidth > 1300) return 5;
    else if (windowWidth > 1200) return 4;
    else if (windowWidth > 978) return 3;
    else if (windowWidth > 788) return 2;
    else if (windowWidth > 768) return 1;
    else if (windowWidth < 768) return 1;
  };

  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });

      setWindowWidth(window.innerWidth);

      return window.removeEventListener('resize', () =>
        setWindowWidth(windowWidth),
      );
    }
  }, []);

  return (
    <div className="z-1 relative mt-10 flex w-full flex-col items-start  justify-center overflow-hidden px-4 md:mt-[50px]">
      <div className="mb-10 flex w-full items-center justify-between">
        <h4 className="mr-4  font-head text-[28px] text-gray-800 md:text-[32px]">
          Daily best sells
        </h4>
        <div className="flex flex-row flex-wrap gap-4">
          <div className="hidden flex-row flex-wrap gap-4 md:flex">
            {dailyBestSellerCategory?.map((item) => (
              <TextCategory
                key={item.id}
                {...item}
                isSelectedCatN={isSelectedCatN}
                setIsSelectedCatN={setIsSelectedCatN}
              />
            ))}
          </div>
          <div className="block md:hidden">
            <p
              onClick={() => setToggleOn(!toggleOn)}
              className="cursor-pointer font-head text-base leading-3 text-gray-800 md:text-base"
            >
              {isSelectedCatN}{' '}
              <i className="fa-solid fa-chevron-down relative ml-2 text-gray-800 duration-700" />
            </p>
            {toggleOn && (
              <TextCategoryMob
                setToggleOn={setToggleOn}
                list={dailyBestSellerCategory}
                isSelectedCatN={isSelectedCatN}
                setIsSelectedCatN={setIsSelectedCatN}
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-start gap-5 md:flex-row md:gap-6">
        <div className="relative z-[1] flex h-[70vh] w-full min-w-[40%] flex-grow-0 flex-col  items-start gap-12 overflow-hidden rounded-[18px] p-12 md:h-auto md:min-w-[300px] md:justify-evenly">
          <Image height={100}
            src="https://images.unsplash.com/photo-1520941911699-d1023ca7be1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&w=1000&q=80"
            alt=""
            loading='lazy'
            width={200}
            className=" absolute inset-0 -z-10 h-full w-full object-cover brightness-150"
          />
          <h1 className="font-head text-[38px] leading-9 text-gray-800 md:text-h2 md:leading-10">
            Bring <br className="hidden md:block" /> Nature into your home
          </h1>
          <ButtonShopNow paddingAndStyle="px-3 py-2" value="Shop Now" />
        </div>
        <div className=" hidden w-full items-center justify-center xl:flex">
          <DailyBestSellerInOneLine
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            slidesPerView={5}
          />
        </div>

        <div className="lapHide w-full items-center justify-center">
          <DailyBestSellerInOneLine
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            slidesPerView={4}
          />
        </div>
        <div className="tabHide w-full items-center justify-center">
          <DailyBestSellerInOneLine
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            slidesPerView={3}
          />
        </div>

        <div className="mobileHide w-full items-center justify-center">
          <DailyBestSellerInOneLine
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            slidesPerView={1}
          />
        </div>
        <div className="flex w-full items-center justify-center sm:hidden ">
          <DailyBestSellerInOneLine
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            slidesPerView={1}
          />
        </div>
      </div>
    </div>
  );
};

export default DailyBestSeller;
