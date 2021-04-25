import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, disptach] = useStateValue();
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <div className="app_body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
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
