import { useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/Layout/Header";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };
  return (
    <>
      <Header onShowCart={handleShowCart} />
      {showCart && <Cart onCloseCart={handleCloseCart} />}
    </>
  );
}

export default App;
