import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [{ id: "card1", name: "Sushi", price: 35.62 }];

  const handleCloseButton = () => {
    props.onCloseCart();
  };
  return (
    <Modal>
      {cartItems.map((item) => {
        return (
          <ul key={item.id}>
            <li className="list-item">{item.name}</li>
          </ul>
        );
      })}
      <div className="cartDetails">
        <span className="total-text">Total Amount:</span>
        <span className="amount">$35.62</span>
      </div>
      <div className="buttons">
        <button onClick={handleCloseButton}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
