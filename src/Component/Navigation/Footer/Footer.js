import React from "react";

// CSS
import "./Footer.css";
const Footer = props => {
  return (
    <div className="footer">
      <ul>
        <li>
          {" "}
          <strong>Address: </strong> {props.address}{" "}
        </li>
        <li>
          {" "}
          <strong>Email: </strong> {props.email}{" "}
        </li>
        <li>
          {" "}
          <strong>Phone: </strong> {props.phone}{" "}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
