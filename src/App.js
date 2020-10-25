import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const data = {
  title: "Hi, I'm Matthew.",
  description:
    "I'm recent grad from Johns Hopkins University and actively looking for software engineering positions.",
};

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <section id="home">
              <Home {...data} />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <section id="resume">
              <Resume />
            </section>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
