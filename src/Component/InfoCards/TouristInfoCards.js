import React from "react";

// CSS
import "./TouristInfoCards.css";
const TouristInfoCards = props => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.img} className="card-img-top" alt={props.name} />
        <h5 className="card-title"> {props.name} </h5>
        <p className="card-text">{props.description}</p>
        <a href={props.href} className="btn btn-primary" target="_blank">
          Go To {props.name}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
