import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import RestaurantSummary from "./RestaurantSummary";

const Header = () => {
  return (
    <>
      <div className="heading-container">
        <h1 className="heading">ReactMeals</h1>
        <div className="cart-container">
          <button className="cart-button">
            <FaShoppingCart size={18} style={{marginRight: "5px"}} />
            Your Cart
          </button>
        </div>
      </div>

      <div className="banner-img">
        <img
          src="https://as1.ftcdn.net/v2/jpg/06/11/73/66/1000_F_611736653_ducpoekHSmk9pdeZ2HxDp4cu1g8aq4np.jpg"
          alt="banner"
        />
      </div>
      <RestaurantSummary />
    </>
  );
};

export default Header;
