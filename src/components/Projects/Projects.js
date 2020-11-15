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
      <motion.div
        variants={ComeDown}
        transition={PageTransitions.portfolio}
        className="card-container"
      >
        <div className="row project-card">
          <div className="col-md-12 project-title">
            <h1>{item[0].title}</h1>
          </div>
          <CardImage item={item[0]} />
          <CardInfo item={item[0]} />
          <CardTech item={item[0]} />
        </div>
        <div className="row">
          <hr className="separator"></hr>
        </div>
      </motion.div>
      <motion.div
        variants={ComeDown}
        transition={PageTransitions.portfolio}
        className="card-container"
      >
        <div className="row project-card">
          <div className="col-md-12 project-title">
            <h1>{item[1].title}</h1>
          </div>
          <CardImage item={item[1]} />
          <CardInfo item={item[1]} />
          <CardTech item={item[1]} />
        </div>
        <div className="row">
          <hr className="separator"></hr>
        </div>
      </motion.div>
      <motion.div
        variants={ComeDown}
        transition={PageTransitions.portfolio}
        className="card-container"
      >
        <div className="row project-card">
          <div className="col-md-12 project-title">
            <h1>{item[2].title}</h1>
          </div>
          <CardImage item={item[2]} />
          <CardInfo item={item[2]} />
          <CardTech item={item[2]} />
        </div>
        <div className="row">
          <hr className="separator"></hr>
        </div>
      </motion.div>
      <motion.div
        variants={ComeDown}
        transition={PageTransitions.portfolio}
        className="card-container"
      >
        <div className="row project-card">
          <div className="col-md-12 project-title">
            <h1>{item[3].title}</h1>
          </div>
          <CardImage item={item[3]} />
          <CardInfo item={item[3]} />
          <CardTech item={item[3]} />
        </div>
        <div className="row">
          <hr className="separator"></hr>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
