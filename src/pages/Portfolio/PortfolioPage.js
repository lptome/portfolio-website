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
        <Row className="d-flex mt-4 justify-content-center">
          <Col xs={12} className="d-flex justify-content-center">
            <p style={{ fontSize: "1.5em", textAlign: "center" }}>
              Here are some projects I've worked on recently:
            </p>
          </Col>
        </Row>
        <div className="portfolio">
          <Projects />
        </div>
      </motion.div>
    );
  }
}

export default PortfolioPage;
