import React, { Component } from "react";
import { CardItems } from "./CardItems.js";
import "./Card.css";

class Card extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="projects" onClick={this.handleClick}>
        {CardItems.map((item, index) => {
          return (
            <div className="car">
              <h1>{item.title}</h1>
              <div className="car-img">
                <img src={item.img} alt={item.title}></img>
              </div>
              <div className="car-subtitle">
                <h2>{item.subtitle}</h2>
              </div>
              <div className="car-technologies">
                <h3>Technologies Used</h3>
              </div>
              <div className="car-links">
                <p>Links: </p>
                <a href={item.github}>
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href={item.youtube}>
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
