import { Channel, server } from "@data/discord.data";
import "@styles/discord.css";
import { useState } from "react";
import Chat from "./Discord/Chat";
import Sidebar from "./Discord/Sidebar";

const Discord = () => {
  const [toggleMembers, setToggleMembers] = useState(true);
  const [currentChannel, setCurrentChannel] = useState<Channel>(
    server.categories[0].channels[0]
  );

  const handleFindChannel = (channelId: Channel["channelId"]) => {
    const channel = server.categories
      .map((category) => category.channels)
      .flat()
      .find((channel) => channel.channelId === channelId);
    setCurrentChannel(channel ?? server.categories[0].channels[0]);
  };

  return (
    <div className="discord-container">
      <Sidebar
        server={server}
        currentChannel={currentChannel}
        handleFindChannel={handleFindChannel}
      />
      <Chat
        channel={currentChannel}
        toggleMembers={toggleMembers}
        setToggleMembers={setToggleMembers}
      />
    </div>
  );
};

export default Discord;
