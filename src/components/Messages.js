import React, { useState } from "react";

const Messages = ({ msgs, handleMessage }) => {
  const sortedMessages = msgs.sort((a, b) => a.timestamp - b.timestamp);
  const [disableOptions, setDisabledOptions] = useState(false);

  return (
    <div>
      {sortedMessages.map((msg) => (
        <div
          className={` ${
            msg.sender === "BOT" ? "left-message" : "right-message"
          }`}
        >
          <div
            key={msg.messageId}
            className={`message ${
              msg.sender === "BOT" ? "get-message" : "sent-message"
            }`}
          >
            <p className="p-15">{msg.message}</p>
            <div>
              {(msg.options || []).map((option) => (
                <div
                  className="bottom-divider top-divider p-15"
                  style={{
                    background: disableOptions ? "#f5f5f5" : "#fff",
                  }}
                  onClick={() => {
                    handleMessage(
                      "I want to receive a call back from flipkart"
                    );
                    setDisabledOptions(true);
                  }}
                >
                  <div className="link-option ">{option.optionText}</div>
                  <div className="sub-text">{option.optionSubText}</div>
                </div>
              ))}
            </div>
            <p className="msg-time">{msg.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
