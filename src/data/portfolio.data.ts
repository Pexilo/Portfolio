import Agostore from "src/assets/agostore/agostore_thumbnail.png";
import Discord from "src/assets/discord/discord_thumbnail.png";
import Mage from "src/assets/mage/mage_thumbnail.png";
import Wip from "src/assets/wip_thumbnail.png";

export type Portofolio = {
  id: number;
  name: string;
  link: string | null;
  image: string;
  frontImage?: string;
};
export const portofolioList: Portofolio[] = [
  {
    id: 1,
    name: "Agostore",
    link: "/mgael-portfolio/portfolio/agostore",
    image: Agostore,
  },
  {
    id: 2,
    name: "Discord",
    link: null,
    image: Discord,
    frontImage: Wip,
  },
  {
    id: 3,
    name: "Mage",
    link: null,
    image: Mage,
    frontImage: Wip,
  },
];
