import { CloseIcon } from '@/lib/icon';
import { productsData } from '@/lib/products';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Cart = ({
  isCart,
  setIsCart,
}: {
  isCart: boolean;
  setIsCart: React.SetStateAction<boolean | any>;
}) => {
  const [cartData, setCartData] = useState<object | any>();

  useEffect(() => {
    const data: any = localStorage.getItem('cartItem');

    setCartData(data);
  }, [isCart]);

  const length: any = 1;
  return (
    <motion.div
      initial="hide"
      animate={isCart ? 'show' : 'hide'}
      variants={{
        show: {
          x: '0%',
          opacity: '1',
        },
        hide: {
          x: '500%',
          opacity: '0',
        },
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-w-52 fixed top-20 right-20 z-[5000] max-w-sm rounded-lg border bg-white py-4  px-1 drop-shadow-xl"
    >
      <div className="relative flex h-5 w-full">
        <CloseIcon
          onClick={() => setIsCart(false)}
          className=" absolute -top-5 -right-1 scale-50 cursor-pointer fill-gray-800 duration-300 hover:rotate-45"
        />
      </div>
      {cartData?.length <= 0 || cartData === null ? (
        <p className="shrink-0 px-4 text-center font-body text-gray-600">
          Your cart is currently empty. <br /> 🫠
        </p>
      ) : (
        <div className="grid gap-3">
          <div className="flex w-full items-center justify-center gap-2">
            <div className="flex h-full w-[30%] shrink-0 items-center justify-center">
              <Image
                src={productsData[0].picture}
                alt={productsData[0].name}
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex w-full flex-col">
              <h1 className="font-head text-base leading-5 text-emerald-500">
                {productsData[0].name}
              </h1>
              <p className="text-body text-sm text-gray-500">
                Cateofory:{' '}
                <span className="text-gray-600 ">
                  {productsData[0].category}
                </span>{' '}
              </p>
            </div>
            <CloseIcon className="mr-3 w-20 scale-[.4] cursor-pointer fill-gray-500 duration-300 hover:fill-red-600" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
