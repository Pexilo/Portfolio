import Wheel1 from "@assets/agostore/agostore_mockup_wheel1.jpg";
import Wheel2 from "@assets/agostore/agostore_mockup_wheel2.jpg";
import Wheel3 from "@assets/agostore/agostore_mockup_wheel3.jpg";

export type Tire = {
  id: number;
  name: string;
  model: string;
  size: string;
  image: string;
  tags: Tags;
  stocks: Stock[];
};

export type Stock = {
  id: number;
  country: string;
  flag: string;
  name: string;
  price: number;
  stock: number;
};

type Tags = {
  range?: "PREMIUM" | "BUGET" | "MID-RANGE";
  eXtraLoad?: "XL";
  ms?: "M+S";
  treepmfs?: "3PMSF";
  class?: "C1" | "C2" | "C3";
  euDir?: string;
};

export const tires: Tire[] = [
  {
    id: 1,
    name: "MICHELIN",
    model: "ALPIN6",
    size: "215/45R16",
    image: Wheel1,
    tags: {
      range: "PREMIUM",
      eXtraLoad: "XL",
      ms: "M+S",
      treepmfs: "3PMSF",
      class: "C1",
      euDir: "2020/740",
    },
    stocks: [
      {
        id: 1,
        country: "Allemand",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e9-1f1ea.svg",
        name: "Company A",
        price: 101.13,
        stock: 27,
      },
      {
        id: 2,
        country: "Espagnol",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ea-1f1f8.svg",
        name: "Company B",
        price: 127.5,
        stock: 15,
      },
      {
        id: 3,
        country: "Néeerlandais",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f3-1f1f1.svg",
        name: "Company C",
        price: 144.1,
        stock: 10,
      },
      {
        id: 4,
        country: "Néeerlandais",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f3-1f1f1.svg",
        name: "Company D",
        price: 160.0,
        stock: 5,
      },
      {
        id: 4,
        country: "Belge",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e7-1f1ea.svg",
        name: "Company E",
        price: 177.7,
        stock: 3,
      },
    ],
  },
  {
    id: 2,
    name: "MICHELIN",
    model: "P.SP4",
    size: "215/45R16",
    image: Wheel2,
    tags: {
      range: "PREMIUM",
      eXtraLoad: "XL",
      class: "C2",
      euDir: "2020/740",
    },
    stocks: [
      {
        id: 1,
        country: "Belge",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e7-1f1ea.svg",
        name: "Company A",
        price: 301.13,
        stock: 1,
      },
      {
        id: 2,
        country: "Allemand",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e9-1f1ea.svg",
        name: "Company B",
        price: 306.7,
        stock: 9,
      },
      {
        id: 3,
        country: "Belge",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e7-1f1ea.svg",
        name: "Company C",
        price: 344.1,
        stock: 6,
      },
    ],
  },
  {
    id: 3,
    name: "MICHELIN",
    model: "P.ALPIN5",
    size: "215/45R16",
    image: Wheel3,
    tags: {
      range: "PREMIUM",
      ms: "M+S",
      treepmfs: "3PMSF",
      class: "C3",
      euDir: "2020/740",
    },
    stocks: [
      {
        id: 1,
        country: "Néeerlandais",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f3-1f1f1.svg",
        name: "Company A",
        price: 209.23,
        stock: 27,
      },
      {
        id: 2,
        country: "Français",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1eb-1f1f7.svg",
        name: "Company B",
        price: 212.19,
        stock: 15,
      },
      {
        id: 3,
        country: "Français",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1eb-1f1f7.svg",
        name: "Company C",
        price: 225.84,
        stock: 23,
      },
      {
        id: 4,
        country: "Allemand",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e9-1f1ea.svg",
        name: "Company D",
        price: 234.95,
        stock: 27,
      },
    ],
  },
  {
    id: 4,
    name: "MICHELIN",
    model: "P.SPORT 3",
    size: "215/45R16",
    image: Wheel2,
    tags: {
      range: "PREMIUM",
      eXtraLoad: "XL",
      class: "C2",
      euDir: "2020/740",
    },
    stocks: [
      {
        id: 1,
        country: "Belge",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e7-1f1ea.svg",
        name: "Company A",
        price: 301.13,
        stock: 1,
      },
      {
        id: 2,
        country: "Allemand",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e9-1f1ea.svg",
        name: "Company B",
        price: 306.7,
        stock: 9,
      },
      {
        id: 3,
        country: "Belge",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e7-1f1ea.svg",
        name: "Company C",
        price: 344.1,
        stock: 6,
      },
    ],
  },
  {
    id: 5,
    name: "MICHELIN",
    model: "MICHELIN PRIMACY 3",
    size: "215/45R16",
    image: Wheel3,
    tags: {
      range: "PREMIUM",
      ms: "M+S",
      treepmfs: "3PMSF",
      class: "C3",
      euDir: "2020/740",
    },
    stocks: [
      {
        id: 1,
        country: "Néeerlandais",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f3-1f1f1.svg",
        name: "Company A",
        price: 209.23,
        stock: 27,
      },
      {
        id: 2,
        country: "Français",
        flag: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1eb-1f1f7.svg",
        name: "Company B",
        price: 212.19,
        stock: 15,
      },
    ],
  },
];
