import { OneProductWithOffer } from '@/ui/OneProductWithOffer';
import { TextCategoryMob, TextCategory } from '@/ui/TextCategory';
import { dailyBestSellerCategory, popularProducts } from 'constants/data';
import React from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ButtonShopNow } from '@/ui/button';

const DailyBestSeller = (): any => {
  const [isSelectedCatN, setIsSelectedCatN] = React.useState(
    dailyBestSellerCategory[0].name,
  );
  const [toggleOn, setToggleOn] = React.useState<boolean | any>(false);

  const [mouseOver, setMouseOver] = React.useState<string | any>('');
  const [windowWidth, setWindowWidth] = React.useState<number|any>();
  


  const swiperPrev: number | any = () => {
    if (windowWidth <= 768) return 1;
    else if (windowWidth > 768) return Math.round((windowWidth - 400) / 300);
  };

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    return window.removeEventListener('resize',() => setWindowWidth(windowWidth))
  }, []);

  return (
    <div className="z-1 relative mt-[50px] flex w-full flex-col  items-start justify-center overflow-hidden px-4">
      <div className="mb-7 flex w-full items-center justify-between">
        <h4 className="mr-4 shrink-0 font-head text-[28px] text-gray-800 md:text-[32px]">
          Daily best sells
        </h4>
        <div className="flex flex-row flex-wrap gap-4">
          <div className='md:flex hidden flex-row flex-wrap gap-4'>
          {dailyBestSellerCategory?.map((item) => (
            <TextCategory
            key={item.id}
            {...item}
            isSelectedCatN={isSelectedCatN}
            setIsSelectedCatN={setIsSelectedCatN}
            />
            ))}
          (
            </div>
          <div className='md:hidden block'>
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
          )
        </div>
      </div>

      <div className="flex w-full flex-col justify-start gap-5 md:flex-row md:gap-6">
        <div className="relative z-[1] flex h-[70vh] w-full min-w-[40%] flex-grow-0 flex-col  items-start gap-12 overflow-hidden rounded-[18px] p-12 md:h-auto md:min-w-[280px] md:max-w-[300px] md:justify-evenly">
          <img
            src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
            width={200}
            className=" absolute inset-0 -z-10 h-full w-full object-cover brightness-150"
          />
          <h1 className="font-head text-[38px] leading-9 text-gray-800 md:text-h2 md:leading-10">
            Bring <br className="hidden md:block" /> Nature into your home
          </h1>
          <ButtonShopNow paddingAndStyle="px-3 py-2" value="Shop Now" />
        </div>
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={25}
          slidesPerView={swiperPrev()}
          navigation
          autoplay={{ delay: 5000 }}
          className="w-full"
        >
          {popularProducts?.map((item) => (
            <SwiperSlide key={item.id}>
              <OneProductWithOffer
                {...item}
                setMouseOver={setMouseOver}
                mouseOver={mouseOver}
                buttonStyle="add-to-cart"
                classNameForTotal="max-w-full md:h-full h-full"
                classNameForPic="h-[37vh]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DailyBestSeller;
