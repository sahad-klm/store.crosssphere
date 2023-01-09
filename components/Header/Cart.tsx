import { CloseIcon } from '@/lib/icon'
import { productsData } from '@/lib/products'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Cart = ({ isCart, setIsCart }: { isCart: boolean, setIsCart: React.SetStateAction<boolean | any> }) => {
  const [cartData, setCartData] = useState<object | any>()

  useEffect(() => {
    const data: any = localStorage.getItem('cartItem')

    setCartData(data)

  }, [isCart])


  // console.log(localStorage.getItem('cartItem'));
  


  const length: any = 1
  return (
    <motion.div
      initial="hide"
      animate={isCart ? 'show' : 'hide'}
      variants={{
        show: {
          x: '0%',
          opacity: '1'
        },
        hide: {
          x: '100%',
          opacity: '0'
        },
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className='fixed top-20 right-20 min-w-52 max-w-sm py-4 px-1 bg-white rounded-lg border  drop-shadow-xl z-[5000]'>
      <div className='w-full relative flex h-5'>
        <CloseIcon onClick={() => setIsCart(false)} className=' absolute -top-5 -right-1 fill-gray-800 scale-50 hover:rotate-45 duration-300 cursor-pointer' />
      </div>
      {(cartData?.length <= 0 || cartData === null) ? <p className='text-gray-600 font-body shrink-0 text-center px-4'>Your cart is currently empty. <br /> 🫠</p> : <div className='grid gap-3'>


          <div className='flex w-full items-center justify-center gap-2'>
            <div className='h-full w-[30%] flex items-center justify-center shrink-0'><Image src={productsData[0].picture} alt={productsData[0].name} width={100} height={100} className='object-cover w-full h-full' /></div>
            <div className='flex flex-col w-full'>
              <h1 className='text-emerald-500 text-base leading-5 font-head'>{productsData[0].name}</h1>
              <p className='text-gray-500 text-body text-sm'>Cateofory: <span className='text-gray-600 '>{productsData[0].category}</span> </p>
            </div>
            <CloseIcon className='fill-gray-500 scale-[.4] w-20 hover:fill-red-600 duration-300 cursor-pointer mr-3' />
          </div>
        </div>}
    </motion.div>
  )
}

export default Cart