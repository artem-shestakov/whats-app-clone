import React, {useState} from 'react'
import './App.css';
import SideBar from "./SideBar";
import Chat from "./Chat";
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useStateValue} from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
        {!user ? (
            <Login />
        ) : (
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
        )}
    </div>
  );
}

export default App;
