import React, { useState } from "react";

// Component
import Search from "../Component/Search/Search";
import SearchResults from "../Component/Search/SearchResults/SearchResults";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  // const [setBookingData, setBookingDataState ] = useState([

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  search(FakeBookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults data={FakeBookings} searchNumber={FakeBookings.length} />
      </div>
    </div>
  );
};

export default Bookings;
