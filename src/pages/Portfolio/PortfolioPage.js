import React from "react";
import { motion } from "framer-motion";
import Projects from "./../../components/Projects/Projects";
import Title from "./../../components/Title/Title";
import {
  PageVariants,
  PageTransitions,
} from "../../framer-motion/PageVariants";

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Projects",
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
        <Title title={this.state.title} />
        <div className="portfolio">
          <div className="row portfolio-subtitle mt-4 d-flex justify-content-center">
            <div className="col-12 text-center">
              <h2 className="subheader">
                Here are some projects I've worked on recently
              </h2>
            </div>
          </div>
          <Projects />
        </div>
      </motion.div>
    );
  }
}

export default PortfolioPage;
