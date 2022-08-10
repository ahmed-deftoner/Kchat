import React, { Component } from "react";
import "./ChatHistory.scss";

const ChatHistory = (props:Array<string>) => {
    const data = Array.from(props)
    return (
        <div className="ChatHistory">
          <h2>Chat History</h2>
          {data.map((msg, index) => (
           <p key={index}>{msg}</p>
          ))
         }
        </div>
    );
}


export default ChatHistory;