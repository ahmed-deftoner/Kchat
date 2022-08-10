import React, { Component } from "react";
import "./ChatHistory.scss";

const ChatHistory = (chatHistory:Array<string>) => {
    return (
        <div className="ChatHistory">
          <h2>Chat History</h2>
          {chatHistory.map((msg, index) => (
           <p key={index}>{msg}</p>
          ))
         }
        </div>
    );
}


export default ChatHistory;