import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZG9kb2luZyIsImEiOiJjbGJ3NzJhNnoxemk4M25xbmRlZnJtMDJqIn0.a26BTo_cU6_i6fa8blWJJA';
 
export default function LocationMap() {
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);
 
useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/dodoing/clbw76s0o000r14o5oa7o0m83',
center: [lng, lat],
zoom: zoom
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
<div className='flex items-center justify-center w-full rounded-2xl overflow-hidden'>
<div className="sidebar flex  h-96" />
<div ref={mapContainer} className="w-full flex-1 flex  map-container h-96" />
</div>
);
}
