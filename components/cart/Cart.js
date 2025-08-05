import React from 'react'
import Modal from '../UI/Modal'

const Cart = () => {
    const cartItems = [{id:'card1', name: 'Sushi', price: 35.62}]
  return (
    <Modal>
      {cartItems.map((item) => {
        return (
          <ul>
            <li key={item.id} className="list-item">
              {item.name}
            </li>
          </ul>
        );
      })}
      <div className="cartDetails">
        <span className="total-text">Total Amount:</span>
        <span className="amount">$35.62</span>
      </div>
      <div className='buttons'>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
}

export default Cart
