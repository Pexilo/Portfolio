import HelpIcon from "@assets/discord/help.svg";
import InboxIcon from "@assets/discord/inbox.svg";
import MembersIcon from "@assets/discord/members.svg";
import NotificationIcon from "@assets/discord/notification.svg";
import PinIcon from "@assets/discord/pin.svg";
import SearchIcon from "@assets/discord/search.svg";
import ThreadIcon from "@assets/discord/thread.svg";
import UnreadMessagesIcon from "@assets/discord/unread-messages.svg";
import { Message } from "@data/discord.data";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

const ChatHeader = ({
  channelName,
  messages,
  toggleMembers,
  setToggleMembers,
}: Readonly<{
  channelName: string;
  messages: Message[];
  toggleMembers: boolean;
  setToggleMembers: (toggleMembers: boolean) => void;
}>) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const firstUnreadMessage = messages[0].timestamp;
  const unreadMessagesDate = new Date(
    parseInt(firstUnreadMessage)
  ).toLocaleDateString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div className="chatHeader dark-theme">
        <div className="chatHeader-channelName">
          <h3>
            <span className="channelName-hash">#</span>
            {channelName}
          </h3>
        </div>

        <div className="chatHeader-interactions">
          <img
            src={ThreadIcon}
            alt="Thread"
            data-tooltip-id="thread"
            data-tooltip-content={"Threads"}
          />
          <Tooltip id="thread" place="bottom" />
          <img
            src={NotificationIcon}
            alt="Notification"
            data-tooltip-id="notif"
            data-tooltip-content={"Notification Settings"}
          />
          <Tooltip id="notif" place="bottom" />
          <img
            src={PinIcon}
            alt="Pin"
            data-tooltip-id="pin"
            data-tooltip-content={"Pinned Messages"}
          />
          <Tooltip id="pin" place="bottom" />
          <img
            src={MembersIcon}
            alt="Members"
            data-tooltip-id="members"
            data-tooltip-content={"Show Member List"}
            style={{ cursor: "pointer" }}
            onClick={() => setToggleMembers(!toggleMembers)}
          />
          <Tooltip id="members" place="bottom" />

          <div className="interaction-search">
            <input
              className="search-input"
              placeholder="Search"
              onKeyDown={(e) => e.preventDefault()}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setIsSearchOpen(false)}
            />
            <img className="search-icon" src={SearchIcon} alt="Search" />
          </div>

          <img
            src={InboxIcon}
            alt="Inbox"
            data-tooltip-id="inbox"
            data-tooltip-content={"Inbox"}
          />
          <Tooltip id="inbox" place="bottom" />
          <img
            src={HelpIcon}
            alt="Help"
            data-tooltip-id="help"
            data-tooltip-content={"Help"}
          />
          <Tooltip id="help" place="bottom" />
        </div>
      </div>
      <button
        className="chatHeader-banner"
        style={toggleMembers ? { width: "75%" } : { width: "95%" }}
      >
        <span className="banner-content">
          <p>
            {messages.length}+ new messages since{" "}
            <span>{unreadMessagesDate}</span>
          </p>
          <span>
            <p>Mark as read</p>
            <img src={UnreadMessagesIcon} alt="Unread Messages" />
          </span>
        </span>
      </button>
    </>
  );
};

export default ChatHeader;
