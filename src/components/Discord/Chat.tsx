import GifIcon from "@assets/discord/gif.svg";
import GiftIcon from "@assets/discord/gift.svg";
import ImportFileIcon from "@assets/discord/import-file.svg";
import StickerIcon from "@assets/discord/sticker.svg";
import {
  Channel,
  Message as MessageType,
  randomizedUser,
} from "@data/discord.data";
import { getRamdomEmoji } from "@data/emojis.data";
import { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import Message from "./Message";

function Chat({
  channel,
}: Readonly<{
  channel: Channel;
}>) {
  const { channelId, name, messages: channelMessages } = channel;
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(channelMessages);
  const [searchEmoji, setSearchEmoji] = useState(getRamdomEmoji());

  useEffect(() => {
    setMessages(channelMessages);
  }, [channel]);

  const handleSearchEmoji = () => {
    setSearchEmoji(getRamdomEmoji());
  };

  const sendMessage = (e: any) => {
    e.preventDefault();

    setMessages([
      ...messages,
      {
        messageId: (messages.length + 1).toString(),
        timestamp: Date.now().toString(),
        content: input,
        user: {
          name: randomizedUser.name,
          avatar: randomizedUser.avatar,
        },
      },
    ]);

    setInput("");
  };

  return (
    messages &&
    messages.length > 0 && (
      <div className="chat">
        <ChatHeader channelName={name} />

        <div className="chat__messages">
          {messages.map((message: MessageType, index: number) => (
            <Message
              key={message.messageId}
              message={message}
              lastMessage={messages[index - 1]}
            />
          ))}
        </div>

        <div className="chat__input">
          <img src={ImportFileIcon} alt="Import File" />
          <form>
            <input
              value={input}
              disabled={!channelId}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Message #${name}`}
            />
            <button
              disabled={!channelId}
              className="chat__inputButton"
              type="submit"
              onClick={sendMessage}
            >
              Send Message
            </button>
          </form>

          <div className="chat__inputs">
            <img src={GiftIcon} alt="Gift" />
            <img src={GifIcon} alt="Gif" />
            <img src={StickerIcon} alt="Sticker" />
            <img
              className="chat__emoji"
              src={searchEmoji.image}
              alt="Emoji"
              onMouseEnter={handleSearchEmoji}
              onClick={() => setInput(input + searchEmoji.emoji)}
            />
          </div>
        </div>
      </div>
    )
  );
}

export default Chat;
