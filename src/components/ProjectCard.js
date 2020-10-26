import React from "react";
import "./ProjectCard.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

export default function ProjectCard(props) {
  return (
    <div className="card">
      <img
        className="img"
        src={`assets/images/cards/${props.img}`}
        alt={props.title}
      />
      <div className="info">
        <h3>{props.title}</h3>
        <div className="info-sub">
          <p>{props.description}</p>
        </div>
        <div className="tech">{props.technologies}</div>
        <div className="buttons-container">
          {props.code && (
            <a className="icon-button" href={props.code} target="blank">
              <GitHubIcon />
            </a>
          )}
          {props.demo && (
            <a className="icon-button" href={props.demo} target="blank">
              <LaunchIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
