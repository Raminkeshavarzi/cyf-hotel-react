import React, { useState } from "react";

// Component
import MenuCard from "./RestaurantMenu/MenuCard";

// CSS
import "./Restaurant.css";
const Restaurant = props => {
  const [setPizza, setPizzaState] = useState(0);
  const [setSalad, setSaladState] = useState(0);

  return (
    <div className="restaurant">
      <MenuCard
        text={"Pizza"}
        img={
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80"
        }
        number={setPizza}
        addedclick={() => setPizzaState(setPizza + 1)}
        removedClick={() => setPizzaState(setPizza - 1)}
        disabled={setPizza === 0}
      />
      <MenuCard
        text={"Salad"}
        img={
          "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }
        number={setSalad}
        addedclick={() => setSaladState(setSalad + 1)}
        removedClick={() => setSaladState(setSalad - 1)}
        disabled={setSalad === 0}
      />
    </div>
  );
};

export default Restaurant;
