import React from "react";

import "./Slider.css";

const SlideShow = () => {
  const setPhoto = [
    "https://images.unsplash.com/photo-1560202840-7cf3a63c55e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1522165738785-40accf0e0f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80",
    "https://images.unsplash.com/photo-1520114878144-6123749968dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1448906654166-444d494666b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1473896100090-53523650d4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80",
    "https://images.unsplash.com/photo-1470608756445-2c9906b0680f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1511473299613-ea38c5771c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1533204515132-035bc8d4128c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1586681795755-b35934c338ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1468&q=80"
  ];
  const randomPhoto = setPhoto[
    Math.floor(Math.random() * setPhoto.length)
  ].toString();

  return (
    <div className="slider">
      <img src={randomPhoto} alt="london" className="photo" />
    </div>
  );
};

export default SlideShow;
