import React, { createContext, useEffect, useState } from "react";
import { CHATS_URL } from "../utils";
import ChatFilter from "./ChatFilter";
import ChatList from "./ChatList";
import ChatPreview from "./ChatPreview";
import "./styles.css";

export const ChatsContext = createContext(null);

const ChatViewer = () => {
  const [chats, setChats] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [index, setIndex] = useState(0);
  const [chatClicked, setChatClicked] = useState("");

  useEffect(() => {
    getAllCharts();
  }, []);

  useEffect(() => {
    if (filterVal) {
      const fileterdChats = chats.filter(
        (chat) =>
          chat.title.toLowerCase().includes(filterVal.toLowerCase()) ||
          chat.orderId.toLowerCase().includes(filterVal.toLowerCase())
      );
      setChats(fileterdChats);
    } else {
      getAllCharts();
    }
  }, [filterVal]);

  const getAllCharts = () => {
    fetch(CHATS_URL)
      .then((res) => res.json())
      .then((res) => {
        setChats(res);
      })
      .catch((err) => {
        console.error("Error to get chats", err);
        setChats([]);
      });
  };

  const getSelectedChart = () => {
    return chats.filter((chat) => chatClicked === chat.id)[0];
  };

  const handleSendMessage = (chat) => {
    const newChats = [...chats];
    newChats[index] = {
      ...chat,
    };
    setChats(newChats);
  };

  return (
    <ChatsContext.Provider
      value={{ chatClicked, setChatClicked, handleSendMessage, setIndex }}
    >
      <div
        style={{
          width: chatClicked ? "45%" : "100%",
        }}
        className="left-container "
      >
        <ChatFilter setFilterVal={setFilterVal} filterVal={filterVal} />
        <ChatList chats={chats} />
      </div>
      {chatClicked && (
        <div
          style={{
            width: chatClicked ? "55%" : "100%",
          }}
        >
          <ChatPreview chat={getSelectedChart()} />
        </div>
      )}
    </ChatsContext.Provider>
  );
};

export default ChatViewer;
