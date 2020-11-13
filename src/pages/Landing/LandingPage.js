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
        <div className="land-message">
          <motion.div variants={FadeIn} transition={{ duration: 1 }}>
            <h1 className="land-name">Hi, I'm Luis, </h1>
          </motion.div>
          <motion.div variants={FadeIn} transition={{ duration: 1 }}>
            <h1 className="land-job">
              I'm a Full-Stack Software <br></br> Developer
            </h1>
          </motion.div>
        </div>
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
