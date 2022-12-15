import { useCategoryProductsFind } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import React from "react";
import HeadRootNames from "./HeadRootNames";


const ProductDetails = (data) => {
  const pathName=  usePathname()

  console.log(data);
  

  const name = pathName
    ?.split('/')
    .slice(2)
    .map((item) => item.toString());


  const products: any = useCategoryProductsFind(name);

  return <div className="relative mx-4 mt-[100px] flex flex-col items-center justify-center lg:mt-5"
  >
    <HeadRootNames />
    </div>;
};

export default ProductDetails;
