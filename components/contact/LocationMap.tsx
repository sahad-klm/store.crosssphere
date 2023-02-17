import { AnimatePresence, motion } from 'framer-motion';
import { fadeAnim } from '@/lib/motion';
import Image from 'next/image';
import map from "public/map.webp"
import Link from 'next/link';
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
        <Link href='https://www.google.com/maps/place/Kolkkalam+Kizhakethala+Mosque+%E0%B4%95%E0%B5%8B%E0%B5%BD%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%B3%E0%B4%82+%E0%B4%95%E0%B4%BF%E0%B4%B4%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%87%E0%B4%A4%E0%B4%B2+%E0%B4%AE%E0%B4%B8%E0%B5%8D%E0%B4%9C%E0%B4%BF%E0%B4%A6%E0%B5%8D/@11.7859673,75.2559655,6z/data=!4m6!3m5!1s0x3ba7b578ebbc63ab:0xedccc61daafddf5c!8m2!3d10.9758243!4d76.0781594!16s%2Fg%2F11fylnt1pd' target="_blank" className='w-full h-full'>
        <Image width={10000}  height={1000} alt="map" src={map} loading="lazy" layout='responsive' className='object-cover object-center w-full h-auto max-h-[400px]' />
      </Link>
      </motion.div>
    </AnimatePresence>
  );
}

// it's from  https://www.mapbox.com/
