import React from "react";
import MealsItemForm from "../Meals/MealsItemForm";
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
        <MealsItemForm id={props.id} title={props.title} price={props.price} />
      </div>
    </div>
  );
};

export default MealsCard;
