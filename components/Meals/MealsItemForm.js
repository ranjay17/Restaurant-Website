import React from "react";
import './MealsItemForm.css';

const MealsItemForm = () => {
  return (
    <>
      <div className="form-container">
        <form>
          <div className="amount">
            <label htmlFor="amount" className="amountLabel">Amount</label>
            <input type="number" name="amount" id="amount" className="inputAmount"/>
          </div>
          <button>+Add</button>
        </form>
      </div>
    </>
  );
};

export default MealsItemForm;
