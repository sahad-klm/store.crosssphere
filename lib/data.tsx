import {
  Cart,
  ConnectIcon,
  DealIcon,
  DeliveryIcon,
  Fire,
  FruitIcon,
  Icon,
  LeafIcon,
  Love,
  OfferIcon,
  OilIcon,
  OtherIcon,
  SatisfactionIcon,
  SpicesIcon,
  Spinner,
  User,
  VegetableIcon,
  WideIcon,
} from './icon';
import { v4 as uuid } from 'uuid';

type Props = {
  id: React.Key;
  icon: string | any;
  name: string;
  picture?: string;
  slug?: string;
  items?: number;
  bg?: string;
};

export const lastOneInNav: Props[] = [
  // {
  //   id: 1,
  //   icon: (
  //     <Spinner className="scale-[.4] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 sm:scale-[.6]" />
  //   ),
  //   name: 'Compare',
  // },
  // {
  //   id: 2,
  //   icon: (
  //     <Love className="scale-[.4] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 max-sm:-mx-1 sm:scale-[.6] " />
  //   ),
  //   name: 'Wishlist',
  // },
  {
    id: 3,
    icon: (
      <Cart className="scale-[.4] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 max-sm:-mx-5 sm:scale-[.6] " />
    ),
    name: 'Cart',
  },
  // {
  //   id: 4,
  //   icon: (
  //     <User className="scale-[.6] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 sm:scale-[.6]" />
  //   ),
  //   name: 'Login',
  // },
];
export const navbarLastCategory: {
  id: number;
  icon?: any;
  name: string;
  slug?: string;
  subMenu?: any[];
}[] = [
  {
    id: 1,
    icon: <Fire className="-mr-2 scale-50  fill-emerald-500" />,
    name: 'Deals',
    slug: '',
  },
  {
    id: 2,
    icon: '',
    name: 'Home',
    slug: '',
  },

  {
    id: 3,
    icon: '',
    name: 'About',
    slug: 'about',
  },
  {
    id: 4,
    icon: '',
    name: 'Shop',
    slug: 'collections',
  },
  {
    id: 6,
    icon: '',
    name: 'Mega menu',
    slug: '',
    subMenu: [
      {
        id: 1,
        name: 'Fruits & Vegetables',
        sunMenu: [
          {
            id: 1,
            name: 'kodidiod',
          },
          {
            id: 2,
            name: 'kodidiod',
          },
          {
            id: 3,
            name: 'kodidiod',
          },
          {
            id: 4,
            name: 'kodidiod',
          },
          {
            id: 5,
            name: 'kodidiod',
          },
        ],
      },
      {
        id: 2,
        name: 'Organic Spices',
        sunMenu: [
          {
            id: 1,
            name: 'kodidiod',
          },
          {
            id: 2,
            name: 'kodidiod',
          },
          {
            id: 3,
            name: 'kodidiod',
          },
          {
            id: 4,
            name: 'kodidiod',
          },
          {
            id: 5,
            name: 'kodidiod',
          },
        ],
      },
      {
        id: 3,
        name: 'Other Products',
        sunMenu: [
          {
            id: 1,
            name: 'kodidiod',
          },
          {
            id: 2,
            name: 'kodidiod',
          },
          {
            id: 3,
            name: 'kodidiod',
          },
          {
            id: 4,
            name: 'kodidiod',
          },
          {
            id: 5,
            name: 'kodidiod',
          },
        ],
      },
      {
        id: 4,
        name: '',
        image: '/map1.webp',
      },
    ],
  },
  {
    id: 9,
    icon: '',
    name: 'Contact',
    slug: 'contact',
  },
];

