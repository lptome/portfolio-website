import React from "react";
import { motion } from "framer-motion";
import { ComeDown, PageTransitions } from "../../framer-motion/PageVariants";
import "./ContactPage.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
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
  };

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xdopdoel"
        method="POST"
      >
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
          {status === "SUCCESS" ? (
            <p>Thank you, I'll be in touch soon.</p>
          ) : (
            <button>SEND</button>
          )}
          {status === "ERROR" && (
            <p>
              Sorry, something went wrong, please try again later.
              Alternatively, you may contact me directly through my{" "}
              <a href="mailto:message@luistome.net">email address.</a>
            </p>
          )}
        </motion.div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
