import React, { useRef, useContext } from "react";
import CartContext from "../../store.js/cart-context";
import './MealsItemForm.css';

const MealsItemForm = (props) => {
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) =>{
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 1) return;

    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: enteredAmount,
      price: props.price,
    });
  }
  return (
    <>
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <div className="amount">
            <label htmlFor="amount" className="amountLabel">
              Amount
            </label>
            <input
              ref={amountInputRef}
              type="number"
              name="amount"
              id="amount"
              className="inputAmount"
              min="1"
              defaultValue="1"
            />
          </div>
          <button>+Add</button>
        </form>
      </div>
    </>
  );
};

export default MealsItemForm;
