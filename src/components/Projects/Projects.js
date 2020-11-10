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
        <div className="car-card">
          <CardImage item={item[0]} />
        </div>
        <CardInfo item={item[0]} />
      </motion.div>
      <motion.div
        variants={ComeDown}
        transition={PageTransitions.portfolio}
        className="card-container"
      >
        <CardInfo item={item[1]} />
        <div className="car-card">
          <CardImage item={item[1]} />
        </div>
      </motion.div>
      <motion.div
        variants={ComeDown}
        transition={PageTransitions.portfolio}
        className="card-container"
      >
        <div className="car-card">
          <CardImage item={item[2]} />
        </div>
        <CardInfo item={item[2]} />
      </motion.div>
      <motion.div
        variants={ComeDown}
        transition={PageTransitions.portfolio}
        className="card-container"
      >
        <CardInfo item={item[3]} />
        <div className="car-card">
          <CardImage item={item[3]} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
