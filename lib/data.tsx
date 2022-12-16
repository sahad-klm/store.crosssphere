import { Cart, Fire, Icon, Love, Spinner, User } from './icon';
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
  {
    id: 1,
    icon: (
      <Spinner className="scale-[.4] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 sm:scale-[.6]" />
    ),
    name: 'Compare',
  },
  {
    id: 2,
    icon: (
      <Love className="scale-[.4] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 max-sm:-mx-1 sm:scale-[.6]" />
    ),
    name: 'Wishlist',
  },
  {
    id: 3,
    icon: (
      <Cart className="scale-[.5] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 max-sm:-mx-5 sm:scale-[.6]" />
    ),
    name: 'Cart',
  },
  {
    id: 4,
    icon: (
      <User className="scale-[.6] fill-gray-700 duration-300 hover:fill-emerald-500 group-hover/btn:fill-emerald-500 sm:scale-[.6]" />
    ),
    name: 'Login',
  },
];
export const navbarLastCategory: {
  id: number;
  icon?: any;
  name: string;
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
    subMenu: [
      {
        id: 1,
        name: 'Home',
      },
      {
        id: 2,
        name: 'Home',
      },
      {
        id: 3,
        name: 'Home',
      },
      {
        id: 4,
        name: 'Home',
      },
      {
        id: 5,
        name: 'Home',
      },
      {
        id: 6,
        name: 'Home',
      },
    ],
  },
  {
    id: 3,
    icon: '',
    name: 'About',
  },
  {
    id: 4,
    icon: '',
    name: 'Shop',
    subMenu: [
      {
        id: 1,
        name: 'Home',
      },
      {
        id: 2,
        name: 'Shop Grid – Right Sidebar',
      },
      {
        id: 3,
        name: 'Shop Grid – Left Sidebar',
      },
      {
        id: 4,
        name: 'Shop List – Right Sidebar',
      },
      {
        id: 5,
        name: 'Shop List – Left Sidebar',
      },
      {
        id: 6,
        name: 'Shop - wide',
      },
      {
        id: 7,
        name: 'Shop - Filter',
      },
      {
        id: 8,
        name: 'Single Product',
        subMenu: [
          {
            id: 1,
            name: 'Product - Left Sidebar',
          },
          {
            id: 2,
            name: 'Product - No Sidebar',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    icon: '',
    name: 'Vender',
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
    id: 7,
    icon: '',
    name: 'Blog',
    subMenu: [
      {
        id: 1,
        name: 'Blog Category List',
      },
      {
        id: 2,
        name: 'Blog Category Big',
      },
      {
        id: 3,
        name: 'Blog Category Wide',
      },
      {
        id: 4,
        name: 'Single Post',
        subMenu: [
          {
            id: 1,
            name: 'Right Sidebar',
          },
          {
            id: 2,
            name: 'No Side bar',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    icon: '',
    name: 'Pages',
    subMenu: [
      {
        id: 1,
        name: 'Contact',
      },
      {
        id: 2,
        name: 'Login',
      },
      {
        id: 3,
        name: 'Register',
      },
      {
        id: 4,
        name: 'Forgot password',
      },
      {
        id: 5,
        name: '404 Page',
      },
    ],
  },
  {
    id: 9,
    icon: '',
    name: 'Contact',
  },
];

export const BrowseAllCategories: Props[] = [
  {
    id: 1,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#a7f3d0',
    items: 12,
  },
  {
    id: 2,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#4f46e5',
    items: 13,
  },
  {
    id: 3,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#a7f3d0',
    items: 15,
  },
  {
    id: 4,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#a7f3d0',
    items: 17,
  },
  {
    id: 5,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#4f46e5',
    items: 11,
  },
  {
    id: 6,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#a7f3d0',
    items: 16,
  },
  {
    id: 7,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#4f46e5',
    items: 17,
  },
  {
    id: 8,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#a7f3d0',
    items: 18,
  },
  {
    id: 9,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#818cf8',
    items: 11,
  },
  {
    id: 10,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#a7f3d0',
    items: 188,
  },
  {
    id: 11,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#818cf8',
    items: 13,
  },
  {
    id: 12,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#a7f3d0',
    items: 12,
  },
  {
    id: 13,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#a7f3d0',
    items: 16,
  },
  {
    id: 14,
    icon: <Icon className="h-7" />,
    name: 'Milks and Dairies',
    picture: '/favicon.ico',
    slug: 'milks-and-dairies',
    bg: '#818cf8',
    items: 18,
  },
];

export const homeComponentBig = [
  {
    id: 1,
    picture:
      'https://i.pinimg.com/originals/70/83/fe/7083fece988b641d8d427ca4f9947059.jpg',
    title: "Don't miss amazing grossly deals",
    subtitle: 'Sign up for daily newsletter',
  },
  {
    id: 2,
    picture: 'https://www.wallpaperuse.com/wallp/63-634911_m.jpg',
    title: 'ivde onnul setta valla apnim',
    subtitle: 'Sign up for become a fool',
  },
];

export const fracturedMainProduct = [
  {
    id: 1,
    title: 'Everyday Fresh & clean with our products',
    bg: 'yellow',
    picture: 'https://i.scdn.co/image/ab67616d00001e02da7ce598b01adcb421e7bdce',
  },
  {
    id: 2,
    title: 'Everyday Fresh & clean with our products',
    bg: 'green',
    picture: 'https://i.scdn.co/image/ab67616d00001e02da7ce598b01adcb421e7bdce',
  },
  {
    id: 3,
    title: 'Everyday Fresh & clean with our products',
    bg: 'blue',
    picture: 'https://i.scdn.co/image/ab67616d00001e02da7ce598b01adcb421e7bdce',
  },
];

export const popularProductCategory = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Milk & Daies',
  },
  {
    id: 3,
    name: 'Alvvsd',
  },
  {
    id: 4,
    name: 'Allafasf',
  },
  {
    id: 5,
    name: 'Allaf',
  },
  {
    id: 6,
    name: 'Aasdll',
  },
  {
    id: 7,
    name: 'Alsffl',
  },
];
export const popularProducts = [
  {
    id: uuid(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating: 4.0,
    tags: 'black plum, organic, silopy kujjapu',
    rate: 10.4,
    offer: 7,

    categorySlug: 'milks-and-dairies',
    category: 'Milk & Daies',
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture:
      'https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg',
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
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture:
      'https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg',
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
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture:
      'https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg',
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
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture:
      'https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg',
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
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture:
      'https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg',
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
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture:
      'https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg',
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
    name: 'Feathered',
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
    subtitle: 'Pathirikode Elnkur(po) majeri(vy) malppuram kerala india',
    icon: 'fas fa-map-marker-alt',
  },
  {
    id: 2,
    title: 'Call Us',
    subtitle: '+91 000-000-00',
    icon: 'fas fa-phone',
  },
  {
    id: 3,
    title: 'Email',
    subtitle: 'sales@gmile.com',
    icon: 'fas fa-envelope',
  },
  {
    id: 4,
    title: 'Hours',
    subtitle: '10:00 - 18:00, Mon - Sat',
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
    name: 'Face book',
    icon: 'fa-brands fa-facebook-f',
    link: '.facebook',
    color: '#3b5998',
  },

  {
    id: 3,
    name: 'Twitter',
    icon: 'fa-brands fa-twitter',
    link: '.facebook',
    color: '#00acee',
  },
  {
    id: 2,
    name: 'Instagram',
    icon: 'lni lni-instagram',
    link: '.facebook',
    color: '#8a3ab9',
  },
  {
    id: 4,
    name: 'Youtube',
    icon: 'lni lni-youtube',
    link: '.facebook',
    color: '#FF0000',
  },
  {
    id: 5,
    name: 'HaloTalk',
    icon: 'fa-solid fa-hashtag',
    link: '.facebook',
    color: '#D2B48C',
  },
];
