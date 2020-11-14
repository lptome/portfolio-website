import React from "react";

import Col from "react-bootstrap/Col";

function CardTech(props) {
  return (
    <Col md={12} lg={4} className="d-flex justify-content-center">
      <div className="tech-stack">
        <h3 className="tech-title">Technologies</h3>
        <ul className="tech-list">
          {props.item.tech.map((tech, j) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
    </Col>
  );
}

export default CardTech;
