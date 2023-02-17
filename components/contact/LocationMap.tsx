import { AnimatePresence, motion } from 'framer-motion';
import { fadeAnim } from '@/lib/motion';
import Image from 'next/image';
import map from "public/map.webp"
export default function LocationMap() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hide"
        animate="show"
        exit="hide"
        variants={fadeAnim}
        className="flex w-full items-center justify-center overflow-hidden rounded-2xl"
      >
        <motion.div className="flex" />
        <Image width={10000}  height={1000} alt="map" src={map} loading="lazy" layout='responsive' className='object-cover object-center w-full h-auto max-h-[400px]' />
      </motion.div>
    </AnimatePresence>
  );
}

// it's from  https://www.mapbox.com/
