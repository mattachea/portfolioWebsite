import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/about"></Route>
          <Route path="/projects"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
