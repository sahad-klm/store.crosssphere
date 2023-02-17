import React from 'react';
import classnames from 'classnames';

import { DOTS, usePagination } from '@/lib/helpers';
const Pagination = (props: any): any => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 5,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) return;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={`pagination-container ${className}`}>
      <li
        className={`'pagination-item ${currentPage === 1 && 'hidden'}`}
        onClick={onPrevious}
      >
        <div className="arrow left mr-5" />
      </li>
      {paginationRange.map((pageNumber: any, idx: React.Key) => {
        if (pageNumber === DOTS) {
          return (
            <li key={idx} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={idx}
            className={classnames(
              'pagination-item bg-gray-200 font-head text-base text-gray-700 duration-300',
              {
                selected: pageNumber === currentPage,
              },
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
