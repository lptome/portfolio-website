import React from "react";

function CardInfo(props) {
  return (
    <div className="col-md-12 col-xl-8 card-info">
      <div className="title">{props.item.title}</div>
      <hr></hr>
      <p>{props.item.subtitle}</p>
      <div className="tech">
        <h3 className="title">Technologies</h3>
        <ul className="list">
          {props.item.tech.map((tech, j) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="links-container">
        <div className="link">
          <a href={props.item.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
            Code
          </a>
        </div>
        {/* Don't render live link if not applicable  */}
        {props.item.live != null && (
          <div className="link">
            <a href={props.item.live} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt fa-2x"></i>
              Live
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardInfo;
