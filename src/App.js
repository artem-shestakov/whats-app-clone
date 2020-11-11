import React from 'react'
import './App.css';
import SideBar from "./SideBar";
import Chat from "./Chat";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className="AppBody">
            <Router>
                <SideBar />
                <Switch>
                <Route path="/room/:roomId">
                    <Chat />
                </Route>
                <Route path="/">
                    <Chat />
                </Route>
                </Switch>
            </Router>

        </div>
    </div>
  );
}

export default App;
