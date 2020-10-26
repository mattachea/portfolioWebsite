import React from "react";
import "./Contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="title">Get in touch.</h1>
      <div className="icon-container">
        <a className="icon" href="https://github.com/mattachea" target="blank">
          <GitHubIcon />
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/matthewchea/"
          target="blank"
        >
          <LinkedInIcon />
        </a>
        <a
          className="icon"
          href="https://www.instagram.com/matt.chea/"
          target="blank"
        >
          <InstagramIcon />
        </a>
        <a className="icon" href="mailto:mattchea242.com" target="blank">
          <MailOutlineIcon />
        </a>
      </div>
    </div>
  );
}
