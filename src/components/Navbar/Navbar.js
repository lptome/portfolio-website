import React, { Component, useContext } from "react";
import { MenuItems } from "./MenuItems.js";
import "./Navbar.css";
import { motion } from "framer-motion";
import { FadeIn, ComeUp } from "./../../framer-motion/PageVariants";

import { BrowserRouter as Router, Link } from "react-router-dom";

function checkColor(location) {
  const page = location;

  if (page === "/") {
    return "none";
  } else {
    return "rgb(20, 20, 20)";
  }
}

function Navbar(props) {
  return (
    <motion.nav
      variants={FadeIn}
      initial="initial"
      animate="in"
      transition={{ delay: 1.2 }}
      className="NavbarItems"
      style={{ background: checkColor(props.location) }}
    >
      <div className="logo">
        <Link to="/">LUIS TOME</Link>
      </div>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link className={item.type} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
