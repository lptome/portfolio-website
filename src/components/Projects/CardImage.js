import React from "react";

function CardImage(props) {
  return (
    <div className="image-container">
      <div className="image-overlay">
        <div className="image-overlay-content">
          <h2 className="tech-title">TECHNOLOGIES</h2>
          <a
            className="car-links-a"
            href={props.item.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="box-link"></span>
          </a>
          <div className="tech">
            <ul className="tech-list">
              {props.item.tech.map((tech, j) => (
                <li>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <img src={props.item.img} alt={props.item.title}></img>
    </div>
  );
}

export default CardImage;
