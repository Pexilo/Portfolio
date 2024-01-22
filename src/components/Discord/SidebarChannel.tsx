import AddUserIcon from "@assets/discord/add-user.svg";
import HashtagLocked from "@assets/discord/hashtag-locked.svg";
import Hashtag from "@assets/discord/hashtag.svg";
import { Channel } from "@data/discord.data";
import { Tooltip } from "react-tooltip";

function SidebarChannel({
  channel,
  currentChannel,
  handleFindChannel,
}: Readonly<{
  channel: Channel;
  currentChannel: Channel;
  handleFindChannel: (channelId: Channel["channelId"]) => void;
}>) {
  const { channelId, name, locked } = channel;

  const handleClick = () => {
    if (channel.locked) return;
    handleFindChannel(channelId);
  };
  return (
    <div className={"sidebarChannel dark-theme"} onClick={handleClick}>
      <div
        className={`sidebarChannel__name ${
          currentChannel.channelId === channelId &&
          "sidebarChannel__name--selected"
        }`}
        style={locked ? { color: "#4a4a4a", cursor: "not-allowed" } : {}}
      >
        <div className="sidebarChannel__hash">
          <img src={locked ? HashtagLocked : Hashtag} alt="hashtag" />
          <h4>{name}</h4>
        </div>
        <img
          style={{ display: locked ? "none" : "" }}
          src={AddUserIcon}
          alt="Add User"
          data-tooltip-id="add-user"
          data-tooltip-content={"Add User"}
        />
        <Tooltip id="add-user" place="bottom" />
      </div>
    </div>
  );
}

export default SidebarChannel;
