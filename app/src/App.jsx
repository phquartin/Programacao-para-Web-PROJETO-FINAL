import React from "react";
import Banner from "./components/Banner";
import NextShows from "./components/NextShows";
import PromoteEvent from "./components/PromoteEvent";
import FloatingCart from "./components/FloatingCart";
import { CartProvider } from "./contexts/CartContext";
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <CartProvider>
      <Banner />
      <NextShows />
      <PromoteEvent />
      <Gallery />
      <FloatingCart />
      <Footer />
    </CartProvider>
  );
};

export default App;
