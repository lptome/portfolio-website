import React from "react";
import { motion } from "framer-motion";
import Projects from "./../../components/Projects/Projects";
import Title from "./../../components/Title/Title";
import {
  PageVariants,
  PageTransitions,
} from "../../framer-motion/PageVariants";

import "./PortfolioPage.css";

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "PROJECTS",
    };
  }
  render() {
    return (
      <motion.div
        variants={PageVariants}
        initial="initial"
        exit="out"
        animate="in"
        transitions={PageTransitions.portfolio}
      >
        <div className="navbar"></div>
        <Title title={this.state.title} />
        <div className="portfolio">
          <Projects />
        </div>
      </motion.div>
    );
  }
}

export default PortfolioPage;
