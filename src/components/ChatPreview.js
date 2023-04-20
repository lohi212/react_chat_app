import React, { useContext, useState } from "react";
import { ChatsContext } from "./ChatViewer";
import Messages from "./Messages";

const ChatPreview = ({ chat }) => {
  const [val, setVal] = useState("");
  const { handleSendMessage } = useContext(ChatsContext);

  const handleMessage = (botMsg = "") => {
    handleSendMessage({
      ...chat,
      messageList: [
        ...chat.messageList,
        {
          messageId: Date.now(),
          message: botMsg || val,
          timestamp: Date.now(),
          sender: "USER",
          messageType: "text",
        },
      ],
    });
    setVal("");
  };

  return (
    <div className="h-100">
      {/* header */}
      {/* Messages */}
      {/* Input */}
      <div className="message-header">
        <img
          src={chat.imageURL}
          alt={chat.title}
          width={40}
          height={40}
          className="chat-list-item-image"
        />
        <p>{chat.title}</p>
      </div>
      <div className="message-container">
        <div className="messages">
          {chat.messageList.length ? (
            <Messages msgs={chat.messageList} handleMessage={handleMessage} />
          ) : (
            <div className="center-container">
              <p>Send a message to start chatting</p>
            </div>
          )}
        </div>

        <input
          value={val}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleMessage();
          }}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Type a Message and Enter"
          className="message-input"
        />
      </div>
    </div>
  );
};

export default ChatPreview;
