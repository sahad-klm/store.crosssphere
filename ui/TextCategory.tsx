import React from 'react';

type Props = {
  name: string;
  isSelectedCatN: any;
  setIsSelectedCatN: any;
};

function TextCategory({ name, isSelectedCatN, setIsSelectedCatN }: Props) {
  return (
    <p
      className={`font-head leading-3 ${
        isSelectedCatN === name ? 'text-emerald-500' : 'text-gray-800'
      } cursor-pointer transition hover:-translate-y-1 hover:text-emerald-500`}
      onClick={() => setIsSelectedCatN(name)}
    >
      {name}
    </p>
  );
}

export default TextCategory;
