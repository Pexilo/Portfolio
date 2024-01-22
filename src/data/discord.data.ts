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
};
export type Category = {
  categoryId: string;
  name: string;
  channels: Channel[];
};
export type User = {
  name: string;
  avatar: string;
  tag?: string;
};
export type Server = {
  name: string;
  categories: Category[];
};

export const randomizedUser: User = {
  name: getRandomUserName(),
  avatar: getRandomUserAvatar(),
  tag: "#" + Math.floor(Math.random() * 10000),
};

import Me from "@assets/discord/avatars/discord-avatar-me.png";

const meUser: User = {
  name: "Gaël",
  avatar: Me,
  tag: "#0001",
};

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
              user: randomizedUser,
            },
            {
              messageId: "2",
              timestamp: Date.now().toString(),
              content: `Hey, ${randomizedUser.name}! 👋`,
              user: meUser,
            },
            {
              messageId: "56",
              timestamp: Date.now().toString(),
              content: "Welcome to my portfolio!",
              user: randomizedUser,
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
              user: randomizedUser,
            },
          ],
        },
      ],
    },
    {
      categoryId: "4",
      name: "Private",
      channels: [
        {
          channelId: "6",
          name: "code-secrets",
          locked: true,
          messages: [
            {
              messageId: "7",
              timestamp: Date.now().toString(),
              content: "Hey, I'm a secret! 👀",
              user: randomizedUser,
            },
          ],
        },
      ],
    },
  ],
};

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
    "Sam",
    "Ivan",
    "John",
    "Alex",
    "Bob",
    "Alice",
    "Eve",
    "Carol",
    "Dave",
    "Frank",
    "Grace",
    "Heidi",
    "Mallory",
    "Oscar",
    "Peggy",
    "Sybil",
    "Trudy",
    "Victor",
    "Walter",
    "Wendy",
  ];
  return names[Math.floor(Math.random() * names.length)];
}
