import Head from 'next/head';
import React from 'react';

const HeadSEO = ({ site = {}, page = {}, schema }: any) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Aldan International - Elevating your culinary journey with premium spice exports. Explore a world of flavors that enhance your dishes, sourced from the finest ingredients and crafted for excellence. Spice up your culinary adventures with us."
      />

      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />

      <link rel="icon" href="seo.png" sizes="any" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.lineicons.com/3.0/lineicons.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <script src="https://cdn.tailwindcss.com" />

      <meta property="fb:app_id" content="123456789" />
      <meta property="og:url" content="https://aldaninternational.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Aldan International - Elevating Culinary Experiences" />
      <meta property="og:image" content="og_image.png" />
      <meta
        property="og:image:alt"
        content="Aldan International - Elevating your culinary journey with premium spice exports. Explore a world of flavors that enhance your dishes, sourced from the finest ingredients and crafted for excellence. Spice up your culinary adventures with us."
      />
      <meta property="og:description" content="Aldan International - Elevating your culinary journey with premium spice exports. Explore a world of flavors that enhance your dishes, sourced from the finest ingredients and crafted for excellence. Spice up your culinary adventures with us." />
      <meta property="og:site_name" content="Aldan International" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content="shad klm" />
    </Head>
  );
};

export default HeadSEO;
