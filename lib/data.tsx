import { Cart, ConnectIcon, DealIcon, DeliveryIcon, Fire, FruitIcon, Icon, LeafIcon, Love, OfferIcon, OilIcon, OtherIcon, SatisfactionIcon, SpicesIcon, Spinner, User, VegetableIcon, WideIcon } from './icon';
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
  {
    id: 2,
    icon: (
      <Love className="scale-[.4] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 max-sm:-mx-1 sm:scale-[.6] " />
    ),
    name: 'Wishlist',
  },
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
    },
    {
      id: 2,
      icon: '',
      name: 'Home',
      slug: ''
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
      slug: 'collections/all'

    },
    {
      id: 6,
      icon: '',
      name: 'Mega menu',
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
    items: 13,
  },
  {
    id: 2,
    icon: <SpicesIcon className="h-[30px] w-[30px]" />,
    name: 'Spices',
    picture: '/featured/spices.png',
    slug: 'spices',
    bg: '#ecffec',
    items: 15,
  },
  {
    id: 3,
    icon: <FruitIcon className="h-[30px] w-[30px]" />,
    name: 'Fruits',
    picture: '/featured/fruits.png',
    slug: 'fruits',
    bg: '#f2fce4',
    items: 12,
  },
  {
    id: 4,
    icon: <OilIcon className="h-[30px] w-[30px]" />,
    name: 'Oils',
    picture: '/featured/oils.png',
    slug: 'oils',
    bg: '#fff3eb',
    items: 11,
  },

  {
    id: 5,
    icon: <LeafIcon className="h-[30px] w-[30px]" />,
    name: 'Leaves',
    picture: '/featured/leafvegetable.png',
    slug: 'leaves',
    bg: '#fff3ff',
    items: 16,
  },
  {
    id: 6,
    icon: <OtherIcon className="h-[30px] w-[30px]" />,
    name: 'Powder',
    picture: '/featured/powder.png',
    slug: 'powder',
    bg: '#feefea',
    items: 18,
  },
  {
    id: 7,
    icon: <OtherIcon className="h-[30px] w-[30px]" />,
    name: 'Others',
    picture: '/featured/other.png',
    slug: 'others',
    bg: '#fffceb',
    items: 11,
  },
  {
    id: 8,
    icon: <OtherIcon className="h-[30px] w-[30px]" />,
    name: 'Flowers',
    picture: '/featured/flowers.png',
    slug: 'flowers',
    bg: '#feefea',
    items: 17,
  },
  {
    id: 9,
    icon: <OtherIcon className="h-[30px] w-[30px]" />,
    name: 'Fishes',
    picture: '/featured/fishes.png',
    slug: 'fishes',
    bg: '#feefea',
    items: 17,
  },
];

