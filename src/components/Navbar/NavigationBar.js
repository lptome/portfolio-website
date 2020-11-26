import React, { Component, useContext } from "react";
import { MenuItems } from "./MenuItems.js";
import "./NavigationBar.css";
import { motion } from "framer-motion";
import { FadeIn } from "../../framer-motion/PageVariants";
import { BrowserRouter as Router, Link } from "react-router-dom";

import CV from "../../assets/files/luis_tome_cv.pdf";

function checkLocation(location) {
  if (location === "/") {
    return "none";
  } else {
    return "flex";
  }
}

function NavigationBar(props) {
  return (
    <motion.div
      variants={FadeIn}
      initial="initial"
      animate="in"
      transition={{ delay: 0.5 }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-dark NavbarItems"
        style={{ display: checkLocation(props.location) }}
      >
        <a className="navbar-brand" href="/">
          LUIS TOME
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* NavLinks to pages within website  */}
            {MenuItems.map((item, index) => {
              return (
                <li className="nav-item active">
                  <Link
                    className={"nav-link" + item.type + " " + item.cName}
                    to={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            {/* External Links */}
            <li className="nav-item active">
              <a
                href="https://www.github.com/lptome"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </li>
            {/* <li className="nav-item active">
              <a href={CV} target="_blank" rel="noreferrer">
                DOWNLOAD CV
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}

export default NavigationBar;
