import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { sendMsg, connect} from '../api/index'
import Header from '../components/header/header'
import ChatHistory from '../components/ChatHistory/ChatHistory'

function App() {
  const [chatHistory, setchatHistory] = useState([])

  useEffect(() => {
     connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  
  }, [])
  

  function send() {
    console.log("hello");
    sendMsg("hello");
  }

  return (
    <div className="App">
      <Header/>
      <ChatHistory chatHistory={this.state.chatHistory} />
      <button onClick={send}>Hit</button>
    </div>
  )
}

export default App
