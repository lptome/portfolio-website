import React from "react";

import Col from "react-bootstrap/Col";

function CardImage(props) {
  return (
    <Col md={12} xl={6} className="card-image">
      <div className="image-container">
        <a
          className="box-link"
          href={props.item.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="box-link-span"></span>
        </a>
        <img src={props.item.img} alt={props.item.title}></img>
      </div>
    </Col>
  );
}

export default CardImage;