export const homeComponentBig = [
  {
    id: 1,
    picture: '/slider-1-1.webp',
    title: "Welcome to International Trade",
    subtitle: 'Sign up for daily newsletter',
  },
  {
    id: 2,
    picture: '/slider-1-2.webp',
    title: "Fresh Vegetables & Spices",
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
    title: 'Best prices & offer',
    subtitle: 'Order %50 or more',
    icon: 'https://www.pngfind.com/pngs/m/155-1552084_construction-tools-png-clipart-black-and-white-transparent.png',
  },
  {
    id: 2,
    title: 'Free delivery',
    subtitle: '24/7 amazing service',
    icon: 'https://www.pngfind.com/pngs/m/155-1552084_construction-tools-png-clipart-black-and-white-transparent.png',
  },
  {
    id: 3,
    title: 'Great daily',
    subtitle: 'When you sing in',
    icon: 'https://www.pngfind.com/pngs/m/155-1552084_construction-tools-png-clipart-black-and-white-transparent.png',
  },
  {
    id: 4,
    title: 'Wide as presents',
    subtitle: 'Mega discount',
    icon: 'https://www.pngfind.com/pngs/m/155-1552084_construction-tools-png-clipart-black-and-white-transparent.png',
  },
  {
    id: 5,
    title: 'Easy return',
    subtitle: 'Within than 1 years',
    icon: 'https://www.pngfind.com/pngs/m/155-1552084_construction-tools-png-clipart-black-and-white-transparent.png',
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
export const footerCoparent = [
  {
    id: 1,
    name: 'Sing In',
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
export const footerInformation = [
  {
    id: 1,
    name: 'Sing In',
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
    name: 'Marmalades',
    to: 'Marmalades',
  },
  {
    id: 5,
    name: 'Sour Cream and Dips',
    to: 'Sour Cream and Dips',
  },
  {
    id: 6,
    name: 'Tea & Kombucha',
    to: 'teakombucha',
  },

  {
    id: 7,
    name: 'Cheese',
    to: 'cheese',
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
          "At Fidora , we are a leading exporting company that specializes in sourcing and delivering high-quality products to customers worldwide. Our team of experienced professionals has a deep understanding of international trade regulations and a strong network of suppliers and distributors.",
      },
      {
        id: 2,
        paragraph:
          "We pride ourselves on our ability to provide personalized service and tailor our offerings to meet the specific needs of each of our clients. We understand the importance of timely delivery and work closely with our partners to ensure that all shipments are delivered on schedule.Our product offerings include a wide range of spices,Vegetables,fruits and others, and we are constantly updating our inventory to include the latest trends and innovations. We have a strong reputation for providing our customers with competitive prices and exceptional customer service",
      },
      {
        id: 3,
        paragraph:
          "If you're looking for a reliable and trustworthy exporting partner, look no further than Fidora international.",
      },
    ],
    picture: 'map1.webp',
  },
];

export const what_We_Provide = [
  {
    id: 1,
    title: 'Best Prices & Offers',
    subtitle:
      'We provide the best price for you. We negotiate with merchants and find the lowest possible price. We always give you the best price!',
    icon: <OfferIcon />,
  },
  {
    id: 2,
    title: 'Wide Assortment',
    subtitle:
      'We have a wide assortment of products that can be found on our website, and in a few clicks you will find what you are looking for.',
    icon: <WideIcon />,
  },
  {
    id: 3,
    title: 'Air & Sea Shipping',
    subtitle:
      'we can provide air or sea shipment, and the best part is that you do not need to do anything! Just tell us what you want shipped, we will take care of everything else.',
    icon: <DeliveryIcon />,
  },
  {
    id: 4,
    title: 'Packing',
    subtitle:
      'We provide a good packing service. We offer various types of packing such as poly bag, carton box, thermocol, pallet and thermal packages.',
    icon: <ConnectIcon />,
  },
  {
    id: 5,
    title: '100% Satisfaction',
    subtitle:
      'We offer customer satisfaction with a personal touch. We find out what the customer needs and then connect them to the best product at the best price.',
    icon: <SatisfactionIcon />,
  },
  {
    id: 6,
    title: 'Great Daily Deal',
    subtitle:
      'We offer a service that ensures that every product sale is authentic and high quality.inspect every product and verified the quality before on export.',
    icon: <DealIcon />,
  },
];
export const ourPerformance = [
  {
    id: 1,
    title: 'Exceeding Expectations',
    smallPicture: 'oila.jpg',
    head: 'Our Performance',
    bigPicture: 'bananaleaf1.jpeg',
    subtitle: [
      {
        id: 1,
        text: 'At Fidora, we have a proven track record of delivering exceptional performance for our customers. Our extensive experience in the exporting industry and commitment to providing high-quality products and services have enabled us to establish a reputation as a trusted and reliable partner',
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
      'we are a team of experienced professionals who are dedicated to providing exceptional exporting services to our customers.Choose us as your exporting partner and let us help you navigate the global market with ease.',
  },
  {
    id: 2,
    title: 'Our history',
    subtitle:
      'We have a long and rich history of providing exceptional exporting services to customers worldwide. Our company began as a small operation with a focus on spices, but over the years, we have grown to become a leading player in the industry',
  },
  {
    id: 3,
    title: 'Our mission',
    subtitle:
      'At Fidora, our mission is to be a reliable and trustworthy partner for our customers by providing exceptional exporting services. We strive to make the process of importing and exporting goods as seamless and efficient as possible',
  },
  {
    id: 4,
    totalInAll: [
      {
        id: 6,
        bg: '/vegba2.jpg',
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
        text: 'We can help you with all the export formalities. We specialize in export of high-end goods. Our team of agents are experienced in customs clearance and documentation. Contact us now to find out more!',
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
        text: 'We receive feedback from our customers.We want to be able to maintain a high customer rating, provide a consistent experience for each visitor, and work on improvements.',
      },
      {
        id: 2,
        order: '02',
        title: 'Employer Services',
        text: 'We take care of every aspect of finding, interviewing, and hiring the best talent for your company.Our mission is to ensure a safe, ethical, and enjoyable workplace for everyone.',
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
        address:
          'Kolkalam,Chengottur Po, Malappuram, Kerala, India 676503',
        phone: '+9170344 05123',
        email: 'msahad736@gmail.com',
      },
      {
        id: 2,
        title: 'Studio',
        address:
          'Kolkalam,Chengottur Po, Malappuram, Kerala, India 676503',
        phone: '+9170344 05123',
        email: 'sahadklm759@gmail.com',
      },
      {
        id: 3,
        title: 'Shop',
        address:
          'Kolkalam,Chengottur Po, Malappuram, Kerala, India 676503',
        phone: '+9170344 05123',
        email: 'msahad736@gmail.com',
      },
    ],
  },
];
