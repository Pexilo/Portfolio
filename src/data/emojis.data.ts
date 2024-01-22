import Emoji1 from "@assets/discord/emojis/emoji-chat1.png";
import Emoji2 from "@assets/discord/emojis/emoji-chat2.png";
import Emoji3 from "@assets/discord/emojis/emoji-chat3.png";
import Emoji4 from "@assets/discord/emojis/emoji-chat4.png";
import Emoji5 from "@assets/discord/emojis/emoji-chat5.png";
import Emoji6 from "@assets/discord/emojis/emoji-chat6.png";
import Emoji7 from "@assets/discord/emojis/emoji-chat7.png";
import Emoji8 from "@assets/discord/emojis/emoji-chat8.png";
import Emoji9 from "@assets/discord/emojis/emoji-chat9.png";
import Emoji10 from "@assets/discord/emojis/emoji-chat10.png";

type Emoji = {
  image: any;
  emoji: string;
};

const emojis: Emoji[] = [
  {
    emoji: "🥸",
    image: Emoji1,
  },
  {
    emoji: "😛",
    image: Emoji2,
  },
  {
    emoji: "😊",
    image: Emoji3,
  },
  {
    emoji: "😏",
    image: Emoji4,
  },
  {
    emoji: "🥴",
    image: Emoji5,
  },
  {
    emoji: "🧐",
    image: Emoji6,
  },
  {
    emoji: "🤓",
    image: Emoji7,
  },
  {
    emoji: "🥳",
    image: Emoji8,
  },
  {
    emoji: "😇",
    image: Emoji9,
  },
  {
    emoji: "😈",
    image: Emoji10,
  },
];

export const getRamdomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};
