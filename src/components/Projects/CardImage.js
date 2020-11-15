import React from "react";

function CardImage(props) {
  return (
    <div className="col-md-12 col-xl-6 card-image">
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
    </div>
  );
}

export default CardImage;
