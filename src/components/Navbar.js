import "./Navbar.css";

import React, { useState } from "react";
import ToysIcon from "@material-ui/icons/Toys";
import ReorderIcon from "@material-ui/icons/Reorder";
import CloseIcon from "@material-ui/icons/Close";

export default function Navbar() {
  const [isOpen, setOpen] = useState(true);

  const toggleOpen = () => setOpen(!isOpen);
  const closeOnClick = () => setOpen(false);

  return (
    <div className="navbar">
      <div className="nav-title">
        <a href="/#home" onClick={closeOnClick} className="nav-item">
          <ToysIcon className="menu-icon" />
          Matthew Chea
        </a>
        <div className="menu-icon" onClick={toggleOpen}>
          {isOpen ? <CloseIcon /> : <ReorderIcon />}
        </div>
      </div>

      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <a
            href="/#home"
            onClick={closeOnClick}
            className="nav-item list-item"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#projects"
            onClick={closeOnClick}
            className="nav-item list-item"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            onClick={closeOnClick}
            className="nav-item list-item"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1VmSSyy2tCFFy-a3yBTCnQ-DQSZaVwrpF/view?usp=sharing"
            target="blank"
            onClick={closeOnClick}
            className="nav-item list-item"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
