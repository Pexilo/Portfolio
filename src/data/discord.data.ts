export type Message = {
  messageId: string;
  timestamp: string;
  content: string;
  user: User;
};
export type Channel = {
  channelId: string;
  name: string;
  locked: boolean;
  messages: Message[];
  type?: "text" | "voice";
};
export type Category = {
  categoryId: string;
  name: string;
  channels: Channel[];
  open?: boolean;
};
type Status = "online" | "idle" | "dnd" | "offline";
type Activity = "joue à" | "streame" | "écoute" | "regarde";
export type User = {
  name: string;
  avatar: string;
  status: Status;
  activity?: {
    description: string;
    type: Activity;
  };
  tag?: string;
  inVoiceChannel?: string;
};
export type Server = {
  id: string;
  name: string;
  categories: Category[];
};

/*
 ** Users
 */
// Randomized user (visitor)
export const portfolioUser: User = {
  ...createRandomizedMember(),
  inVoiceChannel: "6",
};

// Portfolio owner (me)
import Me from "@assets/discord/avatars/discord-avatar-me.png";
const meUser: User = {
  name: "Gaël",
  avatar: Me,
  activity: {
    description: "Visual Studio Code",
    type: "joue à",
  },
  status: "online",
  tag: "#0001",
};

// User list
export const userList: User[] = [meUser, portfolioUser];

/*
 ** Server
 ** categories[channels[messages]]
 */
export const server: Server = {
  id: "1200457876536315946",
  name: "Portfolio de Gaël 🚀",
  categories: [
    {
      categoryId: "1",
      name: "🤠 - Bienvenue",
      open: true,
      channels: [
        {
          channelId: "1201161536400531476",
          name: "💬｜général",
          locked: false,
          messages: [
            {
              messageId: "01",
              timestamp: Date.now().toString(),
              content: "Hey, Gaël! 👋",
              user: portfolioUser,
            },
            {
              messageId: "02",
              timestamp: Date.now().toString(),
              content: `Hey, ${portfolioUser.name}! 👋`,
              user: meUser,
            },
            {
              messageId: "03",
              timestamp: Date.now().toString(),
              content: "Bienvenue sur mon portfolio!",
              user: meUser,
            },
          ],
        },
      ],
    },
    {
      categoryId: "2",
      name: "💈- Projets",
      open: true,
      channels: [
        {
          channelId: "1201161499910099055",
          name: "❔｜whos-that",
          locked: false,
          messages: [
            {
              messageId: "21",
              timestamp: Date.now().toString(),
              content: "This is my portfolio",
              user: meUser,
            },
          ],
        },
        {
          channelId: "1200457877329031204",
          name: "🐲｜steathy",
          locked: false,
          messages: [
            {
              messageId: "31",
              timestamp: Date.now().toString(),
              content: "This is a discord clone",
              user: meUser,
            },
          ],
        },
        {
          channelId: "1201161569619419187",
          name: "⚡｜template",
          locked: false,
          messages: [
            {
              messageId: "41",
              timestamp: Date.now().toString(),
              content: "This is a discord clone",
              user: meUser,
            },
          ],
        },
      ],
    },
    {
      categoryId: "3",
      name: "🎈 - Social",
      open: true,
      channels: [
        {
          channelId: "1201161645045583903",
          name: "🤖｜github",
          locked: false,
          messages: [
            {
              messageId: "41",
              timestamp: Date.now().toString(),
              content: "<a href='https://github.com/Pexilo'>My github</a>",
              user: portfolioUser,
            },
          ],
        },
        {
          channelId: "1201162013666181160",
          name: "🗻 Everest",
          locked: false,
          type: "voice",
          messages: [],
        },
      ],
    },
    {
      categoryId: "4",
      name: "🔒 - Privé",
      open: false,
      channels: [
        {
          channelId: "1201162149972676640",
          name: "❌｜code-secrets",
          locked: true,
          messages: [
            {
              messageId: "71",
              timestamp: Date.now().toString(),
              content: "Hey, I'm a secret! 👀",
              user: portfolioUser,
            },
          ],
        },
      ],
    },
  ],
};

/*
 ** Avatars
 */
import Avatar1 from "@assets/discord/avatars/discord-avatar1.png";
import Avatar2 from "@assets/discord/avatars/discord-avatar2.png";
import Avatar3 from "@assets/discord/avatars/discord-avatar3.png";
import Avatar4 from "@assets/discord/avatars/discord-avatar4.png";
import Avatar5 from "@assets/discord/avatars/discord-avatar5.png";
import Avatar6 from "@assets/discord/avatars/discord-avatar6.png";

function getRandomUserAvatar() {
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6];
  return avatars[Math.floor(Math.random() * avatars.length)];
}

function getRandomUserName() {
  const names = [
    "Alex",
    "Camille",
    "Morgan",
    "Jordan",
    "Sacha",
    "Taylor",
    "Charlie",
    "Quinn",
    "Riley",
    "Sam",
    "Jamie",
    "Maxime",
    "Robin",
    "Chris",
    "Lou",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

// Method to get a random activity
function getRandomActivity() {
  const activities: User["activity"][] = [
    { description: "The Last of Us: Part I", type: "joue à" },
    { description: "Spotify", type: "écoute" },
    { description: "Netflix", type: "regarde" },
    { description: "Twitch", type: "regarde" },
    { description: "YouTube", type: "regarde" },
    { description: "Minecraft", type: "joue à" },
    { description: "Rocket League", type: "joue à" },
    { description: "Cyberpunk 2077", type: "joue à" },
    { description: "The Witcher 3", type: "joue à" },
  ];
  return activities[Math.floor(Math.random() * activities.length)];
}

export function createRandomizedMember() {
  return {
    name: getRandomUserName(),
    avatar: getRandomUserAvatar(),
    status: ["online", "dnd", "offline"].sort(
      () => Math.random() - 0.5
    )[0] as Status,
    activity: getRandomActivity(),
    tag: "#" + Math.floor(Math.random() * 10000),
  };
}
