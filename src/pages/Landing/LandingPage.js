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
import Row from "react-bootstrap/Row";

function LandingPage(props) {
  return (
    <motion.div
      variants={PageVariants}
      initial="initial"
      exit="out"
      animate="in"
      transition={PageTransitions.landing}
      className="land-page-wrapper"
    >
      <div className="land-page">
        <div className="land-message-wrapper">
          <Row className="land-message">
            <motion.div variants={FadeIn} transition={{ duration: 1 }}>
              <h1 className="land-name">Hi, I'm Luis, </h1>
            </motion.div>
          </Row>
          <Row>
            <motion.div variants={FadeIn} transition={{ duration: 1 }}>
              <h1 className="land-job">
                I'm a Full-Stack Software <br></br> Developer
              </h1>
            </motion.div>
          </Row>
          <motion.div
            variants={ComeUp}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="land-button"
          >
            <Row>
              <Link to="/portfolio">
                CHECK OUT MY WORK<i className="fas fa-arrow-right"></i>
              </Link>
            </Row>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default LandingPage;
