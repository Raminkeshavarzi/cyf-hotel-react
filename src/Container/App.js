import React, { useState } from "react";

// Component
import Bookings from "../Component/Bookings";
import Header from "../Component/Navigation/Header";
import Search from "../Component/Search/Search";
import TouristInfoCards from "../Component/InfoCards/TouristInfoCards";
import Footer from "../Component/Navigation/Footer/Footer";

// Css
import "./App.css";

const App = () => {
  const [setCities, setCitiesState] = useState([
    {
      name: "London",
      imgSrc:
        "https://i.pinimg.com/originals/df/be/96/dfbe96b3baa66eb09efc8da42c4e806d.png",
      href: "https://visitlondon.com/",
      description:
        "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times."
    },
    {
      name: "Glasgow",
      imgSrc:
        "https://www.glasgow.gov.uk/media/image/j/9/Glasgow-City-Crest.jpg",
      href: "https://peoplemakeglasgow.com/",
      description:
        "Glasgow is a port city on the River Clyde in Scotland's western Lowlands."
    },
    {
      name: "Manchester",
      imgSrc:
        "https://thumbs.dreamstime.com/z/manchester-city-skyline-silhouette-vector-logo-illustration-uk-great-britain-england-manchester-city-skyline-landscape-silhouette-114828720.jpg",
      href: "https://www.visitmanchester.com/",
      description:
        "Manchester is a major city in the northwest of England with a rich industrial heritage. "
    }
  ]);
  const [setFooter, setFooterState] = useState([
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ]);

  return (
    <div className="App">
      <Header />
      {setCities.map(city => {
        return (
          <TouristInfoCards
            name={city.name}
            img={city.imgSrc}
            href={city.href}
            description={city.description}
          />
        );
      })}
      <Bookings />
      <Footer
        address={setFooter[0]}
        email={setFooter[1]}
        phone={setFooter[2]}
      />
    </div>
  );
};

export default App;
