import "./Navbar.css";
import React, { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import CloseIcon from "@material-ui/icons/Close";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);
  const closeOnClick = () => setOpen(false);

  return (
    <div className="navbar">
      <div className="nav-title">
        <a href="/#home" onClick={closeOnClick} className="nav-icon">
          MC
        </a>
        <div className="menu-icon" onClick={toggleOpen}>
          {isOpen ? <CloseIcon /> : <ReorderIcon />}
        </div>
      </div>

      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/#home" onClick={closeOnClick} className="nav-item">
            Home
          </a>
        </li>
        <li>
          <a href="/#projects" onClick={closeOnClick} className="nav-item">
            Projects
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={closeOnClick} className="nav-item">
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1VmSSyy2tCFFy-a3yBTCnQ-DQSZaVwrpF/view?usp=sharing"
            target="blank"
            onClick={closeOnClick}
            className="nav-item"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
