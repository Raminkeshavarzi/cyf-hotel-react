import React from "react";

// CSS
import "./SearchButton.css";
function SearchButton(props) {
  return (
    <div>
      <button
        className={props.class}
        onClick={props.clicked}
        disabled={props.disabled}
      >
        {props.text}
      </button>
    </div>
  );
}
export default SearchButton;
