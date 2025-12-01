import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Banner from "./components/Banner";
import NextShows from "./components/NextShows";
import Gallery from "./components/Gallery";
import PromoteBenefits from "./components/PromoteBenefits";
import StartPromotion from "./components/StartPromotion";
import FloatingCart from "./components/FloatingCart";
import Checkout from "./components/Checkout";
import PromoteEvent from "./components/PromoteEvent";
import Footer from "./components/Footer";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";

// Página Home agrupada
const Home = () => (
  <>
    <Banner />
    <NextShows />
    <PromoteEvent />
    <Gallery />
    <Footer />
  </>
);

// Página Divulgar agrupada
const DivulgarPage = () => (
  <>
    <PromoteBenefits />
    <StartPromotion />
    <Footer />
  </>
);

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/divulgar" element={<DivulgarPage />} />
            <Route path="/login" element={<Login />} />
            
            <Route 
              path="/checkout" 
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              } 
            />
            
          </Routes>
          <FloatingCart />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;