import { useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={handleShowCart} />
      {showCart && <Cart onCloseCart={handleCloseCart} />}
    </CartProvider>
  );
}

export default App;
