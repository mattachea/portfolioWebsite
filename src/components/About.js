import React from "react";
import "./About.css";

export default function About(props) {
  return (
    <div className="about">
      <div className="container">
        <h1 className="blurb">{props.blurb}</h1>
        <div className="empty"></div>
      </div>
    </div>
  );
}
