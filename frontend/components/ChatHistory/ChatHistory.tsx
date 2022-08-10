import React, { Component, useEffect, useState } from "react";
import "./ChatHistory.scss";

interface IProps {
    data: string[]
}

const ChatHistory:React.FC<IProps> = ({data}) => {
    const [list, setlist] = useState<string[]>(data)

    useEffect(() => {
        
    }, [list])
    

    function send(){
        console.log(list)
        list.push("hello")
        setlist(list)
    }

    return (
        <div className="ChatHistory">
          <h2>Chat History</h2>
          {list.map((msg, index) => (
           <p key={index}>{msg}</p>
          ))
         }
         <button onClick={send}>hehe</button>
        </div>
    );
}


export default ChatHistory;