import React from 'react';
type Props = {
  id: React.Key;
  to: string;
  name: string;
};

const FooterList = ({ heading, links, className }: any): JSX.Element => {
  return (
    <li className={`flex max-w-[300px] flex-col gap-[10px] ${className}`}>
      <h2 className="font-head text-h4 text-gray-700">{heading}</h2>
      {links?.map((item: Props) => (
        <a key={item.id} href={item.to} className="font-body text-gray-900 hover:translate-x-1 duration-300 hover:text-emerald-500">
          {item.name}
        </a>
      ))}
    </li>
  );
};

export default FooterList;
