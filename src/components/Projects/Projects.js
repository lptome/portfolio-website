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
      {item.map((item) => (
        <motion.div
          variants={ComeDown}
          transition={PageTransitions.portfolio}
          className="card-container"
        >
          <div className="row project-card">
            <div className="col-md-12 project-title">
              <h1>{item.title}</h1>
            </div>
            <CardImage item={item} />
            <CardInfo item={item} />
            <CardTech item={item} />
          </div>
          <div className="row">
            <hr className="separator"></hr>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Projects;