export const BrowseAllCategories: Props[] = [
  {
    id: 1,
    icon: <VegetableIcon className="h-[30px] w-[30px]" />,
    name: 'Vegetables',
    picture: '/featured/vegetables.png',
    slug: 'vegetables',
    bg: '#fffceb',
    items: 31,
  },
  {
    id: 2,
    icon: <SpicesIcon className="h-[30px] w-[30px]" />,
    name: 'Spices',
    picture: '/featured/spices.png',
    slug: 'spices',
    bg: '#ecffec',
    items: 16,
  },
  {
    id: 3,
    icon: <FruitIcon className="h-[30px] w-[30px]" />,
    name: 'Fruits',
    picture: '/featured/fruits.png',
    slug: 'fruits',
    bg: '#f2fce4',
    items: 18,
  },
  {
    id: 4,
    icon: <OilIcon className="h-[30px] w-[30px]" />,
    name: 'Oils',
    picture: '/featured/oils.png',
    slug: 'oils',
    bg: '#fff3eb',
    items: 2,
  },

  {
    id: 5,
    icon: <LeafIcon className="h-[30px] w-[30px]" />,
    name: 'Leaves',
    picture: '/featured/leafvegetable.png',
    slug: 'leaves',
    bg: '#fff3ff',
    items: 7,
  },
  {
    id: 6,
    icon: <OtherIcon className="h-[30px] w-[30px]" />,
    name: 'Powder',
    picture: '/featured/powder.png',
    slug: 'powder',
    bg: '#feefea',
    items: 5,
  },
  {
    id: 7,
    icon: <OtherIcon className="h-[30px] w-[30px]" />,
    name: 'Others',
    picture: '/featured/other.png',
    slug: 'others',
    bg: '#fffceb',
    items: 5,
  },
  {
    id: 8,
    icon: <OtherIcon className="h-[30px] w-[30px]" />,
    name: 'Flowers',
    picture: '/featured/flowers.png',
    slug: 'flowers',
    bg: '#feefea',
    items: 0,
  },
  {
    id: 9,
    icon: <OtherIcon className="h-[30px] w-[30px]" />,
    name: 'Fishes',
    picture: '/featured/fishes.png',
    slug: 'fishes',
    bg: '#feefea',
    items: 0,
  },
];

export const homeComponentBig = [
  {
    id: 1,
    picture: '/slider-1-1.webp',
    title: 'Welcome to International Trade',
    subtitle: 'Sign up for daily newsletter',
  },
  {
    id: 2,
    picture: '/slider-1-2.webp',
    title: 'Fresh Vegetables & Spices',
    subtitle: 'Tell your story',
  },
];

export const fracturedMainProduct = [
  {
    id: 1,
    title: 'freshness of cardamom in every drop of  Oil',
    bg: 'yellow',
    picture: '/featured3/cardamomoil1.png',
  },
  {
    id: 2,
    title: 'sun-ripened sweetness of fresh Mangoes',
    bg: 'green',
    picture: '/featured3/mango1.png',
  },
  {
    id: 3,
    title: 'Experience the tropical taste of fresh coconut',
    bg: 'blue',
    picture: '/featured3/coconut1.png',
  },
];

export const popularProductCategory = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Vegetables',
  },
  {
    id: 3,
    name: 'Spices',
  },
  {
    id: 4,
    name: 'Fruits',
  },
  {
    id: 5,
    name: 'Leaves',
  },
  {
    id: 6,
    name: 'Others',
  },
];

export const dailyBestSellerCategory = [
  {
    id: 1,
    name: 'Featured',
  },
  {
    id: 2,
    name: 'Popular',
  },
  {
    id: 3,
    name: 'New added',
  },
];
export const feathersInTotals = [
  {
    id: 1,
    title: 'Best prices',
    subtitle: 'lowest possible price',
    icon: <OfferIcon className="h-[55px] w-[55px]" />,
  },
  {
    id: 2,
    title: 'Wide Assortment',
    subtitle: '',
    icon: <WideIcon className="h-[55px] w-[55px]" />,
  },
  {
    id: 3,
    title: 'Shipping',
    subtitle: 'Air & Sea shipment',
    icon: <DeliveryIcon className="h-[55px] w-[55px]" />,
  },
  {
    id: 4,
    title: 'Great Deal',
    subtitle: 'high quality',
    icon: <DealIcon className="h-[55px] w-[55px]" />,
  },
  {
    id: 5,
    title: 'Satisfaction',
    subtitle: '24/7 Service',
    icon: <SatisfactionIcon className="h-[55px] w-[55px]" />,
  },
];

