import React from "react";
import { ProjectItems } from "./ProjectItems";
import "./Projects.css";
import { motion } from "framer-motion";
import {
  PageVariants,
  PageTransitions,
  ComeDown,
} from "../../framer-motion/PageVariants";

import CardImage from "../../components/Projects/CardImage";
import CardInfo from "../../components/Projects/CardInfo";
import CardTech from "../../components/Projects/CardTech";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const item = ProjectItems;

function Projects() {
  return (
    <motion.div
      variants={PageVariants}
      initial="initial"
      animate="in"
      transition={PageTransitions.portfolio}
      className="projects"
    >
      <motion.div
        variants={ComeDown}
        transition={PageTransitions.portfolio}
        className="card-container"
      >
        <Row className="project-card">
          <Col md={12} className="project-title">
            <h1>{item[0].title}</h1>
          </Col>
          <CardImage item={item[0]} />
          <CardInfo item={item[0]} />
          <CardTech item={item[0]} />
        </Row>
        <Row>
          <hr className="separator"></hr>
        </Row>
      </motion.div>
      <motion.div
        variants={ComeDown}
        transition={PageTransitions.portfolio}
        className="card-container"
      >
        <Row className="project-card">
          <Col md={12} className="project-title">
            <h1>{item[1].title}</h1>
          </Col>
          <CardImage item={item[1]} />
          <CardInfo item={item[1]} />
          <CardTech item={item[1]} />
        </Row>
        <Row>
          <hr className="separator"></hr>
        </Row>
      </motion.div>
      <motion.div
        variants={ComeDown}
        transition={PageTransitions.portfolio}
        className="card-container"
      >
        <Row className="project-card">
          <Col md={12} className="project-title">
            <h1>{item[2].title}</h1>
          </Col>
          <CardImage item={item[2]} />
          <CardInfo item={item[2]} />
          <CardTech item={item[2]} />
        </Row>
        <Row>
          <hr className="separator"></hr>
        </Row>
      </motion.div>
      <motion.div
        variants={ComeDown}
        transition={PageTransitions.portfolio}
        className="card-container"
      >
        <Row className="project-card">
          <Col md={12} className="project-title">
            <h1>{item[3].title}</h1>
          </Col>
          <CardImage item={item[3]} />
          <CardInfo item={item[3]} />
          <CardTech item={item[3]} />
        </Row>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
