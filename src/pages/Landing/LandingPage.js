import React, { Component } from "react";
import "./LandingPage.css";
import {
  PageVariants,
  PageTransitions,
  FadeIn,
  ComeUp,
} from "./../../framer-motion/PageVariants";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { motion } from "framer-motion";

function LandingPage(props) {
  return (
    <motion.div
      variants={PageVariants}
      initial="initial"
      exit="out"
      animate="in"
      transition={PageTransitions.landing}
      className="land-page"
    >
      <div className="land-message-wrapper">
        <motion.div
          variants={FadeIn}
          transition={{ duration: 1 }}
          className="land-message"
        >
          <h2 style={{ color: "#0064c8" }}>Hi, I'm Luis, </h2>
          <h1>
            I'm a Full-Stack <br></br>Software Developer
          </h1>
        </motion.div>
        <motion.div
          variants={ComeUp}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1, ease: "easeInOut" },
          }}
          transition={{ duration: 0.2, ease: "linear" }}
          className="land-button"
        >
          <Link to="/portfolio">
            CHECK OUT MY WORK<i className="fas fa-arrow-right"></i>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LandingPage;
