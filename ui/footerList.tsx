import React from 'react';
type Props = {
  id: React.Key;
  to: string;
  name: string;
};

const FooterList = ({
  heading,
  links,
  className,
  onClick,
  footerToggle,
}: {
  heading: string;
  links: Props[];
  className?: string | any;
  onClick?: any | undefined;
  footerToggle?: any;
}): JSX.Element | any => {
  return (
    <li className={`flex  flex-col gap-[30px] ${className}`}>
      <h2
        className="flex w-full justify-between font-head text-[22px] text-gray-700 max-md:cursor-pointer md:text-h4"
        onClick={() => onClick(heading)}
      >
        {heading}
        <i
          className={`fa-solid fa-chevron-${
            footerToggle === heading ? 'up' : 'down'
          } block text-gray-500 duration-500 md:hidden`}
        />
      </h2>
      <div
        className={`${
          footerToggle === heading ? 'grid' : 'hidden'
        } flex-col justify-between gap-3 md:flex`}
      >
        {links?.map((item: Props) => (
          <a
            aria-label="Read more"
            key={item.id}
            href={item.to}
            className="font-body text-sm text-gray-900 duration-300 hover:translate-x-1 hover:text-emerald-500 md:text-base"
          >
            {item.name}
          </a>
        ))}
      </div>
    </li>
  );
};

export default FooterList;
