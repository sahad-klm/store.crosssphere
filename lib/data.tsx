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
      <Cart className="scale-[.5] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 max-sm:-mx-5 sm:scale-[.6] " />
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
      slug: '/'
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
      slug: '/collections/all'

    },
    {
      id: 6,
      icon: '',
      name: 'Mega menu',
      subMenu: [
        {
          id: 1,
          name: 'poowow',
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
          name: 'psfdf',
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
          name: 'pooxdfdfwow',
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
          image: 'ivide callia oru pic ind',
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
    title: "Don't miss amazing grossly deals",
    subtitle: 'Sign up for daily newsletter',
  },
  {
    id: 2,
    picture: '/slider-1-2.webp',
    title: "Don't miss amazing grossly deals",
    subtitle: 'Sign up for become a fool',
  },
];

export const fracturedMainProduct = [
  {
    id: 1,
    title: 'Everyday Fresh & clean with our products',
    bg: 'yellow',
    picture: '/featured3/cardamomoil1.png',
  },
  {
    id: 2,
    title: 'Everyday Fresh & clean with our products',
    bg: 'green',
    picture: '/featured3/mango1.png',
  },
  {
    id: 3,
    title: 'Everyday Fresh & clean with our products',
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
export const popularProducts = [
  {
    id: uuid(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating: 4.0,
    tags: 'black plum,silopy kujjapu,vegetable',
    rate: 10.4,
    offer: 7,

    categorySlug: 'fruits',
    category: 'Milk & Daies',
    picture: '/others/drycoconut.png',
    bacPicture:
      '',
    smallDetail:
      'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.',
    details: [
      {
        id: 1,
        part: 'Description',
        items: [
          {
            id: 1,
            title: '',
            detail:
              'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. <br/> Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped beside and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
          },
          {
            id: 2,
            title: 'Packaging & Delivery',
            detail:
              'Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly. ~ Scallop or far crud plain remarkably far by thus far iguana lewd precociously and less rattlesnake contrary caustic wow this near, alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.',
          },
          {
            id: 3,
            title: 'Suggested Use',
            detail: 'Refrigeration is not necessary. ~ Stir before serving',
          },
          {
            id: 4,
            title: 'Other Ingredients',
            detail:
              'Organic raw pecans, organic raw cashews. ~ This butter was produced using an LTG (Low-Temperature Grinding) process. ~ Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy, or soy',
          },
          {
            id: 5,
            title: 'Warnings',
            detail:
              'Oil separation occurs naturally. May contain pieces of shell.',
          },
        ],
      },
      {
        id: 2,
        part: 'Additional info',
        items: [
          {
            id: 1,
            detail: 'ivdea oru kundavum illa',
          },
        ],
      },
      {
        id: 3,
        part: 'Reviews',
        items: [
          {
            id: '1',
            name: 'shad kolkalm',
            date: 'Sep 14, 2022',
            title: 'CLEAN DESIGN, ROOMY & VIBRANT',
            text: 'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly',
            rating: 3.5,
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating: 4.0,
    tags: 'black plum, organic, silopy kujjapu',
    rate: 10.4,
    offer: 7,
    categorySlug: 'vegetables',
    category: 'vegetables',
    picture: '/spices/cardamom.png',
    bacPicture:
      '',
    smallDetail:
      'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.',
    details: [
      {
        id: 1,
        part: 'Description',
        items: [
          {
            id: 1,
            title: '',
            detail:
              'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. <br/> Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped beside and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
          },
          {
            id: 2,
            title: 'Packaging & Delivery',
            detail:
              'Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly. ~ Scallop or far crud plain remarkably far by thus far iguana lewd precociously and less rattlesnake contrary caustic wow this near, alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.',
          },
          {
            id: 3,
            title: 'Suggested Use',
            detail: 'Refrigeration is not necessary. ~ Stir before serving',
          },
          {
            id: 4,
            title: 'Other Ingredients',
            detail:
              'Organic raw pecans, organic raw cashews. ~ This butter was produced using an LTG (Low-Temperature Grinding) process. ~ Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy, or soy',
          },
          {
            id: 5,
            title: 'Warnings',
            detail:
              'Oil separation occurs naturally. May contain pieces of shell.',
          },
        ],
      },
      {
        id: 2,
        part: 'Additional info',
        items: [
          {
            id: 1,
            detail: 'ivdea oru kundavum illa',
          },
        ],
      },
      {
        id: 3,
        part: 'Reviews',
        items: [
          {
            id: '1',
            name: 'shad kolkalm',
            date: 'Sep 14, 2022',
            title: 'CLEAN DESIGN, ROOMY & VIBRANT',
            text: 'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly',
            rating: 3.5,
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating: 4.0,
    tags: 'black plum, organic, silopy kujjapu',
    rate: 10.4,
    offer: 7,
    categorySlug: 'milks-and-dairies',
    category: 'Milk & Daies',
    picture: '/fruits/plantain.png',
    bacPicture:
      '',
    smallDetail:
      'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.',
    details: [
      {
        id: 1,
        part: 'Description',
        items: [
          {
            id: 1,
            title: '',
            detail:
              'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. <br/> Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped beside and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
          },
          {
            id: 2,
            title: 'Packaging & Delivery',
            detail:
              'Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly. ~ Scallop or far crud plain remarkably far by thus far iguana lewd precociously and less rattlesnake contrary caustic wow this near, alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.',
          },
          {
            id: 3,
            title: 'Suggested Use',
            detail: 'Refrigeration is not necessary. ~ Stir before serving',
          },
          {
            id: 4,
            title: 'Other Ingredients',
            detail:
              'Organic raw pecans, organic raw cashews. ~ This butter was produced using an LTG (Low-Temperature Grinding) process. ~ Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy, or soy',
          },
          {
            id: 5,
            title: 'Warnings',
            detail:
              'Oil separation occurs naturally. May contain pieces of shell.',
          },
        ],
      },
      {
        id: 2,
        part: 'Additional info',
        items: [
          {
            id: 1,
            detail: 'ivdea oru kundavum illa',
          },
        ],
      },
      {
        id: 3,
        part: 'Reviews',
        items: [
          {
            id: '1',
            name: 'shad kolkalm',
            date: 'Sep 14, 2022',
            title: 'CLEAN DESIGN, ROOMY & VIBRANT',
            text: 'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly',
            rating: 3.5,
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating: 4.0,
    tags: 'black plum, organic, silopy kujjapu',
    rate: 10.4,
    offer: 7,
    categorySlug: 'milks-and-dairies',
    category: 'Milk & Daies',
    picture: '/spices/ginger.png',
    bacPicture:
      '',
    smallDetail:
      'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.',
    details: [
      {
        id: 1,
        part: 'Description',
        items: [
          {
            id: 1,
            title: '',
            detail:
              'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. <br/> Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped beside and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
          },
          {
            id: 2,
            title: 'Packaging & Delivery',
            detail:
              'Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly. ~ Scallop or far crud plain remarkably far by thus far iguana lewd precociously and less rattlesnake contrary caustic wow this near, alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.',
          },
          {
            id: 3,
            title: 'Suggested Use',
            detail: 'Refrigeration is not necessary. ~ Stir before serving',
          },
          {
            id: 4,
            title: 'Other Ingredients',
            detail:
              'Organic raw pecans, organic raw cashews. ~ This butter was produced using an LTG (Low-Temperature Grinding) process. ~ Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy, or soy',
          },
          {
            id: 5,
            title: 'Warnings',
            detail:
              'Oil separation occurs naturally. May contain pieces of shell.',
          },
        ],
      },
      {
        id: 2,
        part: 'Additional info',
        items: [
          {
            id: 1,
            detail: 'ivdea oru kundavum illa',
          },
        ],
      },
      {
        id: 3,
        part: 'Reviews',
        items: [
          {
            id: '1',
            name: 'shad kolkalm',
            date: 'Sep 14, 2022',
            title: 'CLEAN DESIGN, ROOMY & VIBRANT',
            text: 'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly',
            rating: 3.5,
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating: 4.0,
    tags: 'black plum, organic, silopy kujjapu',
    rate: 10.4,
    offer: 7,
    picture: '/spices/taramind.png',
    bacPicture:
      '',
    smallDetail:
      'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.',
    details: [
      {
        id: 1,
        part: 'Description',
        items: [
          {
            id: 1,
            title: '',
            detail:
              'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. <br/> Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped beside and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
          },
          {
            id: 2,
            title: 'Packaging & Delivery',
            detail:
              'Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly. ~ Scallop or far crud plain remarkably far by thus far iguana lewd precociously and less rattlesnake contrary caustic wow this near, alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.',
          },
          {
            id: 3,
            title: 'Suggested Use',
            detail: 'Refrigeration is not necessary. ~ Stir before serving',
          },
          {
            id: 4,
            title: 'Other Ingredients',
            detail:
              'Organic raw pecans, organic raw cashews. ~ This butter was produced using an LTG (Low-Temperature Grinding) process. ~ Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy, or soy',
          },
          {
            id: 5,
            title: 'Warnings',
            detail:
              'Oil separation occurs naturally. May contain pieces of shell.',
          },
        ],
      },
      {
        id: 2,
        part: 'Additional info',
        items: [
          {
            id: 1,
            detail: 'ivdea oru kundavum illa',
          },
        ],
      },
      {
        id: 3,
        part: 'Reviews',
        items: [
          {
            id: '1',
            name: 'shad kolkalm',
            date: 'Sep 14, 2022',
            title: 'CLEAN DESIGN, ROOMY & VIBRANT',
            text: 'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly',
            rating: 3.5,
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating: 4.5,
    tags: 'black plum, organic, silopy kujjapu',
    rate: 10.4,
    offer: 7,
    picture: '/veg/onion.png',
    bacPicture:
      '',
    smallDetail:
      'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.',
    details: [
      {
        id: 1,
        part: 'Description',
        items: [
          {
            id: 1,
            title: '',
            detail:
              'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. <br/> Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped beside and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
          },
          {
            id: 2,
            title: 'Packaging & Delivery',
            detail:
              'Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly. ~ Scallop or far crud plain remarkably far by thus far iguana lewd precociously and less rattlesnake contrary caustic wow this near, alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.',
          },
          {
            id: 3,
            title: 'Suggested Use',
            detail: 'Refrigeration is not necessary. ~ Stir before serving',
          },
          {
            id: 4,
            title: 'Other Ingredients',
            detail:
              'Organic raw pecans, organic raw cashews. ~ This butter was produced using an LTG (Low-Temperature Grinding) process. ~ Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy, or soy',
          },
          {
            id: 5,
            title: 'Warnings',
            detail:
              'Oil separation occurs naturally. May contain pieces of shell.',
          },
        ],
      },
      {
        id: 2,
        part: 'Additional info',
        items: [
          {
            id: 1,
            detail: 'ivdea oru kundavum illa',
          },
        ],
      },
      {
        id: 3,
        part: 'Reviews',
        items: [
          {
            id: '1',
            name: 'shad kolkalm',
            date: 'Sep 14, 2022',
            title: 'CLEAN DESIGN, ROOMY & VIBRANT',
            text: 'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly',
            rating: 3.5,
          },
        ],
      },
    ],
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
          "We have done exceptional things in the past. Today, we are doing exceptional things for the future.",
      },
      {
        id: 2,
        paragraph:
          "sion Exports has a rich history of raising the bar in the spices,vegetables and fruits industry.the focus has always been on export of live & fresh spices.our company has been expanding rapidly with mission to exceed industry standards by offering an extensive product line, focusing on product innovation and quality control.We stand by our mission to deliver quality products.Merchants from around the world were taking the arduous sea route just to lay their hands on this Queen of products. Realising the global demand for what grew liberally around his kingdom ",
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
    title: 'Your Partner for e-commerce grocery solution',
    smallPicture: 'bananaleaf1.jpeg',
    head: 'Our Performance',
    bigPicture: 'map1.webp',
    subtitle: [
      {
        id: 1,
        text: 'We offer a full range of export services to our clients, including FCL consolidation, container loading, and door-to-door delivery. We are a company that will provide you with a high level of service and goods at the best prices. We have an international team of experts who work closely with our clients to ensure their satisfaction',
      },
      {
        id: 2,
        text: 'We are leading exporters of organic spices, vegetables, and other edible items. With operations in continent, we operate with a high level of flexibility to suit customer requirements. Our company is dedicated to sourcing only the finest quality products and delivering them to our customers in a timely manner',
      },
    ],
  },
];

export const ourThings = [
  {
    id: 1,
    title: 'Who we are',
    subtitle:
      'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.',
  },
  {
    id: 2,
    title: 'Our history',
    subtitle:
      'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.',
  },
  {
    id: 3,
    title: 'Our mission',
    subtitle:
      'We make your business more profitable. We haveve done the work to find the best products for your customers and negotiate with suppliers for the best prices. We have done everything to help you focus on what you do best',
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
        title: 'Glorious years',
        count: 7,
      },
      {
        id: 2,
        title: 'Happy clients',
        count: 11,
      },
      {
        id: 3,
        title: 'Projects complete',
        count: 0,
      },
      {
        id: 4,
        title: 'Team advisor',
        count: 5,
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
            text: `We are a team of export specialists with years of experience in the industry.`,
          },
          {
            id: 2,
            text: 'We are here to help you find the best overseas markets and suppliers for your product. We take care of all the logistics and paperwork, so you can focus on what matters most: getting your product to market.',
          },
        ],
        persons: [
          {
            id: 1,
            name: 'Shad Klm',
            picture: 'profile.svg',
            post: 'Mothalai Of this Company',
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
        phone: '+91 70344 05123',
        email: 'msahad736@gmail.com',
      },
      {
        id: 2,
        title: 'Studio',
        address:
          'Kolkalam,Chengottur Po, Malappuram, Kerala, India 676503',
        phone: '+91 70344 05123',
        email: 'sahadklm759@gmail.com',
      },
      {
        id: 3,
        title: 'Shop',
        address:
          'Kolkalam,Chengottur Po, Malappuram, Kerala, India 676503',
        phone: '+91 70344 05123',
        email: 'msahad736@gmail.com',
      },
    ],
  },
];
