import React from "react";
import { motion } from "framer-motion";
import {
  PageVariants,
  PageTransitions,
} from "../../framer-motion/PageVariants";

import Title from "./../../components/Title/Title";
import "./AboutPage.css";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "ABOUT ME",
      skills: [
        "Java",
        "C#",
        "JavaScript",
        "HTML",
        "CSS",
        "Spring",
        "React",
        "Bootstrap",
        "Hibernate",
        "jQuery",
        "SQL",
        "AWS",
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="navbar"></div>
        <motion.div
          initial={PageVariants.initial}
          exit={PageVariants.out}
          animate={PageVariants.in}
          variants={PageVariants}
          transition={PageTransitions}
          className="content"
        >
          <Title title={this.state.title} />
          <div className="about-content">
            <div className="about-profile">
              <p>
                My name is Luis, I'm a Full-Stack Web Developer based in London.
              </p>
              <p>
                I have a degree in Computer Science from Plymouth University and
                have been programming for many years. There are few things as
                satisfying as watching the code you've written transform into
                elegant, creative pages.
              </p>
              <p>
                When I'm not programming, I enjoy a good book, travel or play
                video games. But really, above all I enjoy constantly learning
                new things and exploring other areas in Computing, from Game
                Development to Security.
              </p>
            </div>
            <div className="about-stack">
              <p>Here are some of the technologies I use (almost) every day:</p>
              <div className="about-skills-wrapper">
                <div className="about-skills">
                  {this.state.skills.map((skill, index) => {
                    return <li key={index}>{skill}</li>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default AboutPage;
