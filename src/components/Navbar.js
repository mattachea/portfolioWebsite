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
        <Link to="/" onClick={closeOnClick} className=" nav-item">
          <ToysIcon className="nav-icon" />
          Matthew Chea
        </Link>
        <div className="menu-icon" onClick={toggleOpen}>
          {isOpen ? <CloseIcon /> : <ReorderIcon />}
        </div>
      </div>

      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={closeOnClick} className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeOnClick} className="nav-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeOnClick} className="nav-item">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeOnClick} className="nav-item">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
