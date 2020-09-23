import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Tasks from "./Components/Tasks";
import User from "./Components/User";
import GlobalStateProvider from "./store/globalStateProvider";

function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/tasks" exact component={Tasks} />
          <Route path="/User" exact component={User} />
        </Router>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
