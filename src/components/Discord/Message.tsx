import { Message as typeMessage } from "@data/discord.data";

function Message({
  message,
  lastMessage,
}: Readonly<{
  message: typeMessage;
  lastMessage: typeMessage;
}>) {
  const areTimestampsSimilar =
    !!lastMessage?.timestamp &&
    Math.abs(Number(lastMessage.timestamp) - Number(message.timestamp)) <=
      20000;

  const isCompactMessage =
    lastMessage &&
    lastMessage.user.name === message.user.name &&
    areTimestampsSimilar;

  return lastMessage && isCompactMessage ? (
    <div className="message message__same-user message__content">
      {message.content}
    </div>
  ) : (
    <div className="message message__first">
      <img src={message.user.avatar} alt="avatar" />
      <div className="message__info">
        <div>
          {message.user.name}
          <span className="message__timestamp">
            Aujourd'hui à {new Date(parseInt(message.timestamp)).getHours()}:
            {new Date(parseInt(message.timestamp)).getMinutes()}
          </span>
        </div>
        <div className="message__content">
          <div dangerouslySetInnerHTML={{ __html: message.content }} />
        </div>
      </div>
    </div>
  );
}

export default Message;
