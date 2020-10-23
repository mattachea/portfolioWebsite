import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home(props) {
  return (
    <div className="home">
      <h1 className="title">{props.title}</h1>
      <p className="description">{props.description}</p>
      <div className="button-container">
        <a className="button" href="#projects">
          Projects
        </a>
        <a className="button" href="#contact">
          Contact me
        </a>
        <Link to="/resume" className="button">
          Resume
        </Link>
      </div>
    </div>
  );
}
