type Me = {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  experiences?: {
    id: number;
    number: number;
    unit: string;
    title: string;
    company: string;
    location: string;
    trophies?: {
      id: number;
      title: string;
      year: number;
      emoji: string;
    }[];
  }[];
};
export const me: Me = {
  name: "Gaël Massart",
  title: "Developer fullstack",
  location: "Montpellier, France",
  email: "msrt.gael@gmail.com",
  linkedin: "https://www.linkedin.com/in/mgael",
  github: "https://github.com/Pexilo",
  experiences: [
    {
      id: 1,
      number: 4,
      unit: "months",
      title: "fullstack developer",
      company: "Agoragom",
      location: "Montpellier, France",
    },
    {
      id: 2,
      number: 6,
      unit: "months",
      title: "fullstack developer",
      company: "Pack Solutions",
      location: "Avignon, France",
    },
    {
      id: 3,
      number: 3.5,
      unit: "years",
      title: "software engineer student",
      company: "ESIEA",
      location: "Agen, France",
      trophies: [
        {
          id: 1,
          title: "Bachelor's degree",
          year: 2023,
          emoji: "🎓",
        },
        {
          id: 2,
          title: "Techdays",
          year: 2021,
          emoji: "🥈",
        },
        {
          id: 3,
          title: "Techdays",
          year: 2022,
          emoji: "🥈",
        },
        {
          id: 4,
          title: "Techdays",
          year: 2022,
          emoji: "🥉",
        },
        {
          id: 5,
          title: "Techdays",
          year: 2023,
          emoji: "🥉",
        },
      ],
    },
  ],
};
