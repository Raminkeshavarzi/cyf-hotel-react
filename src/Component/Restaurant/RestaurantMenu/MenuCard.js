import React from "react";
// Component
import SearchButton from "../../UI/Button/SearchButton";
function MenuCard(props) {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <div className="card">
        <div className="card-body">
          <img src={props.img} className="card-img-top" alt={props.text} />
          <h5 className="card-title"> {props.text} </h5>
          <h6 className="card-title"> {props.number} </h6>
          <p className="card-text">{props.description}</p>
          <SearchButton
            class={"btn btn-primary"}
            text={"Add"}
            clicked={props.addedclick}
          />
          <SearchButton
            class={"btn btn-primary"}
            text={"Remove"}
            clicked={props.removedClick}
            disabled={props.disabled}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
