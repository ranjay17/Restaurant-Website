import React from "react";
import "./RestaurantSummary.css";
import Meals from "../Meals/Meals";

const RestaurantSummary = () => {
  return (
    <>
      <div className="summary-container">
        <h1 className="summary-heading">Delicious Food, Delivered To You</h1>
        <p className="paragraph">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home. All our meals are
          cooked with high-quality ingredients, just-in-time and of course by
          experienced chefs!
        </p>
      </div>
      <Meals />
    </>
  );
};

export default RestaurantSummary;
