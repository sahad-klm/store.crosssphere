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
  className?: string
  onClick?: any | undefined,
  footerToggle?:any
  
}): JSX.Element | any => {

  return (
    <li className={`flex md:max-w-[300px] flex-col gap-[10px] ${className}`}>
      <h2
        className="font-head text-h4 text-gray-700 max-md:cursor-pointer w-full flex justify-between"
        onClick={() => onClick(heading)}
      >
        {heading} 
        <i className={`fa-solid fa-chevron-${footerToggle === heading ? 'up': 'down'} text-gray-500 duration-500 md:hidden block`} />
      </h2>
      <div className={`${footerToggle === heading ? "grid" :'hidden'} md:grid`}>
      {links?.map((item: Props) => (
        <a
        key={item.id}
        href={item.to}
        className="font-body text-gray-900 duration-300 hover:translate-x-1 hover:text-emerald-500"
        >
          {item.name}
        </a>
      ))}
      </div>
    </li>
  );
};

export default FooterList;
