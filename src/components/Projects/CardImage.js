import React from "react";

function CardImage(props) {
  return (
    <div className="col-md-12 col-xl-4 card-image">
      <div className="container">
        <a
          className="box-link"
          href={props.item.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span></span>
        </a>
        <img src={props.item.img} alt={props.item.title}></img>
      </div>
      <div className="project-type">
        <span>{props.item.type}</span>
      </div>
    </div>
  );
}

export default CardImage;
