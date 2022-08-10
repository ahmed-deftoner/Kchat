import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { sendMsg, connect} from '../api/index'
import Header from '../components/header/header'

function App() {

  function send() {
    console.log("hello");
    sendMsg("hello");
  }

  return (
    <div className="App">
      <Header/>
      <button onClick={send}>Hit</button>
    </div>
  )
}

export default App
