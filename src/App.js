import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

const HomeData = {
  title: "Hi, I'm Matthew Chea.",
  description: "",
};

const AboutData = {
  blurb:
    "i'm matt, a software engineer and recent grad from johns hopkins university. currently based in nyc ",
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home {...HomeData} />
      </section>
      <section id="about">
        <About {...AboutData} />
      </section>
      {/* <section id="projects">
        <Projects />
      </section> */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
