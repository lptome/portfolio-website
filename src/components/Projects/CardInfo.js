import React from "react";

function CardInfo(props) {
  return (
    <div className="col-md-12 col-xl-6">
      <div className="card-info-wrapper">
        <div className="card-info">
          <h1 className="card-title">Summary</h1>
          <div className="triangle-container">
            <div className="triangle triangle-br"></div>
          </div>
          <div className="card-subtitle">
            <p>{props.item.subtitle}</p>
            <div className="card-links">
              <a
                className="card-links-a"
                href={props.item.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                className="card-links-a"
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
    </div>
  );
}

export default CardInfo;
