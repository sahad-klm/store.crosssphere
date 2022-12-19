import { isBrowser } from '@/lib/helpers';
import { ArrowWithLine } from '@/lib/icon';
import { motion } from 'framer-motion';
import React from 'react';

const Welcome2Top = () => {
  const [yPosition, setYPosition] = React.useState<number>(0);

  const getYPosition = () => {
    setYPosition(pageYOffset);
  };

  const handleKeyDown = (e:KeyboardEvent) => {
    if (e.which === 27) {
      setYPosition(0)
    }
  }

  React.useEffect(() => {
    if (isBrowser) {
      console.log(pageYOffset);

      window.addEventListener('scroll', () => {
        const currentPosition = pageYOffset;
        setTimeout(() => {
          const currentPositionNow = pageYOffset;
          if (currentPosition === currentPositionNow) {
            setYPosition(0);
          }
        }, 50000);
        getYPosition();
      });

      getYPosition();

      return () => window.removeEventListener('scroll', () => getYPosition());
    }
  }, []);


  return (
    <motion.button
      initial="hide"
      animate={yPosition >= 300 ? 'show' : 'hide'}
      variants={{
        show: {
          y: '0%',
          opacity: 1
        },
        hide: {
          y: '100%',
          opacity : 0
        },
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onKeyDown={() => handleKeyDown}
      onClick={() => {
        scrollTo(0, 0)
        navigator.vibrate(200)
      }}
      className="fixed bottom-24 right-10 z-[900] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-700 bg-white outline-none"
    >
      <ArrowWithLine className="-m-3 -rotate-90 scale-50 fill-gray-700" />
    </motion.button>
  );
};

export default Welcome2Top;
