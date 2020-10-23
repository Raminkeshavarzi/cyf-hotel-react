import React from "react";

function SearchButton(props) {
  return (
    <div>
      <button className={props.class}>{props.text}</button>
    </div>
  );
}
export default SearchButton;
