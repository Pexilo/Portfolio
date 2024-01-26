type Skill = {
  id: number;
  emoji: string;
  name: string;
  category: string;
  firstUse: number;
  estimatedLevel: 1 | 2 | 3 | 4 | 5;
  favorite?: boolean;
};
export const skillList: Skill[] = [
  {
    id: 1,
    emoji: "🐍",
    category: "backend",
    name: "Python",
    firstUse: 2021,
    estimatedLevel: 2,
  },
  {
    id: 2,
    category: "backend",
    emoji: "☕",
    name: "Java",
    firstUse: 2022,
    estimatedLevel: 3,
  },
  {
    id: 3,
    emoji: "🐘",
    name: "PHP",
    category: "backend",
    firstUse: 2021,
    estimatedLevel: 2,
  },
  {
    id: 4,
    emoji: "⚛️",
    name: "React",
    category: "frontend",
    firstUse: 2023,
    estimatedLevel: 4,
  },

  {
    id: 5,
    emoji: "🌐",
    name: "HTML/CSS",
    category: "frontend",
    firstUse: 2021,
    estimatedLevel: 4,
  },
  {
    id: 6,
    emoji: "💻",
    name: "Javascript",
    category: "frontend",
    firstUse: 2021,
    estimatedLevel: 5,
  },
  {
    id: 7,
    emoji: "🔷",
    name: "Typescript",
    category: "frontend",
    firstUse: 2023,
    estimatedLevel: 5,
  },
  {
    id: 8,
    emoji: "💻",
    name: "Visual Studio",
    category: "dev environment",
    firstUse: 2022,
    estimatedLevel: 3,
  },
  {
    id: 9,
    emoji: "📱⚛️",
    name: "React Native",
    category: "others",
    firstUse: 2023,
    estimatedLevel: 3,
  },
  {
    id: 10,
    emoji: "🟩",
    name: "Node.js",
    category: "backend",
    firstUse: 2021,
    estimatedLevel: 4,
  },
  {
    id: 11,
    emoji: "🚀",
    name: "Express.js",
    category: "backend",
    firstUse: 2021,
    estimatedLevel: 4,
  },
  {
    id: 12,
    emoji: "🍃",
    name: "MongoDB",
    category: "backend",
    firstUse: 2022,
    estimatedLevel: 4,
  },
  {
    id: 13,
    emoji: "🐬",
    name: "MySQL",
    category: "backend",
    firstUse: 2021,
    estimatedLevel: 4,
  },
  {
    id: 14,
    emoji: "🔀",
    name: "Git",
    category: "others",
    firstUse: 2021,
    estimatedLevel: 4,
  },
  {
    id: 15,
    emoji: "🐧",
    name: "Linux",
    category: "others",
    firstUse: 2021,
    estimatedLevel: 3,
  },
  {
    id: 16,
    emoji: "🐳",
    name: "Docker",
    category: "others",
    firstUse: 2023,
    estimatedLevel: 3,
  },
  {
    id: 17,
    emoji: "🪟",
    name: "Windows",
    category: "dev environment",
    firstUse: 2007,
    estimatedLevel: 5,
  },
  {
    id: 27,
    emoji: "🤖",
    name: "ChatGPT",
    category: "others",
    firstUse: 2022,
    estimatedLevel: 4,
  },
  {
    id: 28,
    emoji: "🗨️",
    name: "Discord.js",
    category: "others",
    firstUse: 2020,
    estimatedLevel: 5,
  },
  {
    id: 29,
    emoji: "🏭",
    name: "Proxmox",
    category: "others",
    firstUse: 2023,
    estimatedLevel: 3,
  },
  {
    id: 30,
    emoji: "📋",
    name: "SCRUM",
    category: "others",
    firstUse: 2021,
    estimatedLevel: 4,
  },
  {
    id: 31,
    emoji: "🅰️",
    name: "Angular",
    category: "frontend",
    firstUse: 2022,
    estimatedLevel: 3,
  },
  {
    id: 32,
    emoji: "🆚",
    name: "VSCode",
    category: "dev environment",
    firstUse: 2020,
    estimatedLevel: 5,
  },
  {
    id: 33,
    emoji: "🧠",
    name: "IntelliJ",
    category: "dev environment",
    firstUse: 2021,
    estimatedLevel: 3,
  },
  {
    id: 34,
    emoji: "🌑",
    name: "Eclipse",
    category: "dev environment",
    firstUse: 2022,
    estimatedLevel: 3,
  },
  {
    id: 35,
    emoji: "🤖",
    name: "Android Studio",
    category: "dev environment",
    firstUse: 2023,
    estimatedLevel: 2,
  },
  {
    id: 36,
    emoji: "⚡",
    name: "Vite",
    category: "frontend",
    firstUse: 2023,
    estimatedLevel: 3,
  },
];