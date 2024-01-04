import { BrowseAllCategories } from '@/lib/data';
import { ArrowWithLine } from '@/lib/icon';
import Pagination from '@/ui/Pagination';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { fadeAnim } from '@/lib/motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

let PageSize = 9;
const Collations = (): any => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageRange = firstPageIndex + PageSize;
    return BrowseAllCategories?.slice(firstPageIndex, lastPageRange);
  }, [currentPage]);

  return (
    <div className="relative mt-[100px] flex flex-col items-center justify-center  overflow-hidden px-4 lg:mt-5">
      <h4 className="mb-4 w-full text-left font-head text-[28px] text-gray-800 md:text-[32px]">
        Collections
      </h4>
      <LazyMotion features={domAnimation}>
        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3">
          {currentTableData?.map((item) => (
            <m.div
              initial="hide"
              animate="show"
              exit="hide"
              viewport={{ once: false, amount: 0.25 }}
              variants={fadeAnim}
              key={item.id}
              className=" flex h-[300px] w-full flex-col items-center justify-center"
            >
              <Link
                aria-label="Read more"
                href={`${usePathname()}/${item.slug}`}
              >
                <div className="grid place-content-center">
                  <Image
                    width={200}
                    height={200}
                    src={item.picture!}
                    alt={item.name}
                    className="h-[200px] scale-[.9] object-contain duration-300 hover:scale-100"
                  />
                </div>
              </Link>
              <Link
                aria-label="Read more"
                href={`${usePathname()}/${item.slug}`}
                className="group/btn flex h-16 w-full items-center justify-start gap-3 rounded bg-gray-100 px-4 font-head text-base text-gray-800 duration-300 hover:text-emerald-500"
              >
                {item.name}{' '}
                <ArrowWithLine className="-m-3 scale-[.55] fill-gray-800 duration-300 group-hover/btn:fill-emerald-500" />
              </Link>
            </m.div>
          ))}
        </div>
      </LazyMotion>
      <Pagination
        className="pagination-bar mt-4 mb-[50px] items-center"
        currentPage={currentPage}
        totalCount={Math.ceil(BrowseAllCategories.length / PageSize)}
        pageSize={PageSize}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Collations;
