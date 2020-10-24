import React from "react";

// Component
import Search from "../Component/Search/Search";
import SearchResults from "../Component/Search/SearchResults/SearchResults";
import FakeBookings from "../data/fakeBookings.json";
import SlideShow from "../Component/UI/sliderShow/SlideShow";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  search(FakeBookings);

  return (
    <div className="App-content">
      <div className="container">
        <SlideShow />
        <Search search={search} />
        <SearchResults data={FakeBookings} searchNumber={FakeBookings.length} />
      </div>
    </div>
  );
};

export default Bookings;
