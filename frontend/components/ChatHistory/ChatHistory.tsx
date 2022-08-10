import React, { Component } from "react";
import "./ChatHistory.scss";

interface IProps {
    data: string[]
}

const ChatHistory:React.FC<IProps> = ({data}) => {


    function send(){
        console.log(data)
    }

    return (
        <div className="ChatHistory">
          <h2>Chat History</h2>
          {data.map((msg, index) => (
           <p key={index}>{msg}</p>
          ))
         }
         <button onClick={send}>hehe</button>
        </div>
    );
}


export default ChatHistory;