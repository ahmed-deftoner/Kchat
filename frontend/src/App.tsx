import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { sendMsg, connect} from '../api/index'
import Header from '../components/header/header'
import ChatHistory from '../components/ChatHistory/ChatHistory'

function App() {
  const [msg, setmsg] = useState<string>("Hello")
  const [chatHistory, setchatHistory] = useState<Array<string>>(["haha","hehe"])

  useEffect(() => {
     connect((msg:string) => {
      console.log("New Message")
      chatHistory.push(msg)
      setchatHistory(chatHistory)
      console.log(msg)
      console.log(chatHistory);
    })
  
  }, [msg, chatHistory])
  

  function send() {
    setmsg("hello");
    console.log(msg);
    sendMsg(msg);
  }

  return (
    <div className="App">
      <Header/>
      <ChatHistory data={chatHistory} />
      <button onClick={send}>Hit</button>
    </div>
  )
}

export default App
