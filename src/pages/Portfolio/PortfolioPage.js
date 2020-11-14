import React from "react";
import { motion } from "framer-motion";
import Projects from "./../../components/Projects/Projects";
import Title from "./../../components/Title/Title";
import {
  PageVariants,
  PageTransitions,
} from "../../framer-motion/PageVariants";

import "./PortfolioPage.css";

import { Row, Col } from "react-bootstrap";

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
        <Title title={this.state.title} />
        <div className="portfolio">
          <Row className="portfolio-subtitle mt-4 d-flex justify-content-center">
            <Col xs={12} className="text-center">
              <p style={{ fontSize: "1.5em" }}>
                Here are some projects I've worked on recently:
              </p>
            </Col>
          </Row>
          <Projects />
        </div>
      </motion.div>
    );
  }
}

export default PortfolioPage;
