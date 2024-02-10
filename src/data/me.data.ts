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
    description: string;
    company: string;
    location: string;
    url: string;
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
  title: "Développeur fullstack",
  location: "Montpellier, France",
  email: "msrt.gael@gmail.com",
  linkedin: "https://www.linkedin.com/in/mgael",
  github: "https://github.com/Pexilo",
  experiences: [
    {
      id: 1,
      number: 0,
      unit: "mois",
      title: "développeur fullstack",
      description:
        "Expérience en startup en tant que développeur solo, responsabilités et autonomie.",
      company: "Agoragom",
      location: "Montpellier, France",
      url: "https://agoragom.com",
    },
    {
      id: 2,
      number: 6,
      unit: "mois",
      title: "développeur fullstack",
      description:
        "Première expérience en entreprise en tant que développeur, dans une équipe agile.",
      company: "Pack Solutions",
      location: "Avignon, France",
      url: "https://www.pack-solutions.com/",
    },
    {
      id: 3,
      number: 3.5,
      unit: "années",
      title: "étudiant ingénieur logiciel",
      description:
        "Projets concrets avec de vrais clients, plus pratiques que théoriques.",
      company: "ESIEA",
      location: "Agen, France",
      url: "https://www.esiea.fr/",
      trophies: [
        {
          id: 1,
          title: "Licence",
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
