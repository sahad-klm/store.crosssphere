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
  footerToggle
}:{
  heading: string;
  links: Props[];
  className?: string | any
  onClick?: any | undefined,
  footerToggle?:any
  
}): JSX.Element | any => {

  return (
    <li className={`flex md:max-w-[300px] flex-col gap-[30px] ${className}`}>
      <h2
        className="font-head md:text-h4 text-[22px] text-gray-700 max-md:cursor-pointer w-full flex justify-between"
        onClick={() => onClick(heading)}>
        {heading} 
        <i className={`fa-solid fa-chevron-${footerToggle === heading ? 'up': 'down'} text-gray-500 duration-500 md:hidden block`} />
      </h2>
      <div className={`${footerToggle === heading ? "grid" :'hidden'} md:flex flex-col justify-between gap-3`}>
      {links?.map((item: Props) => (
        <a
        key={item.id}
        href={item.to}
        className="font-body md:text-base text-sm text-gray-900 duration-300 hover:translate-x-1 hover:text-emerald-500"
        >
          {item.name}
        </a>
      ))}
      </div>
    </li>
  );
};

export default FooterList;
