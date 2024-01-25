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
};
type Status = "online" | "idle" | "dnd" | "offline";
type Activity = "playing" | "streaming" | "listening" | "watching";
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
    type: "playing",
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
  name: "Gaël's Portfolio 💪",
  categories: [
    {
      categoryId: "1",
      name: "Welcome",
      channels: [
        {
          channelId: "1",
          name: "general",
          locked: false,
          messages: [
            {
              messageId: "1",
              timestamp: Date.now().toString(),
              content: "Hey, Gaël! 👋",
              user: portfolioUser,
            },
            {
              messageId: "2",
              timestamp: Date.now().toString(),
              content: `Hey, ${portfolioUser.name}! 👋`,
              user: meUser,
            },
            {
              messageId: "56",
              timestamp: Date.now().toString(),
              content: "Welcome to my portfolio!",
              user: portfolioUser,
            },
          ],
        },
        {
          channelId: "2",
          name: "rules",
          locked: false,
          messages: [
            {
              messageId: "3",
              timestamp: Date.now().toString(),
              content: "Be nice",
              user: meUser,
            },
          ],
        },
      ],
    },
    {
      categoryId: "2",
      name: "Projects",
      channels: [
        {
          channelId: "3",
          name: "portfolio",
          locked: false,
          messages: [
            {
              messageId: "4",
              timestamp: Date.now().toString(),
              content: "This is my portfolio",
              user: meUser,
            },
          ],
        },
        {
          channelId: "4",
          name: "discord",
          locked: false,
          messages: [
            {
              messageId: "5",
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
      name: "Social",
      channels: [
        {
          channelId: "5",
          name: "github",
          locked: false,
          messages: [
            {
              messageId: "6",
              timestamp: Date.now().toString(),
              content: "<a href='https://github.com/Pexilo'>My github</a>",
              user: portfolioUser,
            },
          ],
        },
        {
          channelId: "6",
          name: "speaking",
          locked: false,
          type: "voice",
          messages: [],
        },
      ],
    },
    {
      categoryId: "4",
      name: "Private",
      channels: [
        {
          channelId: "7",
          name: "code-secrets",
          locked: true,
          messages: [
            {
              messageId: "7",
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
    { description: "The Last of Us: Part I", type: "playing" },
    { description: "Spotify", type: "listening" },
    { description: "Netflix", type: "watching" },
    { description: "Twitch", type: "watching" },
    { description: "YouTube", type: "watching" },
    { description: "Minecraft", type: "playing" },
    { description: "Rocket League", type: "playing" },
    { description: "Cyberpunk 2077", type: "playing" },
    { description: "The Witcher 3", type: "playing" },
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
