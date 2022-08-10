import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { sendMsg, connect} from '../api/index'

function App() {
  const [count, setCount] = useState(0)

  function send() {
    console.log("hello");
    sendMsg("hello");
  }

  return (
    <div className="App">
      <button onClick={send}>Hit</button>
    </div>
  )
}

export default App
