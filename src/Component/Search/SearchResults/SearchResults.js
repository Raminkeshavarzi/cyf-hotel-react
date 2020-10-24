import React from "react";
import moment from "moment";

import "./SearchResults.css";

const SearchResults = props => {
  let checkIn = null;
  let checkOut = null;

  return (
    <div className="Table">
      <p>Results ({props.searchNumber} found)</p>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">Room ID</th>
            <th scope="col">Number Of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, idx) => (
            <tr key={item.id} className="highlight">
              <th scope="row">{item.title}</th>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>
                {
                  ((checkIn = moment(item.checkInDate)),
                  (checkOut = moment(item.checkOutDate)),
                  checkOut.diff(checkIn, "days"))
                }
              </td>
              <td style={{ display: "none" }}> {idx} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h6 style={{ textAlign: "center", marginBottom: "100px" }}>
        CYF hotel 2017
      </h6>
    </div>
  );
};

export default SearchResults;
