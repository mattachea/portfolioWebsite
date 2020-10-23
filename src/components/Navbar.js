import "./Navbar.css";

import React, { useState } from "react";
import ToysIcon from "@material-ui/icons/Toys";
import ReorderIcon from "@material-ui/icons/Reorder";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

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
          <Link
            to="/#resume"
            onClick={closeOnClick}
            className="nav-item list-item"
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
    // <nav className="navbar">
    //   <div className="navbar-toggle" onClick={toggleOpen}>
    //     {isOpen ? <ReorderIcon /> : <CloseIcon />}
    //   </div>
    //   <a href="/#home" class="logo">
    //     logo
    //   </a>
    //   <ul className={isOpen ? "main-nav" : "navbar-toggle"}>
    //     <li>
    //       <a href="/#home" className="nav-links">
    //         Home
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/#projects" className="nav-links">
    //         Projects
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/#resume" className="nav-links">
    //         Resume
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/#contact" className="nav-links">
    //         Contact
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
}
