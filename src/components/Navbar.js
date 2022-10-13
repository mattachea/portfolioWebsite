import "./Navbar.css";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>
          <a href="/#home" className="nav-item">
            Home
          </a>
        </li>
        {/* <li>
          <a href="/#projects" className="nav-item">
            Projects
          </a>
        </li> */}
        <li>
          <a href="/#about" className="nav-item">
            About
          </a>
        </li>
        <li>
          <a href="/#contact" className="nav-item">
            Contact
          </a>
        </li>
        {/* <li>
          <a
            href="https://drive.google.com/file/d/1VmSSyy2tCFFy-a3yBTCnQ-DQSZaVwrpF/view?usp=sharing"
            target="blank"
            className="nav-item"
          >
            Resume
          </a>
        </li> */}
      </ul>
    </div>
  );
}
