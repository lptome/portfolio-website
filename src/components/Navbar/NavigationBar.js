import React, { Component, useContext } from "react";
import { MenuItems } from "./MenuItems.js";
import "./NavigationBar.css";
import { motion } from "framer-motion";
import { FadeIn } from "../../framer-motion/PageVariants";

import { BrowserRouter as Router, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
      <Navbar
        className="NavbarItems"
        expand="lg"
        style={{ display: checkLocation(props.location) }}
      >
        <Navbar.Brand className="logo">
          <a href="/">LUIS TOME</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" className="navbar-dark" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="navbar-nav ml-auto">
            {MenuItems.map((item, index) => {
              return (
                <Link className={item.type + " " + item.cName} to={item.url}>
                  {item.title}
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
}

export default NavigationBar;