export const footerAddress = [
  {
    id: 1,
    title: 'Address',
    subtitle: 'Kolkalam, Chengottur po, Malappuram, Kerala, India, 676503',
    icon: 'fas fa-map-marker-alt',
  },
  {
    id: 2,
    title: 'Call Us',
    subtitle: '+91 7034405123',
    icon: 'fas fa-phone',
  },
  {
    id: 3,
    title: 'Email',
    subtitle: 'msahad736@gmail.com',
    icon: 'fas fa-envelope',
  },
  {
    id: 4,
    title: 'Hours',
    subtitle: '24*7',
    icon: 'far fa-clock',
  },
];
export const footerCompany = [
  {
    id: 1,
    name: 'About Us',
    to: 'AboutUs',
  },
  {
    id: 2,
    name: 'Delivery Information',
    to: 'delivery-information',
  },
  {
    id: 3,
    name: 'Privacy Policy',
    to: 'privacy-policy',
  },
  {
    id: 4,
    name: 'Terms & Condition',
    to: 'Terms-condition',
  },
  {
    id: 5,
    name: 'Contact Us',
    to: 'Contact-us',
  },
  {
    id: 6,
    name: 'Support Center',
    to: 'support-center',
  },

  {
    id: 7,
    name: 'Career',
    to: 'career',
  },
];
export const footerAccount = [
  {
    id: 1,
    name: 'Sing In',
    to: 'AboutUs',
  },
  {
    id: 2,
    name: 'View Cart',
    to: 'delivery-information',
  },
  {
    id: 3,
    name: 'My Wishlist',
    to: 'privacy-policy',
  },
  {
    id: 4,
    name: 'Track My Order',
    to: 'Terms-condition',
  },
  {
    id: 5,
    name: 'Help Ticket',
    to: 'Contact-us',
  },
  {
    id: 6,
    name: 'Shipping Details',
    to: 'support-center',
  },

  {
    id: 7,
    name: 'Compare products',
    to: 'career',
  },
];
export const footerCoparent = [
  {
    id: 1,
    name: 'Become a Vendor',
    to: 'AboutUs',
  },
  {
    id: 2,
    name: 'Affiliate Program',
    to: 'delivery-information',
  },
  {
    id: 3,
    name: 'Farm Business',
    to: 'privacy-policy',
  },
  {
    id: 4,
    name: 'Farm Careers',
    to: 'Terms-condition',
  },
  {
    id: 5,
    name: 'Our Suppliers',
    to: 'Contact-us',
  },
  {
    id: 6,
    name: 'Accessibility',
    to: 'support-center',
  },

  {
    id: 7,
    name: 'Promotions',
    to: 'career',
  },
];
export const footerInformation = [
  {
    id: 1,
    name: 'Vegetables',
    to: 'vegetables',
  },
  {
    id: 2,
    name: 'Spices',
    to: 'spices',
  },
  {
    id: 3,
    name: 'Fruits',
    to: 'fruits',
  },
  {
    id: 4,
    name: 'Curry Powders',
    to: 'powders',
  },
  {
    id: 5,
    name: 'Leaf Vegetables',
    to: 'leaves',
  },
  {
    id: 6,
    name: 'Oils',
    to: 'oils',
  },

  {
    id: 7,
    name: 'Others',
    to: 'others',
  },
];
export const footerApp_Payments = [
  {
    id: 1,
    title: 'From App Store or Google Play',
    name: 'apps',
    items: [
      {
        id: 1,
        name: 'app-store',
        to: 'http//:delivery-information',
        picture:
          'https://w7.pngwing.com/pngs/270/658/png-transparent-app-store-apple-google-play-apple-text-logo-mobile-phones.png',
      },
      {
        id: 2,
        name: 'play-store',
        link: 'https//:AboutUs.in',
        picture:
          'https://w7.pngwing.com/pngs/867/239/png-transparent-google-play-logo-google-play-android-app-store-play-now-button-text-label-logo.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Secured Payments Getaways',
    name: 'cards',
    items: [
      {
        id: 1,
        name: 'visa',
        link: 'https//:AboutUs.in',
        picture:
          'https://www.investopedia.com/thmb/3H96L9iC_VUhvsqmnypxfEQW4UA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-color-800x450-cee226a48bed4177b90351075b332227.jpg',
      },
      {
        id: 2,
        name: 'goi',
        link: 'https//:AboutUs.in',
        picture:
          'https://www.investopedia.com/thmb/3H96L9iC_VUhvsqmnypxfEQW4UA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-color-800x450-cee226a48bed4177b90351075b332227.jpg',
      },
      {
        id: 3,
        name: 'mater',
        link: 'https//:AboutUs.in',
        picture:
          'https://www.investopedia.com/thmb/3H96L9iC_VUhvsqmnypxfEQW4UA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-color-800x450-cee226a48bed4177b90351075b332227.jpg',
      },
      {
        id: 4,
        name: 'vills',
        link: 'https//:AboutUs.in',
        picture:
          'https://www.investopedia.com/thmb/3H96L9iC_VUhvsqmnypxfEQW4UA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-color-800x450-cee226a48bed4177b90351075b332227.jpg',
      },
    ],
  },
];
export const footerSocialMedia = [
  {
    id: 1,
    name: 'Facebook',
    icon: 'facebook',
    link: '.facebook',
    color: '#3b5998',
  },

  {
    id: 3,
    name: 'Twitter',
    icon: 'twitter',
    link: '.facebook',
    color: '#00acee',
  },
  {
    id: 2,
    name: 'Instagram',
    icon: 'instagram',
    link: '.facebook',
    color: '#8a3ab9',
  },
  {
    id: 4,
    name: 'Youtube',
    icon: 'youtube',
    link: '.facebook',
    color: '#FF0000',
  },
  {
    id: 5,
    name: 'HaloTalk',
    icon: 'hashtag',
    link: '.facebook',
    color: '#D2B48C',
  },
];

export const aboutCompany = [
  {
    id: 1,
    title: 'About us',
    subtitle: [
      {
        id: 1,
        paragraph:
          'Welcome to Aldan International, a leading international exporter of premium quality vegetables,spices and fruits.we take pride in our ability to provide high-quality products that are sourced from the best growers and suppliers from around the world.Our company is dedicated to providing a wide variety of vegetables,spices and fruits to our customers, ensuring that they receive the freshest, most delicious, and nutrient-rich produce. We work directly with our partner farmers and suppliers to ensure that our products are sustainably grown, harvested and processed to the highest standards.We are proud to be a part of the global food supply chain, providing our customers with the best quality vegetables,spices and fruits that are essential ingredients in the culinary traditions of many cultures. ',
      },
      {
        id: 2,
        paragraph:
          " Thank you for choosing Aldan International as your partner in international vegetable and spice exports",
      },
    ],
    picture: 'aboutus.jpg',
  },
];

export const what_We_Provide = [
  {
    id: 1,
    title: 'Best Prices',
    subtitle:
      'We provide the best price for you. We negotiate with merchants and find the lowest possible price.',
    icon: <OfferIcon />,
  },
  {
    id: 2,
    title: 'Wide Assortment',
    subtitle:
      'Wide assortment of products that can be found on our website,In a few clicks you will find what you are looking for.',
    icon: <WideIcon />,
  },
  {
    id: 3,
    title: 'Air & Sea Shipping',
    subtitle: `We offer air & sea to our customers for getting your goods to their destination on time and in perfect condition`,
    icon: <DeliveryIcon />,
  },
  {
    id: 4,
    title: 'Packing',
    subtitle:
      'We offer various types of packing such as poly bag, carton box, pallet and thermal packages.',
    icon: <ConnectIcon />,
  },
  {
    id: 5,
    title: '100% Satisfaction',
    subtitle: `We are committed to providing service and support throughout the entire exporting process`,
    icon: <SatisfactionIcon />,
  },
  {
    id: 6,
    title: 'Great Daily Deal',
    subtitle: `We ensures that inspect every products and verified the quality before on export.`,
    icon: <DealIcon />,
  },
];
export const ourPerformance = [
  {
    id: 1,
    title: 'Exceeding Expectations',
    smallPicture: 'plane.jpg',
    head: 'Our Performance',
    bigPicture: 'ship.jpg',
    subtitle: [
      {
        id: 1,
        text: 'We have a proven track record of delivering exceptional performance for our customers. ',
      },
      {
        id: 2,
        text: 'We have a deep understanding of the global market and stay up-to-date with the latest industry trends and developments. This enables us to identify new opportunities and provide our customers with a competitive edge.',
      },
    ],
  },
];

export const ourThings = [
  {
    id: 1,
    title: 'Who we are',
    subtitle:
      'we are a team of experienced professionals who are dedicated to providing exceptional exporting services to our customers.',
  },
  {
    id: 2,
    title: 'Our history',
    subtitle:
      'We began as a small operation with a focus on spices, but over the years, we have grown to become a leading player in the industry',
  },
  {
    id: 3,
    title: 'Our mission',
    subtitle:
      'Our mission is to be a reliable and trustworthy partner for our customers by providing exceptional exporting services.',
  },
  {
    id: 4,
    totalInAll: [
      {
        id: 6,
        bg: '/aveg.jpg',
      },
      {
        id: 1,
        title: 'Products',
        count: 50,
      },
      {
        id: 2,
        title: 'Happy clients',
        count: 11,
      },
      {
        id: 3,
        title: 'Countries',
        count: 10,
      },
      {
        id: 4,
        title: 'Glorious years',
        count: 2,
      },
      {
        id: 5,
        title: 'Products Sale',
        count: 12,
      },
    ],
  },
  {
    id: 5,
    outTeams: [
      {
        id: 1,
        title: 'Our Team',
        subtitle: 'Meet Our Expert Team',
        text: [
          {
            id: 1,
            text: `we have a team of highly skilled and experienced professionals who are dedicated to providing exceptional exporting services.`,
          },
          {
            id: 2,
            text: 'They are able to source a wide range of products to meet the diverse needs of our customers and able to provide personalized service to each client',
          },
        ],
        persons: [
          {
            id: 1,
            name: 'Ameen',
            picture: 'profile.svg',
            post: 'Manager',
            socialMedia: [
              {
                id: 1,
                link: '',
                platform: 'facebook',
              },
              {
                id: 2,
                link: '',
                platform: 'twitter',
              },
              {
                id: 3,
                link: '',
                platform: 'instagram',
              },
              {
                id: 4,
                link: '',
                platform: 'youtube',
              },
            ],
          },
          {
            id: 2,
            name: 'Masroor',
            picture: 'profile.svg',
            post: 'C.A',
            socialMedia: [
              {
                id: 1,
                link: '',
                platform: 'facebook',
              },
              {
                id: 2,
                link: '',
                platform: 'twitter',
              },
              {
                id: 3,
                link: '',
                platform: 'instagram',
              },
              {
                id: 4,
                link: '',
                platform: 'youtube',
              },
            ],
          },
        ],
      },
    ],
  },
];

export const contact = [
  {
    id: 1,
    subtitle: 'How can help you ?',
    title: 'Let us know how we can help you',
    text: [
      {
        id: 1,
        text: 'We offer a range of services and solutions to suit the needs of any business.',
      },
      {
        id: 2,
        text: 'We can help you with all the export formalities.Our team of agents are experienced in customs clearance and documentation. Contact us now to find out more!',
      },
    ],
  },
  {
    id: 2,
    feature: [
      {
        id: 1,
        order: '01',
        title: 'Visit Feedback',
        text: 'We receive feedback from our customers.We want to be able to maintain a high customer rating, provide a consistent experience for each Costumer',
      },
      {
        id: 2,
        order: '02',
        title: 'Employer Services',
        text: 'We take care of every aspect of finding, and hiring the best talent for your company.Our mission is to ensure a safe, ethical, and enjoyable workplace for everyone.',
      },
      {
        id: 3,
        order: '03',
        title: 'Billing Inquiries',
        text: 'Our Billing Inquiries service is a one-stop shop for all of your import and export needs,offering extensive knowledge and experience in all aspects of the trade.',
      },
      {
        id: 4,
        order: '04',
        title: 'General Inquiries',
        text: `We provide a general inquiries for goods that's as easy as texting through WhatsApp and E-mail!Just text the name of product.`,
      },
    ],
  },
  {
    id: 3,
    office: [
      {
        id: 1,
        title: 'Office',
        address: 'Kolkalam,Chengottur Po, Malappuram, Kerala, India 676503',
        phone: '+91 8075122414',
        email: 'info.aldaninternational@gmail.com',
      },
    ],
  },
];
