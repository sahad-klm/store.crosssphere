import Image from 'next/image';
import React from 'react';

const OfferBoxInCollection = ({ className }: { className?: string }) => {
  return (
    <div
      className={`relative z-0 flex flex-col  justify-center gap-1 overflow-hidden rounded-xl bg-cyan-200 p-12 shadow-md ${className}`}
    >
      <small className="font-body text-gray-600">Organic</small>
      <p className="font-head text-2xl leading-8">
        Fresh <span className="text-emerald-500">Organic</span> Product
      </p>

      <Image
        width={1440}
        height={500}
        loading="lazy"
        src="https://mailtrap.io/wp-content/uploads/2020/10/nbsp-and-HTML-Space-Challenges-and-Tricks_small-1.png"
        alt=""
        className="absolute bottom-0 -right-[30%] -z-10 h-full object-cover"
      />
    </div>
  );
};

export default OfferBoxInCollection;
