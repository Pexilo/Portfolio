import porject1 from "src/assets/project-1.png";
import porject2 from "src/assets/project-2.png";
import porject3 from "src/assets/project-3.png";
import porject4 from "src/assets/project-4.png";

export type Portofolio = {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
};
export const portofolioList: Portofolio[] = [
  {
    id: 1,
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam, nisl vitae blandit tincidunt, lectus urna ultricies leo, a ultricies sapien nulla eget velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec nec odio vel nisi aliquam posuere. Sed euismod, nisl quis dignissim ultricies",
    link: "https://www.google.com",
    image: porject1,
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam, nisl vitae blandit tincidunt, lectus urna ultricies leo, a ultricies sapien nulla eget velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec nec odio vel nisi aliquam posuere. Sed euismod, nisl quis dignissim ultricies",
    link: "https://www.google.com",
    image: porject2,
  },
  {
    id: 3,
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam, nisl vitae blandit tincidunt, lectus urna ultricies leo, a ultricies sapien nulla eget velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec nec odio vel nisi aliquam posuere. Sed euismod, nisl quis dignissim ultricies",
    link: "https://www.google.com",
    image: porject3,
  },
  {
    id: 4,
    name: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam, nisl vitae blandit tincidunt, lectus urna ultricies leo, a ultricies sapien nulla eget velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec nec odio vel nisi aliquam posuere. Sed euismod, nisl quis dignissim ultricies",
    link: "https://www.google.com",
    image: porject4,
  },
];
