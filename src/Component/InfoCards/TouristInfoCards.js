import React from "react";

// CSS
import "./TouristInfoCards.css";
const TouristInfoCards = props => {
  return (
    <div class="card">
      <div class="card-body">
        <img src={props.img} class="card-img-top" alt={props.name} />
        <h5 class="card-title"> {props.name} </h5>
        <p class="card-text">{props.description}</p>
        <a href={props.href} class="btn btn-primary" target="_blank">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
