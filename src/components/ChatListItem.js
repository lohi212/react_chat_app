import React, { useContext } from "react";
import { ChatsContext } from "./ChatViewer";

const ChatListItem = ({ chat, index }) => {
  const { chatClicked, setChatClicked, setIndex } = useContext(ChatsContext);

  const getLastMsg = () => {
    const msgList = [...chat.messageList];
    return msgList[msgList.length - 1]?.message || "";
  };

  return (
    <div
      className="chat-list-item bottom-divider"
      onClick={() => {
        setChatClicked(chat.id);
        setIndex(index);
      }}
      style={{
        background: chatClicked === chat.id ? "#f1f3f6" : "#fff",
      }}
    >
      <img
        src={chat.imageURL}
        alt={chat.title}
        width={40}
        height={40}
        className="chat-list-item-image"
      />
      <div className="chat-list-item-details">
        <div>
          <p>{chat.title}</p>
          <p>{chat.orderId}</p>
          <p>{getLastMsg()}</p>
        </div>
        <div>{chat.latestMessageTimestamp}</div>
      </div>
    </div>
  );
};

export default ChatListItem;
