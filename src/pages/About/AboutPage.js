import React from "react";
import { motion } from "framer-motion";
import {
  PageVariants,
  PageTransitions,
  FadeIn,
} from "../../framer-motion/PageVariants";

import Title from "./../../components/Title/Title";
import "./AboutPage.css";

import { Row, Col } from "react-bootstrap";

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
        <motion.div
          initial="initial"
          exit="out"
          animate="in"
          variants={PageVariants}
          transition={PageTransitions.about}
          className="content"
        >
          <Title title={this.state.title} />
          <div className="about-content">
            <Row className="d-flex justify-content-center">
              <Col md={12} lg={8}>
                <motion.div variants={PageVariants} className="about-profile">
                  <p>
                    My name is Luis, I'm a Full-Stack Web Developer based in
                    London.
                  </p>
                  <p>
                    I have a degree in Computer Science from Plymouth University
                    and have been programming for many years. There are few
                    things as satisfying as watching the code you've written
                    transform into elegant, creative pages.
                  </p>
                  <p>
                    When I'm not programming, I enjoy a good book, travel or
                    play video games. But really, above all I enjoy constantly
                    learning new things and exploring other areas in Computing,
                    from Game Development to Security.
                  </p>
                </motion.div>
              </Col>
              <Col md={12} lg={4} className="d-flex">
                <motion.div variants={PageVariants} className="about-stack">
                  <p>Here are some of the technologies I love:</p>
                  <div className="about-skills-wrapper">
                    <div className="about-skills">
                      {this.state.skills.map((skill, index) => {
                        return <li key={index}>{skill}</li>;
                      })}
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default AboutPage;
