import React, { useState } from "react";

// Component
import TouristInfoCards from "../TouristInfoCards";

const Cities = () => {
  const [setCities] = useState([
    {
      id: 1,
      name: "London",
      imgSrc:
        "https://i.pinimg.com/originals/df/be/96/dfbe96b3baa66eb09efc8da42c4e806d.png",
      href: "https://visitlondon.com/",
      description:
        "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times."
    },
    {
      id: 2,
      name: "Glasgow",
      imgSrc:
        "https://www.glasgow.gov.uk/media/image/j/9/Glasgow-City-Crest.jpg",
      href: "https://peoplemakeglasgow.com/",
      description:
        "Glasgow is a port city on the River Clyde in Scotland's western Lowlands."
    },
    {
      id: 3,
      name: "Manchester",
      imgSrc:
        "https://thumbs.dreamstime.com/z/manchester-city-skyline-silhouette-vector-logo-illustration-uk-great-britain-england-manchester-city-skyline-landscape-silhouette-114828720.jpg",
      href: "https://www.visitmanchester.com/",
      description:
        "Manchester is a major city in the northwest of England with a rich industrial heritage. "
    }
  ]);
  return (
    <div>
      {setCities.map(city => {
        return (
          <TouristInfoCards
            key={city.id}
            name={city.name}
            img={city.imgSrc}
            href={city.href}
            description={city.description}
          />
        );
      })}
    </div>
  );
};

export default Cities;
