import React from "react";
import { ProjectItems } from "./ProjectItems";
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
      {item.map((item) => (
        <motion.div
          variants={ComeDown}
          transition={PageTransitions.portfolio}
          className="card-container"
        >
          <div className="row project-card">
            <CardImage item={item} />
            <CardInfo item={item} />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Projects;
