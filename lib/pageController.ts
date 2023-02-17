import { BrowseAllCategories } from './data';

export const data = BrowseAllCategories.map((item) => item.slug);

function categorySlug() {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    return element;
  }
}

export const pageController = [
  {
    id: 1,
    page: 'Home',
    slug: '/',
    modules: [
      {
        id: 1,
        pageType: 'homeContent',
      },
      {
        id: 2,
        pageType: 'featuresCategory',
      },
      {
        id: 3,
        pageType: 'popularProducts',
      },
      {
        id: 4,
        pageType: 'dailyBestSeller',
      },
      {
        id: 5,
        pageType: 'dealsOfTheDay',
      },
      {
        id: 6,
        pageType: 'footerProducts',
      },
    ],
  },
  {
    id: 2,
    page: 'collections',
    slug: '/collections',
    modules: [
      {
        id: 1,
        pageType: 'collection',
      },
    ],
  },
  {
    id: 3,
    page: 'collections[slug]',
    slug: `/collections/${categorySlug()}`,
    modules: [
      {
        id: 1,
        pageType: 'collationSlug',
      },
    ],
  },
  {
    id: 4,
    page: 'collections[slug]',
    slug: `/${categorySlug()}/[slug]`,
    modules: [
      {
        id: 1,
        pageType: 'collections/[slug]',
      },
    ],
  },
  {
    id: 5,
    page: 'About',
    slug: `/about`,
    modules: [
      {
        id: 1,
        pageType: 'about',
      },
    ],
  },
  {
    id: 6,
    page: 'Contact',
    slug: `/contact`,
    modules: [
      {
        id: 1,
        pageType: 'contact',
      },
    ],
  },
];
