import React, { createContext, useContext, useEffect, useState } from 'react';

const initialContext = {
  isPageTransition: false,
};

const SiteContext = createContext<any>({
  context: initialContext,
  setContext: () => null,
});

const SiteContextProvider = ({ data, children }: any): any => {
  const { productCounts } = data;

  const [context, setContext] = useState({
    ...initialContext,
    ...{ productCounts },
  });
  const [initContext, setInitContext] = useState(false);

  useEffect(() => {
    if (initContext === false) {
      const initialledCheckOut = async () => {
        const existingCheckOutId =
          typeof window !== 'undefined'
            ? localStorage.getItem('shopifyCheckoutID')
            : false;

        if (existingCheckOutId) {
          console.log(
            'Invalid item in checkout. This variant was probably unknown.',
          );
        }
      };
    }
  }, [initContext, context, setContext]);

  return (
    <SiteContext.Provider
      value={{
        context,
        setContext,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

function useSiteContext() {
  const { context } = useContext(SiteContext);
  return context;
}

const useTogglePageTransition = () => {
  const {
    context: { isPageTransition },
    setContext,
  } = useContext(SiteContext);

  async function togglePageTransition(state: any) {
    setContext((prevState: any) => {
      return { ...prevState, isPageTransition: state };
    });
  }

  return togglePageTransition;
};

export { SiteContextProvider, useTogglePageTransition, useSiteContext };
