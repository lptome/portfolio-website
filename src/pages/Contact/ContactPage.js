import React from "react";
import { motion } from "framer-motion";
import {
  PageVariants,
  PageTransitions,
  ComeDown,
} from "../../framer-motion/PageVariants";

import Title from "./../../components/Title/Title";
import Form from "./../Contact/Form";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      title: "Contact Me",
    };
  }

  render() {
    return (
      <motion.div
        variants={PageVariants}
        initial="initial"
        exit="out"
        animate="in"
        transition={PageTransitions.down}
        className="content"
      >
        <Title title={this.state.title} />
        <div className="contact">
          <motion.div
            variants={ComeDown}
            transition={PageTransitions.down}
            className="contact-message"
          >
            <p>Fill in this form and shoot me a message!</p>
            <p>
              Or email me directly&nbsp;
              <a href="mailto:message@luistome.net">here</a>
            </p>
            <div className="contact-form">
              <Form />
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }
}

export default ContactPage;
