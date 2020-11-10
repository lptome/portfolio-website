import React from "react";
import Axios from "axios";
import { motion } from "framer-motion";
import {
  PageVariants,
  PageTransitions,
  ComeDown,
} from "../../framer-motion/PageVariants";

import Title from "./../../components/Title/Title";
import "./ContactPage.css";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
      title: "CONTACT ME",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    var value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const label = document.getElementById(name + "Label");

    if (target.name === "message") {
      var len = value.length;

      if (len >= 1000) {
        value = value.substring(0, 1000);
        len = value.length;
      }
      var limit = document.getElementById("char-limit");
      limit.textContent = len + "/1000";
    }

    if (value !== "") {
      label.style =
        "color: #0064c8; " +
        "border-color: #0064c8; " +
        "transform: translate(1.2rem, 0.75rem); " +
        "font-size: 0.7rem; " +
        "text-transform: uppercase";
    } else {
      label.style = "";
    }

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true,
    });

    Axios.post("http://localhost:8080/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div>
        <div className="navbar"></div>
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
            </motion.div>
            <form className="contact-form" onSubmit={this.handleSubmit}>
              <motion.div
                variants={ComeDown}
                transition={PageTransitions.down}
                className="input-group"
              >
                <input
                  required
                  className="input"
                  type="text"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                ></input>
                <label for="name" id="nameLabel">
                  Full Name
                </label>
              </motion.div>
              <motion.div
                variants={ComeDown}
                transition={PageTransitions.down}
                className="input-group"
              >
                <input
                  required
                  className="input"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                  type="email"
                ></input>
                <label for="email" id="emailLabel">
                  Email Address
                </label>
              </motion.div>
              <motion.div
                variants={ComeDown}
                transition={PageTransitions.down}
                className="input-group"
              >
                <textarea
                  required
                  rows="10"
                  cols="50"
                  className="input"
                  value={this.state.message}
                  name="message"
                  onChange={this.handleChange}
                ></textarea>
                <label for="message" id="messageLabel">
                  Your Message
                </label>
                <div id="char-limit">0/1000</div>
              </motion.div>
              <motion.div
                variants={ComeDown}
                transition={PageTransitions.down}
                className="contact-button"
              >
                <button>SEND</button>
              </motion.div>

              {this.state.emailSent === true && (
                <div className="email-message">
                  <p className="success">Message sent successfully.</p>
                </div>
              )}
              {this.state.emailSent === false && (
                <div className="email-message">
                  <p className="error">Message not sent</p>
                  <div className="alternate-contact">
                    <p>
                      Sorry, something went wrong, please try again later.
                      Alternatively, you may contact me directly through my{" "}
                      <a href="mailto:message@luistome.net">email address.</a>
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default ContactPage;
