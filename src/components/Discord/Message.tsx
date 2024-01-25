import { Message as typeMessage } from "@data/discord.data";

const Message = ({
  message,
  lastMessage,
}: Readonly<{
  message: typeMessage;
  lastMessage: typeMessage;
}>) => {
  const areTimestampsSimilar =
    !!lastMessage?.timestamp &&
    Math.abs(Number(lastMessage.timestamp) - Number(message.timestamp)) <=
      20000;

  const isCompactMessage =
    lastMessage &&
    lastMessage.user.name === message.user.name &&
    areTimestampsSimilar;

  const messageDate = new Date(parseInt(message.timestamp)).toLocaleTimeString(
    "en-GB",
    {
      hour: "numeric",
      minute: "numeric",
    }
  );

  return lastMessage && isCompactMessage ? (
    <div className="message same-user-message message-content">
      {message.content}
    </div>
  ) : (
    <div className="message first-user-message">
      <img src={message.user.avatar} alt="avatar" />
      <div className="message__info">
        <div>
          {message.user.name}
          <span className="message-timestamp">Aujourd'hui à {messageDate}</span>
        </div>
        <div className="message-content">
          <div dangerouslySetInnerHTML={{ __html: message.content }} />
        </div>
      </div>
    </div>
  );
};

export default Message;
