import React from "react";
import { motion } from "framer-motion";
import { FadeIn, Scale } from "./../../framer-motion/PageVariants";

function Title(props) {
  return (
    <motion.div
      variants={FadeIn}
      initial="initial"
      animate="in"
      exit="out"
      transition={FadeIn.transitions}
      className="title"
    >
      <div className="title-wrapper">
        <h1>{props.title}</h1>
        <motion.div
          variants={Scale}
          transition={FadeIn.transitions}
          className="title-hr"
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default Title;
