import { Icon } from "./icon";

type Props = {
  id: number;
  icon: string | any;
  name: string;
};
export const lastOneInNav: Props[] = [
  {
    id: 1,
    icon: <Icon className="w-7 fill-slate-800" />,
    name: "Compare",
  },
  {
    id: 2,
    icon: <Icon className="w-7 fill-slate-800" />,
    name: "Wishlist",
  },
  {
    id: 3,
    icon: <Icon className="w-7 fill-slate-800" />,
    name: "Cart",
  },
  {
    id: 4,
    icon: <Icon className="w-7 fill-slate-800" />,
    name: "Login",
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
    icon: <Icon className="w-7 fill-emerald-500" />,
    name: "Deals",
  },
  {
    id: 2,
    icon: "",
    name: "Home",
    subMenu: [
      {
        id: 1,
        name: "Home",
      },
      {
        id: 2,
        name: "Home",
      },
      {
        id: 3,
        name: "Home",
      },
      {
        id: 4,
        name: "Home",
      },
      {
        id: 5,
        name: "Home",
      },
      {
        id: 6,
        name: "Home",
      },
    ],
  },
  {
    id: 3,
    icon: "",
    name: "About",
  },
  {
    id: 4,
    icon: "",
    name: "Shop",
    subMenu: [
      {
        id: 1,
        name: "Home",
      },
      {
        id: 2,
        name: "Shop Grid – Right Sidebar",
      },
      {
        id: 3,
        name: "Shop Grid – Left Sidebar",
      },
      {
        id: 4,
        name: "Shop List – Right Sidebar",
      },
      {
        id: 5,
        name: "Shop List – Left Sidebar",
      },
      {
        id: 6,
        name: "Shop - wide",
      },
      {
        id: 7,
        name: "Shop - Filter",
      },
      {
        id: 8,
        name: "Single Product",
        subMenu: [
          {
            id: 1,
            name: "Product - Left Sidebar",
          },
          {
            id: 2,
            name: "Product - No Sidebar",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    icon: "",
    name: "Vender",
  },
  {
    id: 6,
    icon: "",
    name: "Mega menu",
    subMenu: [
      {
        id: 1,
        name: "poowow",
        sunMenu: [
          {
            id: 1,
            name: "kodidiod",
          },
          {
            id: 2,
            name: "kodidiod",
          },
          {
            id: 3,
            name: "kodidiod",
          },
          {
            id: 4,
            name: "kodidiod",
          },
          {
            id: 5,
            name: "kodidiod",
          },
        ],
      },
      {
        id: 2,
        name: "psfdf",
        sunMenu: [
          {
            id: 1,
            name: "kodidiod",
          },
          {
            id: 2,
            name: "kodidiod",
          },
          {
            id: 3,
            name: "kodidiod",
          },
          {
            id: 4,
            name: "kodidiod",
          },
          {
            id: 5,
            name: "kodidiod",
          },
        ],
      },
      {
        id: 3,
        name: "pooxdfdfwow",
        sunMenu: [
          {
            id: 1,
            name: "kodidiod",
          },
          {
            id: 2,
            name: "kodidiod",
          },
          {
            id: 3,
            name: "kodidiod",
          },
          {
            id: 4,
            name: "kodidiod",
          },
          {
            id: 5,
            name: "kodidiod",
          },
        ],
      },
      {
        id: 4,
        name: "",
        image: "ivide callia oru pic ind",
      },
    ],
  },
  {
    id: 7,
    icon: "",
    name: "Blog",
    subMenu: [
      {
        id: 1,
        name: "Blog Category List",
      },
      {
        id: 2,
        name: "Blog Category Big",
      },
      {
        id: 3,
        name: "Blog Category Wide",
      },
      {
        id: 4,
        name: "Single Post",
        subMenu: [
          {
            id: 1,
            name: "Right Sidebar",
          },
          {
            id: 2,
            name: "No Side bar",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    icon: "",
    name: "Pages",
    subMenu: [
      {
        id: 1,
        name: "Contact",
      },
      {
        id: 2,
        name: "Login",
      },
      {
        id: 3,
        name: "Register",
      },
      {
        id: 4,
        name: "Forgot password",
      },
      {
        id: 5,
        name: "404 Page",
      },
    ],
  },
  {
    id: 9,
    icon: "",
    name: "Contact",
  },
];

export const BrowseAllCategories: Props[] = [
  {
    id: 1,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 2,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 3,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 4,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 5,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 6,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 7,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 8,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 9,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 10,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 11,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 12,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 13,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
  {
    id: 14,
    icon: <Icon className="h-7" />,
    name: "Milks and Dairies",
  },
];

export const homeComponentBig = [
  {
    id: 1,
    picture:
      "https://i.pinimg.com/736x/e2/cc/22/e2cc22f4ddd67b652a849aea58250489.jpg",
    title: "Don't miss amazing grossly deals",
    subtitle: "Sign up for daily newsletter",
  },
  {
    id: 2,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    title: "ivde onnul setta valla apnim",
    subtitle: "Sign up for become a fool",
  },
];

export const fracturedProducts = [
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
  {
    id: Math.random(),
    name: "Red apple",
    items: "15 items",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeTeFYFOcyjz0ZkfiuKaFIgbbZM3xZ0upy5TOFL4k9Kazu9qgd_bnblPDPHVqapvfAw&usqp=CAU",
    bg: 'red',
  },
];

export const fracturedMainProduct = [
  {
    id:1,
    title:'Everyday Fresh & clean with our products',
    bg:'yellow',
    picture:'https://i.scdn.co/image/ab67616d00001e02da7ce598b01adcb421e7bdce',
  },
  {
    id:2,
    title:'Everyday Fresh & clean with our products',
    bg:'green',
    picture:'https://i.scdn.co/image/ab67616d00001e02da7ce598b01adcb421e7bdce',
  },
  {
    id:3,
    title:'Everyday Fresh & clean with our products',
    bg:'blue',
    picture:'https://i.scdn.co/image/ab67616d00001e02da7ce598b01adcb421e7bdce',
  },
] 

export const popularProductCategory = [
  {
    id: 1,
    name : 'All'
  },
  {
    id: 2,
    name : 'Milk & Daies'
  },
  {
    id: 3,
    name : 'Alvvsd'
  },
  {
    id: 4,
    name : 'Allafasf'
  },
  {
    id: 5,
    name : 'Allaf'
  },
  {
    id: 6,
    name : 'Aasdll'
  },
  {
    id: 7,
    name : 'Alsffl'
  },
]
export const popularProducts = [
  {
    id: Math.random(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating : 4.0,
    tags: 'black plum , organic , silopy kujjapu',
    rate : 10.4,
    offer: 7,
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture: "https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg" ,

  },
  {
    id: Math.random(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating : 4.0,
    tags: 'black plum , organic , silopy kujjapu',
    rate : 10.4,
    offer: 7,
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture: "https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg" ,

  },
  {
    id: Math.random(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating : 4.0,
    tags: 'black plum , organic , silopy kujjapu',
    rate : 10.4,
    offer: 7,
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture: "https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg" ,

  },
  {
    id: Math.random(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating : 4.0,
    tags: 'black plum , organic , silopy kujjapu',
    rate : 10.4,
    offer: 7,
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture: "https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg" ,

  },
  {
    id: Math.random(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating : 4.0,
    tags: 'black plum , organic , silopy kujjapu',
    rate : 10.4,
    offer: 7,
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture: "https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg" ,

  },
  {
    id: Math.random(),
    name: 'Nasltlee orginal coffee-mate coffee creamer',
    rating : 4.5,
    tags: 'black plum , organic , silopy kujjapu',
    rate : 10.4,
    offer: 7,
    picture: 'https://cdn.hswstatic.com/gif/koi.jpg',
    bacPicture: "https://cdn.britannica.com/99/234299-050-9CDD78E1/Koi-fish-swimming-carp.jpg" ,

  },
]

export const dailyBestSellerCategory = [
  {
    id: 1,
    name : 'Feathered'
  },
  {
    id: 2,
    name : 'Popular'
  },
  {
    id: 3,
    name : 'New added'
  },
]