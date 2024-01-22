import HelpIcon from "@assets/discord/help.svg";
import InboxIcon from "@assets/discord/inbox.svg";
import MembersIcon from "@assets/discord/members.svg";
import NotificationIcon from "@assets/discord/notification.svg";
import PinIcon from "@assets/discord/pin.svg";
import SearchIcon from "@assets/discord/search.svg";
import ThreadIcon from "@assets/discord/thread.svg";
import UnreadMessagesIcon from "@assets/discord/unread-messages.svg";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

function ChatHeader({ channelName }: Readonly<{ channelName: string }>) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const unreadMessagesDate = new Date().toLocaleString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div className="chatHeader dark-theme">
        <div className="chatHeader__left">
          <h3>
            <span className="chatHeader__hash">#</span>
            {channelName}
          </h3>
        </div>

        <div className="chatHeader__right">
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
          />
          <Tooltip id="members" place="bottom" />

          <div className="chatHeader__search">
            <input
              className="search__input"
              placeholder="Search"
              onKeyDown={(e) => e.preventDefault()}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setIsSearchOpen(false)}
            />
            <img
              className={
                isSearchOpen ? "search__img search__active" : "search__img"
              }
              src={SearchIcon}
              alt=""
            />
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
      <button className="chatHeader__unread">
        <span className="chatHeader__unread__content">
          <p>
            5+ new messages since <span>{unreadMessagesDate}</span>
          </p>
          <span>
            <p>Mark as read</p>
            <img src={UnreadMessagesIcon} alt="Unread Messages" />
          </span>
        </span>
      </button>
    </>
  );
}

export default ChatHeader;
