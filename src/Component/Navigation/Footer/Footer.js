import React, { useState } from "react";

// CSS
import "./Footer.css";
const Footer = () => {
  const [setFooter] = useState([
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ]);

  return (
    <div className="footer">
      <ul>
        <li>
          {" "}
          <strong>Address: </strong> {setFooter[0]}{" "}
        </li>
        <li>
          {" "}
          <strong>Email: </strong> {setFooter[1]}{" "}
        </li>
        <li>
          {" "}
          <strong>Phone: </strong> {setFooter[2]}{" "}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
