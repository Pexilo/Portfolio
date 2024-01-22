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
import { Channel, Server, randomizedUser } from "@data/discord.data";
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
  const { name, categories } = server;

  return (
    <div className="sidebar dark-theme">
      <div className="sidebar__top">
        <h3>{name}</h3>
        <img src={ExpandMoreIcon} alt="Expand More" />
      </div>

      {categories?.map((category) => (
        <div className="sidebar__channels" key={category.categoryId}>
          <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
              <img src={ExpandMoreIcon} alt="Expand More" />
              <h4>{category.name.toUpperCase()}</h4>
            </div>
          </div>
          <div className="sidebar__channelsList">
            {category.channels?.map((channel) => (
              <SidebarChannel
                key={channel.channelId}
                channel={channel}
                currentChannel={currentChannel}
                handleFindChannel={handleFindChannel}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="sidebar__voice">
        <div className="sidebar__voiceInfo">
          <span>
            <img src={NetworkIcon} alt="Network" />
            <h3>Voice Connected</h3>
          </span>
          <p>🔉 Create a channel</p>
        </div>

        <div className="sidebar__voiceIcons">
          <img src={SoundSupressorIcon} alt="Sound Supressor" />
          <img src={LeaveCallIcon} alt="Leave Call" />
        </div>
      </div>
      <div className="sidebar__voiceInterraction">
        <div
          className="sidebar__voiceInterractionBox"
          data-tooltip-id="camera-off-icon"
          data-tooltip-content={"Turn on camera"}
        >
          <img src={CameraOffIcon} alt="Camera Off" />
        </div>
        <Tooltip id="camera-off-icon" place="top" />
        <div
          className="sidebar__voiceInterractionBox"
          data-tooltip-id="screen-share-icon"
          data-tooltip-content={"Share your screen"}
        >
          <img src={ScreenShareIcon} alt="Screen Share" />
        </div>
        <Tooltip id="screen-share-icon" place="top" />
        <div
          className="sidebar__voiceInterractionBox"
          data-tooltip-id="activities-icon"
          data-tooltip-content={"Start an activity"}
        >
          <img src={ActivitiesIcon} alt="Activities" />
        </div>
        <Tooltip id="activities-icon" place="top" />
        <div
          className="sidebar__voiceInterractionBox"
          data-tooltip-id="soundbox-icon"
          data-tooltip-content={"Open Soundboard"}
        >
          <img src={SoundboxIcon} alt="Soundbox" />
        </div>
        <Tooltip id="soundbox-icon" place="top" />
      </div>

      <div className="sidebar__profile">
        <img src={randomizedUser.avatar} alt="Avatar" />
        <span>
          <h3>{randomizedUser.name}</h3>
          <p>
            {randomizedUser.name}
            {randomizedUser.tag}
          </p>
        </span>

        <div className="sidebar__profileIcons">
          <img src={MuteIcon} alt="Mute" />
          <img src={HeadsetIcon} alt="Headset" />
          <img src={SettingsIcon} alt="Settings" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
