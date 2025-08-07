import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import "./Cart.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const handleCloseButton = () => {
    props.onCloseCart();
  };

  const handleAddItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 }); 
  };

  const handleRemoveItem = (id) => {
    cartCtx.removeItem(id); 
  };

  return (
    <Modal>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id} className="list-item">
            <div>
              <h2 className="title">{item.title}</h2>
              <div className="summary">
                <span className="price">${item.price.toFixed(2)}</span>
                <span className="amount">x {item.amount}</span>
                <button onClick={() => handleRemoveItem(item.id)} className="remove">-</button>
                <button onClick={() => handleAddItem(item)} className="addItem">+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="cartDetails">
        <span className="total-text">Total Amount:</span>
        <span className="amount">${cartCtx.totalAmount.toFixed(2)}</span>
      </div>

      <div className="buttons">
        <button onClick={handleCloseButton}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
