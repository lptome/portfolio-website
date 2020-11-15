import React from "react";

function CardTech(props) {
  return (
    <div className="col-md-12 col-lg-6 d-flex justify-content-center">
      <div className="tech-stack">
        <h3 className="tech-title">Technologies</h3>
        <ul className="tech-list">
          {props.item.tech.map((tech, j) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardTech;
