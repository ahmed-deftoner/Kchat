import React, { Component, useEffect, useState } from "react";
import "./ChatHistory.scss";

interface IProps {
    data: string[]
}

const ChatHistory:React.FC<IProps> = ({data}) => {

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