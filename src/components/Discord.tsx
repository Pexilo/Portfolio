import { Channel, portfolioUser, server } from "@data/discord.data";
import "@styles/discord.css";
import { useEffect, useRef, useState } from "react";
import { SquareLoader } from "react-spinners";
import Chat from "./Discord/Chat";
import Sidebar from "./Discord/Sidebar";

declare global {
  interface Window {
    Crate: any; // Adaptez ce type en fonction de l'API de Crate si possible
  }
}

type ChannelColor = {
  id: Channel["channelId"];
  color: string;
};
const ChannelColor = [
  { id: "1201161536400531476", color: "#f04747" }, // General
  { id: "1201161499910099055", color: "#fad26b" }, // Who's That
  { id: "1200457877329031204", color: "#508fb3" }, // Stealthy
  { id: "1201161569619419187", color: "#ffac33" }, // Template
  { id: "1201161645045583903", color: "#cea5fb" }, // Github
];

const Discord = ({
  fadeEffect,
  fakeLoading,
  loading,
}: {
  fadeEffect: string;
  fakeLoading: () => Promise<void>;
  loading: boolean;
}) => {
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

  useEffect(() => {
    fakeLoading();
  }, []);

  const scriptRef = useRef<HTMLDivElement>(null);
  const [crateInstance, setCrateInstance] = useState<any>(null);
  const [crateNotification, setCrateNotification] = useState<any>(null);
  useEffect(() => {
    const { channelId } = currentChannel;
    // Update channel on currentChannel change
    if (crateInstance) {
      if (crateNotification) crateNotification.hide();
      crateInstance.setOptions({
        channel: channelId,
        color: ChannelColor.find((channel) => channel.id === channelId)?.color,
      });
      const newCrateNotification = crateInstance.notify({
        content: `Essaye ${currentChannel.name.replace("｜", "")} !`,
        timeout: 5000,
      });
      setCrateNotification(newCrateNotification);
    }

    // First render
    if (scriptRef.current && !crateInstance) {
      // Create script
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
      script.async = true;
      script.defer = true;

      // Append script
      scriptRef.current.appendChild(script);

      // Configure Crate
      script.onload = () => {
        const newCreateInstance = newCrateInstance(channelId);
        setCrateInstance(newCreateInstance);
      };

      // Remove script on unmount
      return () => {
        if (scriptRef.current) {
          scriptRef.current.removeChild(script);
        }
      };
    }
  }, [currentChannel]);

  return loading ? (
    <div className={`loader-container ${fadeEffect}`}>
      <SquareLoader
        size={150}
        color={"var(--discord-color)"}
        loading={loading}
      />
    </div>
  ) : (
    <div className={`discord-container fade-in ${fadeEffect}`}>
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
      <div ref={scriptRef}></div>
    </div>
  );
};

const newCrateInstance = (channelId: Channel["channelId"]) => {
  const newCreateInstance = new window.Crate({
    server: server.id,
    channel: channelId,
    color: ChannelColor.find((channel) => channel.id === channelId)?.color,
    username: portfolioUser.name,
  });
  return newCreateInstance;
};

export default Discord;
