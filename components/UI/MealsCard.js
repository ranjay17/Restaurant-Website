import React from "react";
import "./MealsCard.css";

const MealsCard = (props) => {
  return (
    <div className="meals-container">
      <div className="mealInfo">
        <h1 className="title">{props.title}</h1>
        <p className="desc">{props.description}</p>
        <p className="price">${props.price}</p>
      </div>
      <div className="mealForm">
        {props.children}
        </div>
    </div>
  );
};

export default MealsCard;
