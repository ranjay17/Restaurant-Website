import React from "react";
import "./MealsCard.css";

const MealsCard = (props) => {
  return (
    <div>
        <div className="meals-container">
          <h1 className="title">{props.title}</h1>
          <p className="desc">{props.description}</p>
          <p className="price">${props.price}</p>
        </div>
    </div>
  )
};

export default MealsCard;
