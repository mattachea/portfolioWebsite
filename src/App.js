import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const data = {
  title: "Hi, I'm Matthew Chea.",
  description:
    "I'm a recent grad and web developer. I'm actively looking for software engineering positions specializing in building websites and applications.",
};

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home">
        <Home {...data} />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
