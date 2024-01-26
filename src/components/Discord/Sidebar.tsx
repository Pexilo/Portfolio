import ActivitiesIcon from "@assets/discord/activities.svg";
import CameraOffIcon from "@assets/discord/camera-off.svg";
import ExpandMoreIcon from "@assets/discord/expand-more.svg";
import HeadsetIcon from "@assets/discord/headset.svg";
import LeaveCallIcon from "@assets/discord/leave-call.svg";
import MuteIcon from "@assets/discord/mute.svg";
import NetworkIcon from "@assets/discord/network.svg";
import ScreenShareIcon from "@assets/discord/screen-share.svg";
import SettingsIcon from "@assets/discord/settings.svg";
import SoundSupressorIcon from "@assets/discord/sound-supressor.svg";
import SoundboxIcon from "@assets/discord/soundbox.svg";
import { Channel, Server, portfolioUser } from "@data/discord.data";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import SidebarChannel from "./SidebarChannel";

const Sidebar = ({
  server,
  currentChannel,
  handleFindChannel,
}: {
  server: Server;
  currentChannel: Channel;
  handleFindChannel: (channelId: Channel["channelId"]) => void;
}) => {
  const [categoriesChanged, setCategoriesChanged] = useState(false);
  const { name, categories } = server;

  // Find portfolioUser's voice channel
  const portfolioUserChannel = categories
    ?.flatMap((category) => category.channels)
    .find((channel) => channel.channelId === portfolioUser.inVoiceChannel);

  useEffect(() => {
    if (categoriesChanged) {
      setCategoriesChanged(false);
    }
  }, [categoriesChanged]);

  return (
    <div className="sidebar dark-theme">
      <div className="sidebar-serverName">
        <h3>{name}</h3>
        <img src={ExpandMoreIcon} alt="Expand More" />
      </div>

      <div className="sidebar-channels">
        {categories?.map((category) => (
          <div className="channel-container" key={category.categoryId}>
            <div className="channel-category">
              <div
                className="category-name"
                onClick={() => {
                  category.open = !category.open;
                  setCategoriesChanged(true);
                }}
              >
                <img
                  src={ExpandMoreIcon}
                  alt="Expand More"
                  style={{ transform: category.open ? "rotate(180deg)" : "" }}
                />
                <h4>{category.name.toUpperCase()}</h4>
              </div>
            </div>
            {category.open && (
              <div className="channel-list">
                {category.channels?.map((channel) => (
                  <SidebarChannel
                    key={channel.channelId}
                    channel={channel}
                    currentChannel={currentChannel}
                    handleFindChannel={handleFindChannel}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="sidebar-voiceInfo">
        <div className="voiceInfo-content">
          <span>
            <img src={NetworkIcon} alt="Network" />
            <h3>Voice Connected</h3>
          </span>
          <p>{portfolioUserChannel?.name ?? ""}</p>
        </div>

        <div className="voiceInfo-icons">
          <img src={SoundSupressorIcon} alt="Sound Supressor" />
          <img src={LeaveCallIcon} alt="Leave Call" />
        </div>
      </div>
      <div className="sidebar-interactions">
        <div
          className="interaction-box"
          data-tooltip-id="camera-off-icon"
          data-tooltip-content={"Turn on camera"}
        >
          <img src={CameraOffIcon} alt="Camera Off" />
        </div>
        <Tooltip id="camera-off-icon" place="top" />
        <div
          className="interaction-box"
          data-tooltip-id="screen-share-icon"
          data-tooltip-content={"Share your screen"}
        >
          <img src={ScreenShareIcon} alt="Screen Share" />
        </div>
        <Tooltip id="screen-share-icon" place="top" />
        <div
          className="interaction-box"
          data-tooltip-id="activities-icon"
          data-tooltip-content={"Start an activity"}
        >
          <img src={ActivitiesIcon} alt="Activities" />
        </div>
        <Tooltip id="activities-icon" place="top" />
        <div
          className="interaction-box"
          data-tooltip-id="soundbox-icon"
          data-tooltip-content={"Open Soundboard"}
        >
          <img src={SoundboxIcon} alt="Soundbox" />
        </div>
        <Tooltip id="soundbox-icon" place="top" />
      </div>

      <div className="sidebar-user">
        <img src={portfolioUser.avatar} alt="Avatar" />
        <span>
          <h3>{portfolioUser.name}</h3>
          <p>
            {portfolioUser.name}
            {portfolioUser.tag}
          </p>
        </span>

        <div className="user-icons">
          <img src={MuteIcon} alt="Mute" />
          <img src={HeadsetIcon} alt="Headset" />
          <img src={SettingsIcon} alt="Settings" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
