import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { AnimatePresence, motion } from 'framer-motion';
import { fadeAnim, formAnim } from 'utils/motion';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZG9kb2luZyIsImEiOiJjbGJ3NzJhNnoxemk4M25xbmRlZnJtMDJqIn0.a26BTo_cU6_i6fa8blWJJA';

export default function LocationMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(76.07555);
  const [lat, setLat] = useState(11.0405);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/dodoing/clbw9qefu002714o2nwqhtnsf',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <AnimatePresence mode='wait'>

    <motion.div
      initial="hide"
      animate="show"
      exit="hide"
      variants={fadeAnim}
      className="flex w-full items-center justify-center overflow-hidden rounded-2xl"
      >
      <motion.div className="flex" />
      <div
        ref={mapContainer}
        className="map-container flex h-[350px]  w-full flex-1"
        />
    </motion.div>
        </AnimatePresence>
  );
}

// it's from  https://www.mapbox.com/
