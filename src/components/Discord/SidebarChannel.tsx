import AddUserIcon from "@assets/discord/add-user.svg";
import HashtagLockedIcon from "@assets/discord/hashtag-locked.svg";
import HashtagIcon from "@assets/discord/hashtag.svg";
import MicIcon from "@assets/discord/mic.svg";
import VoiceIcon from "@assets/discord/voice.svg";
import { Channel, portfolioUser } from "@data/discord.data";
import { Tooltip } from "react-tooltip";

const SidebarChannel = ({
  channel,
  currentChannel,
  handleFindChannel,
}: Readonly<{
  channel: Channel;
  currentChannel: Channel;
  handleFindChannel: (channelId: Channel["channelId"]) => void;
}>) => {
  const { channelId, name, locked } = channel;

  const handleClick = () => {
    if (channel.locked || channel.type === "voice") return;
    handleFindChannel(channelId);
  };

  let icon;
  if (channel.locked) {
    icon = HashtagLockedIcon;
  } else if (channel.type === "voice") {
    icon = VoiceIcon;
  } else {
    icon = HashtagIcon;
  }

  return (
    <div className={"sidebarChannel dark-theme"} onClick={handleClick}>
      <div
        className={`sidebarChannel-name ${
          (currentChannel.channelId === channelId ||
            channel.type === "voice") &&
          "sidebarChannel-name--selected"
        }`}
        style={locked ? { color: "#4a4a4a", cursor: "not-allowed" } : {}}
      >
        <div className="sidebarChannel-icon">
          <img src={icon} alt="Hashtag" />
          <h4>{name}</h4>
        </div>

        {channel.type !== "voice" && (
          <img
            style={{ display: locked ? "none" : "" }}
            src={AddUserIcon}
            alt="Add User"
            data-tooltip-id="add-user"
            data-tooltip-content={"Add User"}
          />
        )}
        <Tooltip id="add-user" place="bottom" />
      </div>
      {portfolioUser && portfolioUser.inVoiceChannel === channelId && (
        <div className="sidebarChannel-userInVoice">
          <img
            className="userInVoice-avatar"
            src={portfolioUser.avatar}
            alt="User Avatar"
          />
          <p>{portfolioUser.name}</p>
          <img
            className="userInVoice-micIcon"
            src={MicIcon}
            alt="Mic"
            data-tooltip-id="mic-icon"
            data-tooltip-content={"Muted"}
          />
          <Tooltip id="mic-icon" place="top" />
        </div>
      )}
    </div>
  );
};

export default SidebarChannel;
