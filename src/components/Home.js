import React from "react";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home">
      <div className="container">
        <h1 className="headline">{props.title}</h1>
        <p className="description">{props.description}</p>
        <div className="button-container">
          {/* <a className="button" href="#projects">
            Projects
          </a> */}
          {/* <a className="button" href="#contact">
            Contact me!
          </a> */}
        </div>
      </div>
    </div>
  );
}
