import React from "react";

function CardInfo(props) {
  return (
    <div className="card-info">
      <div className="card-info-wrapper">
        <p className="card-title">{props.item.title}</p>
        <div className="card-subtitle">
          <p>{props.item.subtitle}</p>
          <div className="car-links">
            <a
              className="car-links-a"
              href={props.item.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              className="car-links-a"
              href={props.item.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
