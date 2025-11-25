import './index.css'
import React from "react";
import Banner from "./components/Banner";
import NextShows from "./components/NextShows";
import PromoteEvent from "./components/PromoteEvent";
import FloatingCart from "./components/FloatingCart";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Banner />
      <NextShows />
      <PromoteEvent />
      <FloatingCart />
    </CartProvider>
  );
};

export default App;
