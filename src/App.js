import React from 'react'
import './App.css';
import SideBar from "./SideBar";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
        <div className="AppBody">
            <SideBar />
            <Chat />
        </div>
    </div>
  );
}

export default App;
