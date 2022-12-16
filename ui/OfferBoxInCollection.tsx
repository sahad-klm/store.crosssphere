import React from "react";

const OfferBoxInCollection = ({className}:{className?: string}) => {
  return (
    <div className={`relative z-0 flex flex-col  justify-center gap-1 overflow-hidden rounded-xl bg-cyan-200 p-12 shadow-md max-xl:h-[70vh] ${className}`}>
              <small className="font-body text-gray-600">Organic</small>
              <p className="font-head text-2xl leading-8">
                Save 17% on <span className="text-emerald-500">Organic</span>{' '}
                Juice
              </p>

              <img
                src="https://mailtrap.io/wp-content/uploads/2020/10/nbsp-and-HTML-Space-Challenges-and-Tricks_small-1.png"
                alt=""
                className="absolute bottom-0 -right-[30%] -z-10 h-full object-cover"
              />
            </div>
  
    )
};

export default OfferBoxInCollection;
