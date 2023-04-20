import React from "react";
import ChatListItem from "./ChatListItem";

const ChatList = ({ chats }) => {
  return (
    <div>
      {chats.map((chat, index) => (
        <ChatListItem chat={chat} key={chat.id} index={index} />
      ))}
    </div>
  );
};

export default ChatList;
